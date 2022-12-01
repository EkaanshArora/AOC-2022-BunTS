import text from './problemText'

const arr = text.split('\n\n')
const elfs = arr.map((x) => x.split('\n'))
// @ts-ignore
const totals = elfs.map(elf => elf.reduce((acc, calorie) => acc = parseInt(acc) +  parseInt(calorie)))

let high = 0
totals.forEach((total) => {
  if(parseInt(total) > high) high = parseInt(total)
})

console.log(high)