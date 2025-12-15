import { readFile } from "../../utils/readFile";
import { countRollsInAdjacentTiles } from "./countRollsInAdjacentTiles";

const input = readFile('input');
const convertedInput = input.split("\n");
const testInput = ['..@@.@@@@.', '@@@.@.@.@@', '@@@@@.@.@@', '@.@@@@..@.', '@@.@@@@.@@', '.@@@@@@@.@', '.@.@.@.@@@', '@.@@@.@@@@', '.@@@@@@@@.', '@.@.@@@.@.']

// Lets do recursion again. Stop if it cant find any paper rolls anymore.
function countRollsOfPaperAndRepeat(input: string[]) {
  let sumOfRolls = 0;
  let copyOfGrid = input;

  for(let i = 0; i < input.length; i++) {
    const currentRowArray = input[i].split('');

    for(let j = 0; j < input[i].length; j++) {
      if (input[i][j] === '@' && countRollsInAdjacentTiles(input, i, j) < 4) {
        currentRowArray[j] = 'x'; // mark paper roll as removed
        sumOfRolls++
      }
    }

    copyOfGrid[i] = currentRowArray.join('');
  }

  if (sumOfRolls === 0) {
    return sumOfRolls;
  }

  return sumOfRolls + countRollsOfPaperAndRepeat(copyOfGrid);
}


console.log(countRollsOfPaperAndRepeat(convertedInput));