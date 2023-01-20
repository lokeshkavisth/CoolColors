const generateBtn = document.getElementById("generateBtn");
const colors = document.querySelectorAll(".color");

generateBtn.addEventListener("click", function () {
  colors.forEach((color) => {
    color.style.backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);

    const colorCode = color.style.backgroundColor;
    color.innerText = colorCode;
  });
});
