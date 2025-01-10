'use strict';

function myFunc(...args) {
  console.log(args);
  args[0] = 10; // Modifying args doesn't affect original parameters
  console.log(args);
}

myFunc(1, 2, 3); 