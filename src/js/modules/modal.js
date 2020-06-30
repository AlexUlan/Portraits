const modal = () => {
  let clickAnyBtn = false;

  function bindModal(
    trigerSelecter,
    popupSelector,
    closeSelector,
    removeTriger = false,
  ) {
    const triger = document.querySelectorAll(trigerSelecter),
      popup = document.querySelector(popupSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll("[data-modal]"),
      widthScroll = calcScroll();

    triger.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }
        windows.forEach((i) => {
          i.style.display = "none";
          i.classList.add("animated", "fadeIn");
        });
        if (removeTriger) {
          item.remove();
        }
        clickAnyBtn = true;
        popup.style.display = "block";
        document.body.style.marginRight = `${widthScroll}px`;
        document.body.classList.add("modal-open");
      });
    });

    close.addEventListener("click", () => {
      windows.forEach((item) => {
        item.style.display = "none";
      });
      popup.style.display = "none";
      document.body.style.marginRight = `0px`;
      document.body.classList.remove("modal-open");
    });

    popup.addEventListener("click", (e) => {
      if (e.target === popup) {
        windows.forEach((item) => {
          item.style.display = "none";
        });
        popup.style.display = "none";
        document.body.style.marginRight = `0px`;
        document.body.classList.remove("modal-open");
      }
    });
  }

  function showpopupByTime(popupSelector, timeShow) {
    setTimeout(function () {
      let display = false;
      document.querySelectorAll("[data-modal]").forEach((modal) => {
        if (getComputedStyle(modal).display !== "none") {
          display = true;
        }
      });

      if (!display) {
        let widthScroll = calcScroll();

        document.body.style.marginRight = `${newCalcScroll}px`;
        document.querySelector(popupSelector).style.display = "block";
        document.body.classList.add("modal-open");
      }
    }, timeShow);
  }

  function calcScroll() {
    const tempDiv = document.createElement("div");
    tempDiv.style.width = "50px";
    tempDiv.style.height = "50px";
    tempDiv.style.visibility = "hidden";
    tempDiv.style.overflowY = "scroll";

    document.body.append(tempDiv);
    const scroll = tempDiv.offsetWidth - tempDiv.clientWidth;
    tempDiv.remove();
    return scroll;
  }
  let newCalcScroll = calcScroll();

  bindModal(".button-design", ".popup-design", ".popup-design .popup-close");
  bindModal(
    ".button-consultation",
    ".popup-consultation",
    ".popup-consultation .popup-close",
  );
  bindModal(".fixed-gift", ".popup-gift", ".popup-gift .popup-close", true);

  function openByScroll(selector) {
    window.addEventListener("scroll", () => {
      let scrollHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight,
      );

      if (
        !clickAnyBtn &&
        scrollHeight <=
          window.pageYOffset + document.documentElement.clientHeight
      ) {
        document.querySelector(selector).click();
      }
    });
  }

  openByScroll(".fixed-gift");

  /*  showpopupByTime(".popup-consultation", 2000); */
};

export default modal;
