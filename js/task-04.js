const refs = {
  counter: document.querySelector("#value"),
  decrementButton: document.querySelector('button[data-action="decrement"]'),
  incrementButton: document.querySelector('button[data-action="increment"]'),
};

let currentValue = 0;

refs.decrementButton.addEventListener("click", () => {
  currentValue -= 1;
  showCurrentValue();
});
refs.incrementButton.addEventListener("click", () => {
  currentValue += 1;
  showCurrentValue();
});

const showCurrentValue = () => {
  refs.counter.textContent = `${currentValue}`;
};
