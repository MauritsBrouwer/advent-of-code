import { readFile } from "../utils/readFile";

const input = readFile('input2');
const dialStart = 50;

// Answer 1.
function countAmountOfZeroClicks(input: string[]) {
  let dialPosition = dialStart;
  let zeroCounter = 0;

  for (const step of input) {
    const direction = step.charAt(0);
    const rotations = Number(step.slice(1));
    const moduloOfRotations = rotations % 100;

    if (direction === 'L') {
      const didCrossZero = dialPosition !== 0 && dialPosition - rotations < 1;
      const overflow = rotations - dialPosition;
      const numOfExtraZeroClicks = overflow > 0 ? Math.floor(overflow / 100) : 0;
      zeroCounter += +didCrossZero + numOfExtraZeroClicks;

      // Update dial
      dialPosition = dialPosition - moduloOfRotations;

      if (dialPosition < 0) {
        dialPosition = 100 + dialPosition
      }
    }

    if (direction === 'R') {
      const didCrossZero = dialPosition + rotations > 99;
      const overflow = rotations - (100 - dialPosition);
      const numOfExtraZeroClicks = overflow > 0 ? Math.floor(overflow / 100) : 0;
      zeroCounter += +didCrossZero + numOfExtraZeroClicks;

      // Update dial
      dialPosition = dialPosition + moduloOfRotations;

      if (dialPosition > 99) {
        dialPosition = dialPosition - 100;
      }
    }
  }


  return zeroCounter;
}

// Answer 2.
// Use the actual numbers to programmatically dial the dial.
// Use recursion because it's cool.
function bruteForceDial(input: string[]): number {
  let dialPosition = dialStart;

  function rotateAndCount(step: string, index = 0) {
    const rotation= step.charAt(0);
    const steps = Number(step.slice(1));
    let amountOfTimesItReachedZero = 0;

    for(let i = 0; i < steps; i++) {
      if (rotation === 'L') {
        dialPosition--;
        amountOfTimesItReachedZero += +(dialPosition === 0);
        dialPosition = dialPosition === -1 ? 99 : dialPosition;
      }
      if (rotation === 'R') {
        dialPosition = dialPosition + 1 === 100 ? 0 : dialPosition + 1;
        amountOfTimesItReachedZero += +(dialPosition === 0);
      }
    }

    if (input.length - 1 === index) {
      return amountOfTimesItReachedZero;
    }

    return amountOfTimesItReachedZero + rotateAndCount(input[index + 1], index + 1)
  }

  return rotateAndCount(input[0]);
}


console.log(bruteForceDial(input))
console.log(countAmountOfZeroClicks(input));