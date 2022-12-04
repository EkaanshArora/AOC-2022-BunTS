import text from "./problemText";

const elfPairs = text.split('\n')
let total = 0

elfPairs.forEach(pair => {
  const segment = pair.split(',')
  const r = segment[0].split('-')
  const rangeOne = r.map(e=> parseInt((e)))
  const r2 = segment[1].split('-')
  const rangeTwo = r2.map(e=> parseInt((e)))
  if(rangeOne[0] <= rangeTwo[0] && rangeTwo[0] <= rangeOne[1]) {
    total += 1
    return true
  }
  if(rangeTwo[0] <= rangeOne[0] && rangeOne[0] <= rangeTwo[1]) {
    total += 1
    return true
  }
  return false
})

console.log(total)