const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", removeFocusBtn);

function removeFocusBtn() {
  if (textInput.value.length === 6) {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
  } else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  }
}
