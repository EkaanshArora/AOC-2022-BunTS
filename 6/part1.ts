import text from "./problemText";

const arr = text.split("");
const set = new Set()

// this is probably a fluke *_*

for (let i = 0; i < arr.length - 3; i++) {
  if(!set.has(arr[i]) && set.size === 4){
    console.log(i)
    break;
  } else if (set.has(arr[i])){
    set.clear()
  }
  set.add(arr[i]) 
}
