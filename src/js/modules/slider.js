const slider = (
  slidersSelector,
  prevBtnSelector,
  nextBtnSelector,
  direction,
) => {
  let sliderCurrent = 1,
    paused = false;

  const sliders = document.querySelectorAll(slidersSelector);

  function showSlide(n) {
    if (n > sliders.length) {
      sliderCurrent = 1;
    } else if (n < 1) {
      sliderCurrent = sliders.length;
    }

    sliders.forEach((slide) => {
      slide.style.display = "none";
      slide.classList.add("animated");
    });
    sliders[sliderCurrent - 1].style.display = "block";
  }
  showSlide(sliderCurrent);

  function changeSlide(n) {
    showSlide((sliderCurrent += n));
  }

  try {
    const prevBtn = document.querySelector(prevBtnSelector),
      nextBtn = document.querySelector(nextBtnSelector);

    prevBtn.addEventListener("click", () => {
      changeSlide(-1);
      sliders[sliderCurrent - 1].classList.add("slideInLeft");
      sliders[sliderCurrent - 1].classList.remove("slideInRight");
      /*   sliders[sliderCurrent].classList.add("slideOutLeft"); */
    });

    nextBtn.addEventListener("click", () => {
      changeSlide(1);
      sliders[sliderCurrent - 1].classList.remove("slideInLeft");
      sliders[sliderCurrent - 1].classList.add("slideInRight");
    });
  } catch (e) {}

  function activeAnimation() {
    if (direction === "vertical") {
      paused = setInterval(() => {
        changeSlide(1);
        sliders[sliderCurrent - 1].classList.add("slideInDown");
      }, 3000);
    } else {
      paused = setInterval(() => {
        changeSlide(1);
        sliders[sliderCurrent - 1].classList.add("slideInLeft");
        sliders[sliderCurrent - 1].classList.remove("slideInRight");
      }, 3000);
    }
  }
  activeAnimation();

  sliders[0].parentNode.addEventListener("mouseenter", () => {
    clearInterval(paused);
  });
  sliders[0].parentNode.addEventListener("mouseleave", () => {
    activeAnimation();
  });
};

export default slider;
