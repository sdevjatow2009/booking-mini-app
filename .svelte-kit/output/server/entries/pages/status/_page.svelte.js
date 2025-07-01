import "clsx";
import { E as escape_html, K as store_get, M as unsubscribe_stores, C as pop, z as push } from "../../../chunks/index.js";
import "../../../chunks/client.js";
import { w as writable } from "../../../chunks/exports.js";
/* empty css                                                   */
function Status($$payload, $$props) {
  push();
  var $$store_subs;
  const year = writable(1974);
  const vin = writable("17A00000000000001");
  const reservationTime = writable("2025-06-27 15:23");
  const estimatedCompletionTime = writable("2025-06-28 12:00");
  const currentStatus = writable("In progress");
  const telegramUser = writable("@telegramUser");
  $$payload.out += `<div class="container"><div class="car-image"><img src="/golf.png" alt="Car"/></div> <div class="section-header">Volkswagen Golf</div> <div class="info-block"><div class="info-row"><div class="label">Year</div> <div class="value">${escape_html(store_get($$store_subs ??= {}, "$year", year))}</div></div> <div class="info-row"><div class="label">VIN</div> <div class="value">${escape_html(store_get($$store_subs ??= {}, "$vin", vin))}</div></div></div> <div class="section-header">Reservation</div> <div class="info-block"><div class="info-row"><div class="label">Reservation time</div> <div class="value">${escape_html(store_get($$store_subs ??= {}, "$reservationTime", reservationTime))}</div></div> <div class="info-row"><div class="label">Estimated completion time</div> <div class="value">${escape_html(store_get($$store_subs ??= {}, "$estimatedCompletionTime", estimatedCompletionTime))}</div></div> <div class="info-row"><div class="label">Current status</div> <div class="value">${escape_html(store_get($$store_subs ??= {}, "$currentStatus", currentStatus))}</div></div></div> <div class="back-button"><button class="backButton">Back</button></div> <div class="telegram-username">${escape_html(store_get($$store_subs ??= {}, "$telegramUser", telegramUser))}</div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _page($$payload) {
  Status($$payload);
}
export {
  _page as default
};
