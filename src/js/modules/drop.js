const drop = () => {
  let fileInputs = document.querySelectorAll('[name="upload"]');

  ["drop", "dragenter", "dragleave", "dragover"].forEach((eventName) => {
    fileInputs.forEach((input) => {
      input.addEventListener(eventName, preventDefaults, false);
    });
  });

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function highlight(item) {
    item.closest(".file_upload").style.border = "5px solid yellow";
    item.closest(".file_upload").style.backgroundColor = "rgba(0,0,0,.7)";
  }
  function unhighlight(item) {
    item.closest(".file_upload").style.border = "none";

    item.closest(".calc_form")
      ? (item.closest(".file_upload").style.backgroundColor = "#fff")
      : (item.closest(".file_upload").style.backgroundColor = "#ededed");
  }

  ["dragenter", "dragover"].forEach((eventName) => {
    fileInputs.forEach((input) => {
      input.addEventListener(eventName, () => highlight(input), false);
    });
  });

  ["drop", "dragleave"].forEach((eventName) => {
    fileInputs.forEach((input) => {
      input.addEventListener(eventName, () => unhighlight(input), false);
    });
  });

  fileInputs.forEach((input) => {
    input.addEventListener("drop", (e) => {
      input.files = e.dataTransfer.files;

      let [nameFile, expansionFile] = input.files[0].name.split(".");
      let dots = nameFile.length > 6 ? "..." : ".";
      input.previousElementSibling.textContent =
        nameFile.substring(0, 6) + dots + expansionFile;
    });
  });
};

export default drop;
