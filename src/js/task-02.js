const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");

const ingredientsItem = ingredients.map((ingredient) => {
  // POINT 1
  const item = document.createElement("li");
  // POINT 2
  item.textContent = ingredient;
  // POINT 3
  item.classList.add("item");

  return item;
});
// POINT 4
ingredientsList.append(...ingredientsItem);
