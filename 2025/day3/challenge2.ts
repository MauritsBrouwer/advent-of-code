import { readFile } from "../../utils/readFile";

const input = readFile('input');
const convertedInput = input.split("\n");
const testInput = ['987654321111111','811111111111119','234234234234278','818181911112111'];

function sumOfJoltage(input: string[]): number {
  let sumOfBatteries = 0;

  for (const bank of input) {
    let joltageArray = [];

    for (let i = 0; i < bank.length; i++) {
      const batteryNumber = Number(bank[i]);
      const amountOfBatteriesLeftInBank = bank.length - i;
      const nextTargetedJoltageIndex = Math.min(11, 12 - (Math.min(amountOfBatteriesLeftInBank, 12)));

      // If there is no number yet on this index, add it to the array.
      if (joltageArray[nextTargetedJoltageIndex] === undefined) {
        joltageArray.push(batteryNumber)
      } else {
        // Loop over array to check if current number is higher then index number.
        for (let j = 0; j < joltageArray.length; j++) {
          // Only allow input overwrite if the target index is smaller or equal to the loop index.
          if (nextTargetedJoltageIndex <= j && batteryNumber > joltageArray[j]) {
            joltageArray[j] = batteryNumber;
            joltageArray.splice(j + 1); // Batteries need to stay in order so remove rest numbers.
            break;
          } else if (j === (joltageArray.length -1) && joltageArray.length < 12) {
            // If array is not full yet, add it to the array so it can be checked in the next iteration.
            joltageArray.push(batteryNumber);
            break;
          }
        }
      }
    }
    sumOfBatteries += Number(joltageArray.join(''));
  }

  return sumOfBatteries;
}

console.log(sumOfJoltage(convertedInput)); // 172516781546707
// console.log(sumOfTurnedOnBatteries(testInput));

