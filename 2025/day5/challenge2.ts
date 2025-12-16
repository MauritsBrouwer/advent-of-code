import { readFile } from "../../utils/readFile";

const input = readFile('input');
const convertedInput = input.split("\n");
const testInput = ['3-5', '10-14', '16-20', '12-18', '', '5'];

function countFreshIngredients(input: string[]) {
  const cutOffIndex = input.findIndex(el => el === '');
  const freshIngredientRanges = input.slice(0,
    cutOffIndex);
  let amountOfFreshIngredients = 0;

  const updatedRangesList = [];
  const reorderedList = freshIngredientRanges.sort((a: string, b: string) => Number(a.split('-')[0]) < Number(b.split('-')[0]) ? -1 : 1);

  for (const range of reorderedList) {
    if (!updatedRangesList.length) {
      updatedRangesList.push(range);

    } else {
      const ingredientRange = range.split('-');
      const startRange = Number(ingredientRange[0]);
      const endRange = Number(ingredientRange[1]);
      const lastItemInList = updatedRangesList[updatedRangesList.length - 1].split('-');
      const lastItemStartRange = Number(lastItemInList[0]);
      const lastItemEndRange = Number(lastItemInList[1]);

      if (lastItemEndRange < startRange) {
        updatedRangesList.push(range);
      } else {
        const highestEndRange = endRange > lastItemEndRange ? endRange : lastItemEndRange;
        updatedRangesList[updatedRangesList.length - 1] = `${lastItemStartRange}-${highestEndRange}`;
      }
    }
  }

  for (const range of updatedRangesList) {
    const ingredientRange = range.split('-');
    const startRange = Number(ingredientRange[0]);
    const endRange = Number(ingredientRange[1]);

    amountOfFreshIngredients += (endRange - startRange) + 1;
  }

  return amountOfFreshIngredients;
}

console.log(countFreshIngredients(convertedInput)); // 344813017450467
// console.log(countFreshIngredients(testInput));