const refs = {
  input: document.querySelector("#validation-input"),
};

const validNumber = Number(refs.input.dataset.length);
console.log(validNumber);

const changeColor = (event) => {
  const currentNumber = event.currentTarget.value.length;
  console.log(currentNumber);
  if (validNumber !== currentNumber) {
    refs.input.classList.remove("valid");
    refs.input.classList.add("invalid");
  } else {
    refs.input.classList.remove("invalid");
    refs.input.classList.add("valid");
  }
};

refs.input.addEventListener("blur", changeColor);
