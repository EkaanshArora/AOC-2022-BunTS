import text from './problemText'

const arr = text.split('\n\n')
const elfs = arr.map((x) => x.split('\n'))
// @ts-ignore
const totals = elfs.map(elf => elf.reduce((acc, calorie) => acc = parseInt(acc) +  parseInt(calorie)))

const totalInts = totals.map(t=> parseInt(t));
const sortedTotals = totalInts.sort((a, b) => (a-b));
const len = sortedTotals.length
console.log(sortedTotals[len-1] + sortedTotals[len-2] + sortedTotals[len-3])

