fetch("https://dummyjson.com/recipes")
  .then(response => {
    return response.json();
  })
  .then(response => {
    console.log(allDesserts(response.recipes));
    console.log(recipesWithOver30Reviews(response.recipes));
    console.log(recipesWithCinnamon(response.recipes));
    console.log(lunchAndDinnerFoods(response.recipes));
    console.log(ingredientsForMangoSalsaChicken(response.recipes));
    console.log(averageAmountOfCalsOfAmericanRecipes(response.recipes));
    console.log(averageCookingTimeOfPastaRecipies(response.recipes));
    console.log(lowestReviewedRecipe(response.recipes));
  })
  .catch(error => {
    console.error("Failed request:", error.message);
  });

const allDesserts = recipes => {
  let desserts = recipes.filter(recipe => recipe.mealType.includes("Dessert"));
  return desserts;
};

const recipesWithOver30Reviews = recipes => {
  let recipesOver30 = recipes.filter(recipe => recipe.reviewCount > 30);
  return recipesOver30;
};

const recipesWithCinnamon = recipes => {
  let cinnamonRecipes = recipes.filter(recipe => recipe.ingredients.includes("Cinnamon"));
  return cinnamonRecipes;
};

const lunchAndDinnerFoods = recipes => {
  let lunchAndDinner = recipes.filter(recipe => recipe.mealType.includes("Lunch") && recipe.mealType.includes("Dinner"));
  return lunchAndDinner;
};

const ingredientsForMangoSalsaChicken = recipes => {
  let mangoSalsaIngredients = recipes.filter(recipe => recipe.name.includes("Mango Salsa Chicken")).map(recipe => recipe.ingredients);
  return mangoSalsaIngredients;
};

const averageAmountOfCalsOfAmericanRecipes = recipes => {
    let americanRecipes = recipes.filter(recipe => recipe.cuisine.includes("American"))
    let avgCalories = americanRecipes.reduce((accumulator, current) => accumulator + current.caloriesPerServing, 0) / americanRecipes.length;
  return avgCalories;
};

const averageCookingTimeOfPastaRecipies = recipes => {
    let pastaRecipies = recipes.filter(recipe => recipe.tags.includes("Pasta"))
    let avgCookingTime = pastaRecipies.reduce((accumulator, current) => accumulator + current.cookTimeMinutes, 0) / pastaRecipies.length;
  return avgCookingTime;
};


const lowestReviewedRecipe = recipes => {
    let recipiesReviews = recipes.filter(recipe => recipe.reviewCount);
    let lowestReviewed = recipiesReviews.sort((a, b) => a.reviewCount - b.reviewCount)[0];
  return lowestReviewed;
};