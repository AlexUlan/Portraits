import modal from "./modules/modal";
import slider from "./modules/slider";
import forms from "./modules/forms";
import mask from "./modules/mask";
import txtChekInput from "./modules/txtChekInput";
import showMoreStyles from "./modules/showMoreStyles";
import calc from "./modules/calc";
import filter from "./modules/filter";
import pictureSize from "./modules/pictureSize";

window.addEventListener("DOMContentLoaded", () => {
  modal();
  slider(".feedback-slider-item", ".main-prev-btn", ".main-next-btn", "");
  slider(".main-slider-item", "", "", "vertical");
  forms();
  mask('[name="phone"]');
  txtChekInput('[name="name"]');
  txtChekInput('[name="message"]');
  showMoreStyles(".button-styles", "#styles .row");
  calc("#size", "#material", "#options", ".promocode", ".calc-price");
  filter();
  pictureSize(".sizes-block");
});
