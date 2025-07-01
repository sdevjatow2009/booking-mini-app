import "clsx";
import { C as pop, z as push } from "../../chunks/index.js";
import "../../chunks/client.js";
/* empty css                                                   */
/* empty css                                                */
function MainPage($$payload, $$props) {
  push();
  $$payload.out += `<div class="container"><div class="image-block"><img src="/img.png" alt="Big img"/></div> <div class="buttons-block"><div class="buttons-row"><button><img src="/hamburger.png" alt="A big hamburger"/> <div>Big Mac</div></button> <button><img src="/french-fries.png" alt="Fries"/> <div>fries</div></button></div> <div class="buttons-row"><button><img src="/pizza.png" alt="Pizza"/> <div>Booking</div></button> <button><img src="/donut.png" alt="a Donut"/> <div>Status</div></button></div></div></div>`;
  pop();
}
function _page($$payload) {
  MainPage($$payload);
}
export {
  _page as default
};
