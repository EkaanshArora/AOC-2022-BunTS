import text from "./problemText";

const textpieces = text.split('\n\n')
const topText = textpieces[0].split('\n')
const bottomText = textpieces[1].split('\n')
const stackCollection: {[index: number]: string[]} = {}

topText.forEach((linestr, i) => {
  const line = linestr.split("");
  if (line[1] !== '1') {
    for (let index = 0; index < line.length - 2; index += 4) {
      if (line[index + 1] !== " ") {
        if (!stackCollection[(index / 4 + 1)]) {
          stackCollection[(index / 4 + 1)] = [];
        }
        stackCollection[(index / 4 + 1)].push(line[index + 1]);
      }
    }
  }
});

bottomText.forEach(instruction => {
  const line = instruction.split('')
  const items = parseInt(line[5] + line[6])
  let isDoubleDigit = true
  if(line[6] === ' ') isDoubleDigit = false
  const from = parseInt(line[isDoubleDigit ? 13 : 12 ])
  const to = parseInt(line[isDoubleDigit ? 18 : 17])

  for(let i = 0; i < items; i++){
    stackCollection[to].unshift(stackCollection[from].shift())
  }
})

const answer = (Object.values(stackCollection).map(e=>e[0])).join('')
console.log(answer)