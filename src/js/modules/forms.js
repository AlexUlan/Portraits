/* import checkNumInputs from "./chekNuminput"; */

const forms = (state) => {
  const forms = document.querySelectorAll(".form"),
    inputs = document.querySelectorAll("input"),
    upLoad = document.querySelectorAll('[name="upload"]');

  /*   checkNumInputs('input[name="user_phone"]'); */
  /*   phoneInputs.forEach((phoneInput) => {
    phoneInput.addEventListener("input", () => {
      phoneInput.value = phoneInput.value.replace(/\D/, "");
    });
  }); */

  const message = {
    loading: "Загрузка...",
    fail: "Ошибка",
    success: "Спасибо! Скоро мы с вами свяжемся",
    spinner: "./assets/img/spinner.gif",
    ok: "./assets/img/ok.png",
    fail: "./assets/img/fail.png",
  };

  const path = {
    designer: "assets/server.php",
    question: "assets/question.php",
  };

  const postDate = async (data, url) => {
    const resData = await fetch(url, {
      method: "POST",
      body: data,
    });
    return await resData.text();
  };

  const clearInputs = () => {
    inputs.forEach((input) => (input.value = ""));
    upload.forEach((item) => {
      item.previousElementSibling.textContent = "Файл не найден";
    });
  };

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const messageStatus = document.createElement("div");
      messageStatus.classList.add("status");
      form.parentNode.appendChild(messageStatus);

      form.classList.add("animated", "fadeOutUp");

      setTimeout(() => {
        form.style.display = "none";
      }, 400);

      let statusImg = document.createElement("img");
      statusImg.setAttribute("src", message.spinner);
      statusImg.classList.add("animated", "fadeInUp");
      messageStatus.appendChild(statusImg);

      let textMessage = document.createElement("div");
      textMessage.textContent = message.loading;
      messageStatus.appendChild(textMessage);

      const formData = new FormData(form);
      let api;

      form.closest(".popup-design") || form.classList.contains("calc_form")
        ? (api = path.designer)
        : (api = path.question);

      /*       postDate(api, formData)
               .then(() => {
                statusImg.setAttribute("src", message.ok);
              textMessage.textContent = message.success;
        })
        .catch(() => {
            statusImg.setAttribute("src", message.fail);
            textMessage.textContent = message.failure;
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            messageStatus.remove();
            item.style.display = "block";
            item.classList.remove("fadeOutUp");
            item.classList.add("fadeInUp")
          }, 5000);
        }); */
    });
  });
  upLoad.forEach((item) => {
    item.addEventListener("input", () => {
      let [nameFile, expansionFile] = item.files[0].name.split(".");
      let dots = nameFile.length > 6 ? "..." : ".";
      item.previousElementSibling.textContent =
        nameFile.substring(0, 6) + dots + expansionFile;
    });
  });
};

export default forms;
