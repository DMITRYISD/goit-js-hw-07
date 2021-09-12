const inputRange = document.querySelector("#font-size-control");
const inputText = document.querySelector("#text");

const handleInput = (event) => {
  inputText.style.fontSize = event.currentTarget.value + `px`;
};

inputRange.addEventListener("input", handleInput);
