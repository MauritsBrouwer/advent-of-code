export function countRollsInAdjacentTiles(input: string[], i: number, j: number) {
  const topLeft = input[i-1] !== undefined ? +(input[i-1][j-1] === '@') : 0;
  const topMid = input[i-1] !== undefined ? +(input[i-1][j] === '@') : 0;
  const topRight = input[i-1] !== undefined ? +(input[i-1][j+1] === '@') : 0;
  const left = +(input[i][j-1] === '@');
  const right =  +(input[i][j+1] === '@');
  const bottomLeft = input[i+1] !== undefined ? +(input[i+1][j-1] === '@') : 0;
  const bottomDown = input[i+1] !== undefined ? +(input[i+1][j] === '@') : 0;
  const bottomRight = input[i+1] !== undefined ? +(input[i+1][j+1] === '@') : 0;

  return topLeft + topMid + topRight + left + right + bottomLeft + bottomDown + bottomRight;
}