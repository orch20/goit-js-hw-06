const getCategories = () => {
  const categoriesEl = document.querySelectorAll(".item");
  console.log(`Number of categories: ${categoriesEl.length}`);

  for (let el of categoriesEl) {
    console.log("Category: ", el.firstElementChild.textContent);
    console.log("Elements: ", el.lastElementChild.children.length);
  }
};

getCategories();
