import modal from "./modules/modal";
import slider from "./modules/slider";
import forms from "./modules/forms";

window.addEventListener("DOMContentLoaded", () => {
  modal();
  slider(".feedback-slider-item", ".main-prev-btn", ".main-next-btn", "");
  slider(".main-slider-item", "", "", "vertical");
  forms();
});
