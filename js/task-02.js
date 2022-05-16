const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const refs = {
  list: document.querySelector("#ingredients"),
};
const listArray = [];

const createListItem = (text) => {
  const li = document.createElement("li");
  li.textContent = text;
  li.classList.add("item");
  listArray.push(li);
};

ingredients.forEach((ingredient) => {
  createListItem(ingredient);
});

refs.list.append(...listArray);
