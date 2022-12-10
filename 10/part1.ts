import text from "./problemText";

const lines = text.split("\n");
const queue: { instruction: string; value: number; cycle: number }[] = [];

let register = 1;
let cycle = 1;
let total = 0;

while (lines.length > 0 || queue.length > 0) {
  if ((cycle - 20) % 40 === 0) {
    total = total + cycle * register;
  }
  if (queue.length > 0) {
    if (queue[0].cycle === cycle) {
      register = register + queue.shift().value;
    }
  } else {
    let line = lines.shift();
    if (line) {
      let instruction = line.split(" ")[0];
      let value = parseInt(line.split(" ")[1]);

      if (instruction !== "noop") {
        queue.push({ instruction, value, cycle: cycle + 1 });
      }
    }
  }
  cycle++;
}

console.log(total);