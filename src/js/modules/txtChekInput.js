const txtChekInput = (selector) => {
  document.body.querySelectorAll(selector).forEach((input) => {
    input.addEventListener("keypress", (event) => {
      if (event.key.match(/[^а-яё 0-9]/gi)) {
        event.preventDefault();
      }
    });
    input.addEventListener("input", (event) => {
      if (event.target.value.match(/[a-z]/gi)) {
        event.target.value = "";
      }
    });
  });
};

export default txtChekInput;
