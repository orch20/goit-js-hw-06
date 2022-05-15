function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  button: document.querySelector(".change-color"),
  nameColor: document.querySelector(".color"),
  bodyColor: document.querySelector("body"),
};

const changeColor = () => {
  refs.bodyColor.style.backgroundColor = getRandomHexColor();
  refs.nameColor.textContent = refs.bodyColor.style.backgroundColor;
};

refs.button.addEventListener("click", changeColor);
