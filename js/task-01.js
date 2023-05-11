const categoriesItems = document.querySelectorAll("#categories .item");

//  POINT 1
console.log(`Number of categories: ${categoriesItems.length}`);

// POINT 2
categoriesItems.forEach((category) => {
  const elementTitleText = category.querySelector("h2").textContent;
  const totalNumberOfElements = category.querySelectorAll("li").length;

  console.log(`Category: ${elementTitleText}`);
  console.log(`Elements: ${totalNumberOfElements}`);
});
