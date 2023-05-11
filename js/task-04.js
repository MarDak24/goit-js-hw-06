let counterValue = 0;

const valueSpan = document.querySelector("#value");
const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);

const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);

incrementButton.addEventListener("click", increaseByOne);
decrementButton.addEventListener("click", decreaseByOne);

function increaseByOne() {
  counterValue += 1;
  valueSpan.textContent = counterValue;
}

function decreaseByOne() {
  counterValue -= 1;
  valueSpan.textContent = counterValue;
}
