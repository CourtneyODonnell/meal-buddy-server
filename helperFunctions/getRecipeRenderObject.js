const mondayBreakfast = require("../docs/SampleAPICallData/mondayFirstMeal");
const mondayLunch = require("../docs/SampleAPICallData/mondaySecondMeal");
const mondayDinner = require("../docs/SampleAPICallData/mondayThirdMeal");
const tuesdayBreakfast = require("../docs/SampleAPICallData/tuesdayFirstMeal");
const tuesdayLunch = require("../docs/SampleAPICallData/tuesdaySecondMeal");


const getRecipeRenderObject = function(mealAPIObjectResponse) {
  const meal = mealAPIObjectResponse
  // console.log(meal.id);
  // console.log(meal.title);
  // console.log(meal.readyInMinutes);
  // console.log(meal.servings);
  // console.log(meal.image);
  // console.log(meal.summary);
  // for (let x = 0; x < meal.analyzedInstructions[0].steps.length; x++) {
  //   console.log(meal.analyzedInstructions[0].steps[x].number);
  //   console.log(meal.analyzedInstructions[0].steps[x].step);
  // }
  const recipeRenderObject = {};
  recipeRenderObject.id = meal.id
  recipeRenderObject.mealName = meal.title;
  recipeRenderObject.cookTimeInMinutes = meal.readyInMinutes;
  recipeRenderObject.servings = meal.servings;
  recipeRenderObject.imageURL = meal.image;
  recipeRenderObject.summaryDescription = meal.summary;
  recipeRenderObject.steps = {};
  for (let x = 0; x < meal.analyzedInstructions[0].steps.length; x++) {
    recipeRenderObject.steps[x+1] = meal.analyzedInstructions[0].steps[x].step;
  }
  console.log(`object: ${JSON.stringify(recipeRenderObject)}`);
}

getRecipeRenderObject(tuesdayLunch);

module.exports = getRecipeRenderObject;