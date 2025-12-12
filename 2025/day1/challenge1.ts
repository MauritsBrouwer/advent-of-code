import { readFile } from "../../utils/readFile";

const content = readFile('input');
const input = content.trim().split("\n")

const dialStart = 50;

function rotateDialAndCountZero(input: string[]): number {
  let dial = dialStart;
  let zeroCount = 0;

  for (const step of input) {
    const rotation= step.charAt(0);
    const steps = step.slice(1);

    dial = updateDial(dial, Number(steps), rotation);

    if (dial === 0) {
      zeroCount++
    }
  }

  return zeroCount;
}

function updateDial(currentValue: number, steps: number, rotation: string): number {
  let dial = currentValue;


  const moduloOfSteps = steps % 100;

  if (rotation === 'L') {
    dial -= moduloOfSteps;

    if (dial < 0) {
      dial = 100 + dial;
    }
  }

  if (rotation === 'R') {
    dial += moduloOfSteps;

    if (dial > 99) {
      dial = dial - 100;
    }
  }


  return dial;
}

// Fix to not care about minus numbers
function alternativeCrazyHackerMan(input: string[]): number {
  let count = 1000 + dialStart; // Dial buffer + starting position
  let zeroCounter = 0;

  for (const step of input) {
    const rotation= step.charAt(0);
    const steps = Number(step.slice(1));

    count = rotation === 'L' ? count - steps : count + steps;

    if (count % 100 === 0) {
      zeroCounter++;
    }
  }

  return zeroCounter;
}

// Recursion because why not.
function alternativeCrazyHackerMan2(input: string[]): number {
  let count = 1000 + dialStart;

  function rotateAndCount(step: string, index = 0) {
    let returnValue = 0;
    const rotation= step.charAt(0);
    const steps = Number(step.slice(1));
    count = rotation === 'L' ? count - steps : count + steps;

    if (count % 100 === 0) {
      returnValue = 1;
    }

    if (input.length - 1 === index) {
      return returnValue;
    }

    return returnValue + rotateAndCount(input[index + 1], index + 1)
  }

  return rotateAndCount(input[0]);
}

// Crack the code:
console.log(rotateDialAndCountZero(input))
console.log(alternativeCrazyHackerMan(input))
console.log(alternativeCrazyHackerMan2(input))