import text from "./problemText";

const arr = text.split("");
const set = []

for (let i = 0; i < arr.length; i++) {
  if(set.length === 14){
    console.log(i, set.join(''))
    break;
  } else if (set.find(e=> e===arr[i])){
    const idx = set.findIndex(e=> e===arr[i])
    set.splice(0, idx + 1)
  }
  set.push(arr[i])
}
