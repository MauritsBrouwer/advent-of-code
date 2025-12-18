import { readFile } from "../../utils/readFile";

const input = readFile('input');
const testInput = readFile('testInput');
const convertedInput = input.split("\n");
const convertedTestInput = testInput.split("\n");

function countBeamSplit(input: string[]) {
  const inputCopy = [...input];
  const tachyonIndex = inputCopy[0].split('').findIndex(character => character === 'S');
  let timesItSplit = 0;

  // Start with first beam
  inputCopy[1] = inputCopy[1].substring(0, tachyonIndex) + '|' + inputCopy[1].substring(tachyonIndex + 1);

  for (let rowIndex = 2; rowIndex < inputCopy.length; rowIndex++) {
    for (let lineIndex = 0; lineIndex < inputCopy[rowIndex].length; lineIndex++) {
      // Check if row above there is a beam.
      if (inputCopy[rowIndex - 1][lineIndex] === '|') {
        // if so, check if there is a split or not and update inputCopy.
        if (inputCopy[rowIndex][lineIndex] === '^') {
          inputCopy[rowIndex] = inputCopy[rowIndex].substring(0, lineIndex - 1) + '|^|' + inputCopy[rowIndex].substring(lineIndex + 2);
          timesItSplit++;
        } else {
          inputCopy[rowIndex] = inputCopy[rowIndex].substring(0, lineIndex) + '|' + inputCopy[rowIndex].substring(lineIndex + 1);
        }
      }
    }
  }

  return timesItSplit;
}

console.log(countBeamSplit(convertedTestInput));
console.log(countBeamSplit(convertedInput));