import text from "./problemText";

const arr = text.split("\n");
const elfGroups = [];
let total: number = 0;
arr.forEach((_e, i) => {
  if (i % 3 === 0) {
    elfGroups.push([arr[i], arr[i + 1], arr[i + 2]]);
  }
});

const getRepeat = (arr: string[]) => {
  const setOne = new Set();
  const setTwo = new Set();
  const elfOne = Array.from(arr[0]);
  const elfTwo = Array.from(arr[1]);
  const elfThree = Array.from(arr[2]);
  elfOne.forEach((item) => setOne.add(item));
  elfTwo.forEach((item) => setTwo.add(item));
  const repeat = elfThree.filter((e) => setOne.has(e) && setTwo.has(e));
  return repeat;
};

for (let current in elfGroups) {
  const elfGroup = elfGroups[current];
  const repeat = getRepeat(elfGroup);
  const ascii = repeat[0].charCodeAt(0);
  total += ascii - (ascii > 90 ? 96 : 38);
}

console.log(total);
