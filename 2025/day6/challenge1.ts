import { readFile } from "../../utils/readFile";

const input = readFile('input');
const testInput = readFile('testInput');
const convertedInput = input.split("\n");
const convertedTestInput = testInput.split("\n");

function sumOfNumbers(input: string[]) {
  const trimmedValues = input.map(string => string.replace(/\s+/g, " ").trim().split(' '));
  const lengthOfCalculations = trimmedValues[0].length;
  let sumOfVerticalNumbers = 0;

  for (let columnIndex = 0; columnIndex < lengthOfCalculations; columnIndex++) {
    let columnResult = 0;
    
    [...Array(trimmedValues.length - 1)].forEach((_, rowIndex) => {
      if (columnResult === 0) {
        columnResult = Number(trimmedValues[rowIndex][columnIndex]);
      } else if (trimmedValues[trimmedValues.length - 1][columnIndex] === '*') {
        columnResult *= Number(trimmedValues[rowIndex][columnIndex]);
      } else {
        columnResult += Number(trimmedValues[rowIndex][columnIndex]);
      }
    });

    sumOfVerticalNumbers += columnResult;
  }

  return sumOfVerticalNumbers;
}

console.log(sumOfNumbers(convertedInput));
// console.log(sumOfNumbers(convertedTestInput));