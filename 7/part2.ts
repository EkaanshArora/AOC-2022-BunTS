import text from "./problemText";

const lineArr = text.split('\n')

type t = {
  parent?: t;
  files: { [name: string]: number };
  dirs: { [name: string]: t };
};

const main: t = { files: {}, dirs: {} };
let current: t = main

for (let line of lineArr) {
  if(line[0] === '$') {
    if (line.includes('cd')) {
      const dir = line.split(' ')[2];
      if (dir === "/") {
        current = main;
      } else if (dir === '..') {
        current = current.parent
      } else {
        if (!current.dirs[dir]) {
          current.dirs[dir] = { parent: current, files: {}, dirs: {} };
        }
        current = current.dirs[dir]
      }
    }
  } else {
    let words = line.split(' ')
    const size = parseInt(words[0])
    if (size > 0) {
      current.files[words[1]] = size
    } else {
      current.dirs[words[1]] = { parent: current, files: {}, dirs: {} };
    }
  }
}

const sizeArr: number[] = []

const compute = (obj: t) => {
  let total = 0
  for(let file in obj.files) {
    total = obj.files[file] + total
  }
  for (let dir in obj.dirs) {
    const size = compute(obj.dirs[dir])
    sizeArr.push(size)
    total += size
  }
  return total
}
let lastResult = compute(main)
// 50216456

const totalSpace = 70000000
const needSpace = 30000000
const totalUsed = lastResult

const sortedArr = sizeArr.sort((a,b)=> a>b ? 1 : -1)
const toFree = needSpace - totalSpace + totalUsed
// console.log(toFree)

console.log(sortedArr.find(e=>e>=toFree))
