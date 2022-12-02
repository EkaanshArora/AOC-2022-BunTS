import text from "./problemText";

type a = "A" | "B" | "C";
type b = "X" | "Y" | "Z";

let totalScore = 0;
const rounds = text.split("\n");
const pickScore: { [pick in a]: number } = { A: 1, B: 2, C: 3 };
const outcomeScore: { [pick in b]: number } = { X: 0, Y: 3, Z: 6 };

const checkWin = (pickOne: number, pickTwo: number) => {
  if (pickOne - pickTwo === -1 || pickOne - pickTwo === 2) {
    return true;
  } else {
    return false;
  }
};

const computeScore = (pickOneChar: a, winOrLose: b) => {
  let scoreForPick = 0;
  let whatToPlay: string;
  let didWin: boolean;
  const pickOne = pickOneChar.charCodeAt(0) - 65;
  if (winOrLose === "Y") {
    scoreForPick = pickScore[pickOneChar];
  } else {
    didWin = checkWin(pickOne, (pickOne + 1) % 3);
    whatToPlay =
      didWin && winOrLose === "Z"
        ? String.fromCharCode(65 + ((pickOne + 1) % 3))
        : String.fromCharCode(65 + ((pickOne + 2) % 3));
    scoreForPick = pickScore[whatToPlay];
  }
  return scoreForPick + outcomeScore[winOrLose];
};

rounds.forEach((round) => {
  totalScore += computeScore(round[0] as a, round[2] as b);
});

console.log(totalScore);
