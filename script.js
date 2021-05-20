#!/usr/bin/env node

console.log("Initial new Loyalory project.");

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`
  App category:
    1. Fashion
    2. FnB
    3. Retail
    0. Exit
  Select: `, function(category) {
  switch (category) {
    case '1':
      console.log('Selected: Fashion');
      rl.close();
      break;
    case '2':
      console.log('Selected: FnB');
      rl.close();
      break;
    case '3':
      console.log('Selected: Retail');
      rl.close();
      break;
    case '0':
      rl.close();
      break;
    default:
      rl.close();
      break;
  }
});
