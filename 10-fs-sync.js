const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

writeFileSync("./content/result-sync.txt", "hello world 4", {
  flag: "a",
});

console.log("done with this task");
console.log("starting the next one");
