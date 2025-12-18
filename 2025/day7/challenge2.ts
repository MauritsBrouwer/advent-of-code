import { readFile } from "../../utils/readFile";

const input = readFile('input');
const testInput = readFile('testInput');
const convertedInput = input.split("\n");
const convertedTestInput = testInput.split("\n");

function countBeamSplit(input: string[]) {
  return input;
}

// console.log(countBeamSplit(convertedTestInput));
console.log(countBeamSplit(convertedInput));