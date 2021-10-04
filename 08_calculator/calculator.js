const add = function(a,b) {
  return a + b
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(list) {
	let s = 0
  for (let i=0; i<list.length; i++) {
    s += list[i]
  }
  return s
};

const multiply = function(list) {
	let s = 1
  for (let i=0; i<list.length; i++) {
    s *= list[i]
  }
  return s
};

const power = function(a,b) {
	return a ** b
};

const factorial = function(n) {
	let s = 1
  for (let i=1; i<=n; i++) {
    s *= i
  }
  return s
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
