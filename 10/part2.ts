import text from "./problemText";

const lines = text.split("\n");
const queue: { instruction: string; value: number; cycle: number }[] = [];

// Array.fill(new Array) references the same array, who knew
let CRT: string[][] = [[], [], [], [], [], []];
let register = 1;
let cycle = 1;

while (lines.length > 0 || queue.length > 0) {
  CRT[Math.floor((cycle - 1) / 40)].push(
    Math.abs(register - ((cycle - 1) % 40)) > 1 ? "." : "#"
  );

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

CRT.map((a) => console.log(a.join("")));
