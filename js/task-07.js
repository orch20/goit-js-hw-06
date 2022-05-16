const refs = {
  input: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

const getValue = (event) => {
  const value = event.currentTarget.value;

  refs.text.style.fontSize = `${value}px`;
};

refs.input.addEventListener("input", getValue);

