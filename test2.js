function getDivisors(input) {
  let divisors = new Array();
  // check divisor given number
  for (let x = 1; x < input; x++) {
    if (input % x == 0) divisors.push(x);
  }
  return divisors;
}

function getNumbers(input) {
  let numbers = new Array(),
    sum = 0;

  for (let x = 1; x <= input; x++) {
    sum = getDivisors(x).reduce((a, b) => a + b, 0);
    //check given number greater then sum
    if (sum > x) numbers.push(x);
    //console.log("Number: "+x+" sum:"+sum);
  }
  return numbers;
}

const remainingNumbers = getNumbers(1000);
console.log(remainingNumbers);
