import { readFile } from "../../utils/readFile";

const input = readFile('input');
const convertedInput = input.split(",")

function sumOfInvalidIds(input: string[]) {
  let sum = 0;

  for(const range of input) {
    const startRange = Number(range.split('-')[0]);
    const endRange = Number(range.split('-')[1]);

    for (let id = startRange; id <= endRange; id++ ) {
      const halfLength = id.toString().length / 2;
      const firstPart = id.toString().slice(0, halfLength);
      const lastPart = id.toString().slice(halfLength);

      if (firstPart === lastPart) {
        sum += id;
      }
    }
  }

  return sum;
}

console.log(sumOfInvalidIds(convertedInput));