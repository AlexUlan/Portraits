const pictureSize = (selectorBlocks) => {
  const blocks = document.querySelectorAll(selectorBlocks);

  function showImg(block) {
    block.querySelectorAll("p:not(.sizes-hit)").forEach((elem) => {
      elem.style.display = "none";
    });
    const img = block.querySelector("img");
    img.src = img.src.slice(0, -4) + "-1.png";
  }

  function hiddenImg(block) {
    block.querySelectorAll("p:not(.sizes-hit)").forEach((elem) => {
      elem.style.display = "block";
    });
    const img = block.querySelector("img");
    img.src = img.src.slice(0, -6) + ".png";
  }
  blocks.forEach((block) => {
    block.addEventListener("mouseover", () => {
      showImg(block);
    });
    block.addEventListener("mouseout", () => {
      hiddenImg(block);
    });
  });
};

export default pictureSize;
