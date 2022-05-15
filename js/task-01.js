const getCategories = () => {
  const categoriesEl = document.querySelectorAll(".item");
  console.log(`Number of categories: ${categoriesEl.length}`);

  for (let el of categoriesEl) {
    console.log("Category: ", el.querySelector("h2").textContent);
    console.log("Elements: ", el.querySelector("ul").children.length);
  }
};

getCategories();
