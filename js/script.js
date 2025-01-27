"use strict";
function main() {
  console.log("Hello, world!");
  if (localStorage.getItem("firsttime") === "true") {
    firstTimeVisitorProcess();
  } else {
    localStorage.setItem("firsttime", "true");
  }
}

function firstTimeVisitorProcess() {}

main();
