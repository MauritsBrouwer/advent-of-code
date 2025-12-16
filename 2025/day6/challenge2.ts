import { readFile } from "../../utils/readFile";

const input = readFile('input');
const testInput = readFile('testInput');
const convertedInput = input.split("\n");
const convertedTestInput = testInput.split("\n");

// This challenge WAS TOUGH.. >:(, took me hours. Code is spaghetti but it works. 10/10
function sumOfNumbers(input: string[]) {
  const trimmedValues = input.map(string => string.replace(/\s+/g, " ").trim().split(' '));
  let sumOfAllCalculations = 0;

  // Calculate start indexes of each column.
  const indexesOfStartColumns = [0];
  const longestRow: number = Math.max.apply(0, input.map(row => row.length));
  [...Array(longestRow - 1)].forEach((_, numberIndex) => {
    let countOfDetectedSpaces = 0;
    [...Array(input.length - 1)].forEach((_, rowIndex) => {
      if (input[rowIndex][numberIndex] === ' ') {
        countOfDetectedSpaces++;
      }
    });

    if (countOfDetectedSpaces === input.length - 1) {
      indexesOfStartColumns.push(numberIndex + 1);
    }
  });

  // Loop over the amount of columns (starting positions === amount of column 'chunks')
  [...Array(indexesOfStartColumns.length)].forEach((_, index) => {
    // Get all the rowNumbers in column
    const allRowNumbers = [...Array(trimmedValues.length)].map((_, rowIndex) => {
      return trimmedValues[rowIndex][index];
    });

    // Get the longest number of row numbers
    const longestNumber: number = Math.max.apply(0, allRowNumbers.slice(0, allRowNumbers.length - 1));
    // Check the length (string) of the longest number
    const lengthOfLongestNumber = `${longestNumber}`.length;
    const calculationType = trimmedValues[input.length - 1][index];
    let resultOfColumnCalculation = 0;

    // We need to loop 'n' amount of times based on the start index and the max length of the number in that specific column.
    for (let columnIndex = indexesOfStartColumns[index]; columnIndex < indexesOfStartColumns[index] + lengthOfLongestNumber; columnIndex++) {
      let number = '';

      // While looping over the amount of columns, we need to loop over the rows so we 'create' the numbers to do math with.
      for (let rowIndex = 0; rowIndex < input.length - 1; rowIndex++) {
        if (input[rowIndex] && input[rowIndex][columnIndex]) {
          number += input[rowIndex][columnIndex];
        }
      }

      // When we know the number, we can add it to the calculation.
      if (resultOfColumnCalculation === 0) {
        resultOfColumnCalculation = Number(number);
      } else if (calculationType === '*') {
        resultOfColumnCalculation *= Number(number);
      } else {
        resultOfColumnCalculation += Number(number);
      }
    }

    sumOfAllCalculations += resultOfColumnCalculation;
  });

  return sumOfAllCalculations;
}

console.log(sumOfNumbers(convertedInput));
// console.log(sumOfNumbers(convertedTestInput));