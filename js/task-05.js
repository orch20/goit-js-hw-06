const refs = {
  input: document.querySelector("#name-input"),
  outputSpan: document.querySelector("#name-output"),
};

const enterText = (event) => {
  event.currentTarget.value === ""
    ? (refs.outputSpan.textContent = "Anonymous")
    : (refs.outputSpan.textContent = event.currentTarget.value);
};

refs.input.addEventListener("input", enterText);
