const { getDate } = require("../services/requests");

const showMoreStyles = (trigerSelector, wraperSelector) => {
  const triger = document.querySelector(trigerSelector),
    wrapper = document.querySelector(wraperSelector);

  function createCard(response) {
    response.forEach(({ src, title, link }) => {
      let card = document.createElement("div");
      card.classList.add(
        "animated",
        "fadeInUp",
        "col-sm-3",
        "col-sm-offset-0",
        "col-xs-10",
        "col-xs-offset-1",
      );
      card.innerHTML = `
            <div class='styles-block'>
                <img src=${src} alt>
                <h4>${title}</h4>
                <a href=${link}>Подробнее</a>
            </div>
            `;
      wrapper.appendChild(card);
    });
  }

  function showErrow(parentNode) {
    const errorEl = document.createElement("span");
    errorEl.innerText = "Произошла ошибка!";
    wrapper.appendChild(errorEl);
  }

  triger.addEventListener("click", function () {
    getDate("http://localhost:3000/styles")
      .then((response) => {
        createCard(response);
      })
      .catch((err) => {
        showErrow();
      });
    this.remove();
  });
};

export default showMoreStyles;
