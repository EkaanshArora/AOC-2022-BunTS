import text from "./problemText";

const arr: number[][] = text
  .split("\n")
  .map((line) => line.split("").map((num) => parseInt(num)));

const isVisible = (arr: number[][], x: number, y: number) => {
  const num = arr[x][y];
  
  const topElements: number[] = arr.slice(0, x).map((line) => line[y]);
  let topScore = 0;
  topElements.reverse().every((e) => (e < num ? ++topScore : false));
  topScore < topElements.length ? topScore++ : topScore;
  topScore === 0 ? (topScore = 1) : topScore;
  
  const bottomElements: number[] = arr.slice(x + 1, arr.length).map((line) => line[y]);
  let bottomScore = 0;
  bottomElements.every((e) => (e < num ? ++bottomScore : false));
  bottomScore < bottomElements.length ? bottomScore++ : bottomScore;
  bottomScore === 0 ? (bottomScore = 1) : bottomScore;
  
  const leftElements: number[] = arr[x].slice(0, y);
  let leftScore = 0;
  leftElements.reverse().every((e) => (e < num ? ++leftScore : false));
  leftScore < leftElements.length ? leftScore++ : leftScore;
  leftScore === 0 ? (leftScore = 1) : leftScore;

  const rightElements: number[] = arr[x].slice(y + 1, arr[x].length);
  let rightScore = 0;
  rightElements.every((e) => (e < num ? ++rightScore : false));
  rightScore < rightElements.length ? rightScore++ : rightScore;
  rightScore === 0 ? (rightScore = 1) : rightScore;

  return topScore * bottomScore * leftScore * rightScore;
};

const scores = arr.map((row, x) => row.map((num, y) => isVisible(arr, x, y)));
const maxScore = Math.max(...scores.map((row) => Math.max(...row)));
console.log(maxScore);
