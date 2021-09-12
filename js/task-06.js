const input = document.getElementById("validation-input");
input.addEventListener("blur", inputAreaLe);
function inputAreaLe(event) {
  const lengthValue = this.dataset.length;
  event.currentTarget.value.length === Number(lengthValue)
    ? (input.classList = "valid")
    : (input.classList = "invalid");
}
