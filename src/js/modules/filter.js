const filter = () => {
  const btnContainer = document.querySelector(".portfolio-menu");

  const allBtn = btnContainer.querySelectorAll("li");
  const cardsWrapper = document.querySelector(".portfolio-wrapper");
  const allCards = cardsWrapper.querySelectorAll(".portfolio-block");
  const noCard = document.querySelector(".portfolio-no");

  allBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const nameType = btn.className.split(" ")[0];
      filterCards(nameType);
    });
  });

  btnContainer.addEventListener("click", (e) => {
    if (e.target && e.target.tagName == "LI") {
      allBtn.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");
    }
  });

  function filterCards(typeFilter) {
    noCard.style.display = "none";
    noCard.classList.remove("animated", "fadeIn");

    allCards.forEach((card) => {
      if (card.className.includes(typeFilter)) {
        card.style.display = "block";
        card.classList.add("animated", "fadeIn");
      } else if (typeFilter == "grandmother" || typeFilter == "granddad") {
        noCard.style.display = "block";
        noCard.classList.add("animated", "fadeIn");

        card.style.display = "none";
        card.classList.remove("animated", "fadeIn");
      } else {
        card.style.display = "none";
        card.classList.remove("animated", "fadeIn");
      }
    });
  }
};

export default filter;
