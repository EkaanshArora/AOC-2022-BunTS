import text from "./problemText";

const sacks = text.split("\n");
let total: number = 0;

const sackCompartments = sacks.map((sack) => [
  sack.slice(0, Math.floor(sack.length / 2)),
  sack.slice(Math.floor(sack.length / 2)),
]);

const getRepeat = (arr: string[]) => {
  const set = new Set();
  const compOne = Array.from(arr[0]);
  const compTwo = Array.from(arr[1]);
  compOne.forEach((item) => set.add(item));
  const repeat = compTwo.filter((e) => set.has(e));
  return repeat;
};

for (let currentSack in sackCompartments) {
  const repeat = getRepeat(sackCompartments[currentSack]);
  console.log(repeat[0]);
  const ascii = repeat[0].charCodeAt(0);
  total += ascii - (ascii > 90 ? 96 : 38);
}

console.log(total);
