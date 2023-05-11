const body = document.body;
const changeColorBtn = document.querySelector(".change-color");
const textColorSpan = document.querySelector(".color");
changeColorBtn.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {
  const randomColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

  textColorSpan.textContent = randomColor;
  body.style.backgroundColor = textColorSpan.textContent;
}
