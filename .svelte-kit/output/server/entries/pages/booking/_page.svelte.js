import "clsx";
import { F as ensure_array_like, E as escape_html, G as attr_class, I as attr, J as stringify, C as pop, z as push } from "../../../chunks/index.js";
import "../../../chunks/client.js";
/* empty css                                                      */
function TimeSlots($$payload, $$props) {
  push();
  let slots = [
    { time: "10:00", status: "unavailable" },
    { time: "10:30", status: "unavailable" },
    { time: "11:00", status: "unavailable" },
    { time: "11:30", status: "unavailable" },
    { time: "12:00", status: "available" },
    { time: "12:30", status: "available" },
    { time: "13:00", status: "available" },
    { time: "13:30", status: "available" },
    { time: "14:00", status: "unavailable" },
    { time: "14:30", status: "unavailable" },
    { time: "15:00", status: "unavailable" },
    { time: "15:30", status: "unavailable" },
    { time: "16:00", status: "available" },
    { time: "16:30", status: "available" },
    { time: "17:00", status: "available" },
    { time: "17:30", status: "available" }
  ];
  function groupSlots(slots2) {
    const result = [];
    for (let i = 0; i < slots2.length; i += 2) {
      result.push([slots2[i], slots2[i + 1]]);
    }
    return result;
  }
  const each_array = ensure_array_like(groupSlots(slots));
  $$payload.out += `<div class="container"><div class="top-bar-wrapper"><button class="arrow-btn left-arrow">&lt;</button> <div class="top-bar"><button class="date-display">2025-06-19</button></div> <button class="arrow-btn right-arrow">></button></div> <div class="date-table"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let pair = each_array[$$index_1];
    const each_array_1 = ensure_array_like(pair);
    $$payload.out += `<div class="time-row"><div class="time-label">${escape_html(pair[0].time)}</div> <!--[-->`;
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let slot = each_array_1[$$index];
      $$payload.out += `<button${attr_class(`btn ${stringify(slot.status)}`)}${attr("disabled", slot.status === "unavailable", true)}>${escape_html(slot.time)}</button>`;
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--></div> <div class="back-button1"><button class="backButton1">Back</button></div> <div class="legend"><span class="dot available-dot"></span> - Available <span class="dot unavailable-dot"></span> - Unavailable</div></div>`;
  pop();
}
function _page($$payload) {
  TimeSlots($$payload);
}
export {
  _page as default
};
