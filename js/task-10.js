const controlsBox = document.querySelector("controls");
const inputNumberEl = document.querySelector("input");
const createBoxBtnEl = document.querySelector("button[data-create]");
const destroyBoxesBtnEl = document.querySelector("button[data-destroy]");
const containerForNewBoxes = document.getElementById("boxes");

inputNumberEl.addEventListener("input", toogleValue);
createBoxBtnEl.addEventListener("click", () => {
  createBoxes(Number(inputNumberEl.value));
});
destroyBoxesBtnEl.addEventListener("click", destroyBoxesMarkup);

let inputValue = 0;
function toogleValue(event) {
  inputValue = event.currentTarget.value;
  console.log(inputValue);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let divArray = [];
  let firstSize = 30;

  for (let i = 0; i < amount; i++) {
    firstSize += 10;
    const divElement = document.createElement("div");
    divElement.classList.add("item");
    divElement.style.height = `${firstSize}px`;
    divElement.style.width = `${firstSize}px`;
    divElement.style.marginRight = "30px";
    divElement.style.marginBottom = "30px";
    divElement.style.backgroundColor = getRandomHexColor();

    divArray.push(divElement);
  }
  return containerForNewBoxes.append(...divArray);
}

function destroyBoxesMarkup() {
  inputNumberEl.value = "";
  return (containerForNewBoxes.innerHTML = "");
}
