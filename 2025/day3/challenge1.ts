import { readFile } from "../../utils/readFile";

const input = readFile('input');
const convertedInput = input.split("\n");
const testInput = ['987654321111111', '811111111111119', '234234234234278', '818181911112111']

function sumOfJoltage(input: string[]) {
  let sumOfBatteries = 0;

  for(const bank of input) {
    let largestNumber = 0;
    let secondToLargestNumber = 0;

    for (let i = 0; i < bank.length; i++) {
      const batteryNumber =  Number(bank[i]);

      if (batteryNumber > largestNumber) {
        if (i === bank.length - 1) {
          secondToLargestNumber = batteryNumber;
        } else {
          largestNumber = batteryNumber
          secondToLargestNumber = 0;
        }
      } else if (batteryNumber > secondToLargestNumber) {
        secondToLargestNumber = batteryNumber;
      }
    }

    sumOfBatteries += Number(`${largestNumber}` + `${secondToLargestNumber}`);
  }

  return sumOfBatteries;
}

console.log(sumOfJoltage(convertedInput));