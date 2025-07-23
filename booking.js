  import rrule from 'rrule';
  const { RRule } = rrule;

  export function generateTimeSlots(fromDate = new Date(), daysAhead = 90) {
    const endDate = new Date(fromDate);
    endDate.setDate(endDate.getDate() + daysAhead);

    const workingHours = [
      '10:00', '10:30', '11:00', '11:30',
      '12:00', '12:30', '13:00', '13:30',
      '14:00', '14:30', '15:00', '15:30',
      '16:00', '16:30', '17:00', '17:30'
    ];

    const slots = [];

    const rule = new RRule({
      freq: RRule.DAILY,
      dtstart: fromDate,
      until: endDate,
      byweekday: [RRule.MO, RRule.TU, RRule.WE, RRule.TH, RRule.FR],
    });

    const days = rule.all();

    for (const day of days) {
      for (const time of workingHours) {
        const [hours, minutes] = time.split(':').map(Number);
        const slot = new Date(day);
        slot.setHours(hours, minutes, 0, 0);

        slots.push(slot.toLocaleString('sv-SE'));
      }
    }

    return slots;
  }

  export function markUnavailableSlots(allSlots, bookedSlots) {
    const bookedSet = new Set(bookedSlots);
    return allSlots.map(time => ({
      time,
      status: bookedSet.has(time) ? 'unavailable' : 'available'
    }));
  }

  export function findContinuousSlots(slots, n) {
    const availableTimes = slots
      .filter(s => s.status === 'available')
      .map(s => new Date(s.time))
      .sort((a, b) => a - b);

    const result = [];
    let group = [];

    for (let i = 0; i < availableTimes.length; i++) {
      if (group.length === 0) {
        group.push(availableTimes[i]);
      } else {
        const prev = group[group.length - 1];
        const curr = availableTimes[i];
        const diff = (curr - prev) / (1000 * 60);

        if (diff === 30 || (diff > 30 && diff <= 14.5 * 60)) {
          group.push(curr);
        } else {
          group = [curr];
        }
      }

      if (group.length === n) {
        result.push(group.map(d => d.toLocaleString('sv-SE')));
        group.shift(); 
      }
    }

    return result;
  }





  const all = generateTimeSlots(undefined, 0);
  const booked = [
    all[3],
    all[5]
  ];

  const marked = markUnavailableSlots(all, booked);
  const consecutive = findContinuousSlots(marked, 5);
  console.log(marked);
  console.log(consecutive);
  console.log(all);


