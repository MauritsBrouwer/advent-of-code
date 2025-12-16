import { readFile } from "../../utils/readFile";

const input = readFile('input');
const convertedInput = input.split("\n");

function countFreshIngredients(input: string[]) {
  const cutOffIndex = input.findIndex(el => el === '')
  const freshIngredientRanges = input.slice(0, cutOffIndex);
  const ingredients = input.slice(cutOffIndex + 1);
  let freshIngredientCount = 0;

  for (const ingredient of ingredients) {
    const ingredientNumber = Number(ingredient);
    for (const freshIngredientRange of freshIngredientRanges) {
      const range = freshIngredientRange.split('-');
      const startRange = Number(range[0]);
      const endRange = Number(range[1]);

      // Check if fresh.
      if (ingredientNumber >= startRange && ingredientNumber <= endRange) {
        freshIngredientCount++;
        break;
      }
    }
  }

  return freshIngredientCount;
}

console.log(countFreshIngredients(convertedInput));