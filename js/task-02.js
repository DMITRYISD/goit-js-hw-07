const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ingredientsById = document.getElementById("ingredients");
const addIngredients = ingredients.map((ingredient) => {
  const itemList = document.createElement("li");
  itemList.textContent = ingredient;
  return itemList;
});
ingredientsById.prepend(...addIngredients);
