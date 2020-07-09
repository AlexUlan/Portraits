const accordion = (headerSelector, blocksSelector) => {
  const trigers = document.querySelectorAll(headerSelector),
    blocks = document.querySelectorAll(blocksSelector);

  blocks.forEach((block) => {
    block.classList.add("animated", "fadeInUp");
  });

  trigers.forEach(function (triger) {
    triger.addEventListener("click", function () {
      if (!this.classList.contains("active")) {
        trigers.forEach((elem) => {
          elem.classList.remove("active", "active-style");
        });
      }
      this.classList.add("active", "active-style");
    });
  });
};

export default accordion;
