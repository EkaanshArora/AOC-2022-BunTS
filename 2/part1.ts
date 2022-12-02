import text from "./problemText";

type a = 'A' | 'B' | 'C'
type b = 'X' | 'Y' | 'Z'

let totalScore = 0
const rounds = text.split('\n');
const outcomeScore = { w: 6, d: 3, l: 0 };
const pickScore = { X: 1, Y: 2, Z: 3 };

const checkWin = (pickOneChar: a, pickTwoChar: b) => {
  let roundScore = 0
  const pickOne = (pickOneChar.charCodeAt(0))
  const pickTwo = (pickTwoChar.charCodeAt(0) - 23)
  if((pickOne - pickTwo) === 0) {
    roundScore = outcomeScore.d
  } else if ((pickOne - pickTwo) ===  -1 || (pickOne - pickTwo) === 2) {
    roundScore = outcomeScore.w
  } 
  return roundScore + pickScore[pickTwoChar]
}

rounds.forEach(round => {
  totalScore += checkWin(round[0] as a, round[2] as b)
})

console.log(totalScore)