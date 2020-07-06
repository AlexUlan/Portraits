const calc = (sizeEl, materialEl, optionsEl, promocodeEl, calcPriceEl) => {
  const size = document.querySelector(sizeEl);
  const material = document.querySelector(materialEl);
  const options = document.querySelector(optionsEl);
  const promocode = document.querySelector(promocodeEl);
  const calcPrice = document.querySelector(calcPriceEl);

  let sum = 0;

  function calSum() {
    sum = Math.round(+size.value * +material.value + +options.value);
    if (size.value == "" || material.value == "") {
      calcPrice.textContent = "Выберете размер и материал";
    } else if (promocode.value.trim() == "IWANTPOPART") {
      sum = sum * 0.7;
      calcPrice.textContent = sum;
    } else {
      calcPrice.textContent = sum;
    }
  }

  size.addEventListener("change", calSum);
  material.addEventListener("change", calSum);
  options.addEventListener("change", calSum);
  promocode.addEventListener("input", calSum);
};

export default calc;
