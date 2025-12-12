import { readFile } from "../../utils/readFile";

const input = readFile('input');
const convertedInput = input.split(",");
const testInput = ['11-22','95-115','998-1012','1188511880-1188511890','222220-222224',
  '1698522-1698528','446443-446449','38593856-38593862','565653-565659',
  '824824821-824824827','2121212118-2121212124']  //4174379265

function sumOfInvalidIds(input: string[]) {
  let sum = 0;

  for(const range of input) {
    const startRange = Number(range.split('-')[0]);
    const endRange = Number(range.split('-')[1]);

    for (let id = startRange; id <= endRange; id++ ) {
      const productId = id.toString();
      let pattern = '';
      let isMarkedAsInvalid = false;

      for (let j = 0; j < productId.length; j++) {
        pattern = pattern + productId[j];

        if (productId !== pattern && !isMarkedAsInvalid) {
          let regex = new RegExp(`${pattern}`, 'g');
          const filterNumberBasedOnPattern = productId.replace(regex, '');

          if (filterNumberBasedOnPattern.trim().length === 0) {
            sum += Number(productId);
            isMarkedAsInvalid = true;
          }
        }
      }
    }
  }

  return sum;
}

console.log(sumOfInvalidIds(convertedInput));
