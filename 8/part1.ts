import text from "./problemText";

const arr: number[][] = text.split("\n").map((line) => line.split("").map((num) => parseInt(num)));

let counter = 0;
const isVisible = (arr: number[][], x: number, y: number) => {
  const num = arr[x][y];
  const topElements: number[] = arr.slice(0, x).map((line) => line[y]);
  const bottomElements: number[] = arr.slice(x + 1, arr.length).map((line) => line[y]);
  const leftElements: number[] = arr[x].slice(0, y);
  const rightElements: number[] = arr[x].slice(y + 1, arr[x].length);
  if (
    leftElements.every((el) => el < num) ||
    rightElements.every((el) => el < num) ||
    topElements.every((el) => el < num) ||
    bottomElements.every((el) => el < num)
  ) {
    counter++;
    return true;
  }
  return false;
};

arr.forEach((row, x) => row.map((num, y) => isVisible(arr, x, y)));
console.log(counter);
