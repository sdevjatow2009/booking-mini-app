<script>
    import { goto } from "$app/navigation";
    import { onMount } from 'svelte';

  onMount(() => {
        document.body.style.backgroundImage = 'none';
    })

  let slots = $state([
    { time: '10:00', status: 'unavailable' },
    { time: '10:30', status: 'unavailable' },
    { time: '11:00', status: 'unavailable' },
    { time: '11:30', status: 'unavailable' },
    { time: '12:00', status: 'available' },
    { time: '12:30', status: 'available' },
    { time: '13:00', status: 'available' },
    { time: '13:30', status: 'available' },
    { time: '14:00', status: 'unavailable' },
    { time: '14:30', status: 'unavailable' },
    { time: '15:00', status: 'unavailable' },
    { time: '15:30', status: 'unavailable' },
    { time: '16:00', status: 'available' },
    { time: '16:30', status: 'available' },
    { time: '17:00', status: 'available' },
    { time: '17:30', status: 'available' },
  ]);

  function toggle(slot) {
    if (slot.status === 'available')
    slot.status = 'unavailable'
  }

  function groupSlots(slots) {
    const result = [];
    for (let i = 0; i < slots.length; i += 2) {
      result.push([slots[i], slots[i + 1]]);
    }
    return result;
  }

  function goToMain() {
    goto('/');
  }
</script>

<div class="container">
  <div class="top-bar-wrapper">
    <button class="arrow-btn left-arrow">&lt;</button>
    <div class="top-bar">
      <button class="date-display">2025-06-19</button>
    </div>
    <button class="arrow-btn right-arrow">&gt;</button>
  </div>

  <div class="date-table">
    {#each groupSlots(slots) as pair}
      <div class="time-row">
        <div class="time-label">{pair[0].time}</div>
        {#each pair as slot}
          <button
            class="btn {slot.status}"
            onclick={() => toggle(slot)}
            disabled={slot.status === 'unavailable'}>
            {slot.time}
          </button>
        {/each}
      </div>
    {/each}
  </div>

  <div class="back-button1">
    <button class="backButton1" onclick={goToMain}>Back</button>
  </div>

  <div class="legend">
    <span class="dot available-dot"></span> - Available
    <span class="dot unavailable-dot"></span> - Unavailable
  </div>
</div>

<style>
  @import '$lib/booking.css';
</style>