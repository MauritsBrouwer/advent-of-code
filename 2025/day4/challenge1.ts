import { readFile } from "../../utils/readFile";
import { countRollsInAdjacentTiles } from "./countRollsInAdjacentTiles";

const input = readFile('input');
const convertedInput = input.split("\n");
const testInput = ['..@@.@@@@.', '@@@.@.@.@@', '@@@@@.@.@@', '@.@@@@..@.', '@@.@@@@.@@', '.@@@@@@@.@', '.@.@.@.@@@', '@.@@@.@@@@', '.@@@@@@@@.', '@.@.@@@.@.']

function countRollsOfPaper(input: string[]) {
  let sumOfRolls = 0;

  for(let i = 0; i < input.length; i++) {
    for(let j = 0; j < input[i].length; j++) {
      if (input[i][j] === '@' && countRollsInAdjacentTiles(input, i, j) < 4) {
        sumOfRolls++
      }
    }
  }

  return sumOfRolls;
}

console.log(countRollsOfPaper(convertedInput));