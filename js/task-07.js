const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSizeControl.addEventListener("input", changingTextSize);

function changingTextSize() {
  text.style.fontSize = fontSizeControl.value + "px";
}
