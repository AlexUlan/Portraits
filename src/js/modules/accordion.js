const accordion = (headerSelector) => {
  const trigers = document.querySelectorAll(headerSelector);

  trigers.forEach(function (triger) {
    triger.addEventListener("click", function () {
      if (this.classList.contains("active")) {
        hidenContent(this);
      } else {
        trigers.forEach(function (triger) {
          hidenContent(triger);
        });
        this.classList.add("active");
        this.nextElementSibling.classList.add("active-content");
        this.nextElementSibling.style.maxHeight =
          this.nextElementSibling.scrollHeight + "80" + "px";
      }
    });
  });

  function hidenContent(elem) {
    elem.classList.remove("active");
    elem.nextElementSibling.classList.remove("active-content");
    elem.nextElementSibling.style.maxHeight = "0px";
  }
};

export default accordion;
