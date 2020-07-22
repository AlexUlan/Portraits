const txtChekInput = (selector) => {
  document.body.querySelectorAll(selector).forEach((input) => {
    input.addEventListener("keypress", (event) => {
      if (event.key.match(/[^а-яё 0-9]/ig)) {
        event.preventDefault();
      }
    });
    input.addEventListener("input", (event) => {
      if (event.target.value.match(/[a-z]/ig)) {
        event.target.value = "";
      }
    });
  });
};

export default txtChekInput;
