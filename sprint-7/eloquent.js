1. // Your code here.
function min(a, b) {
 if (a > b) {
   return b;
 }
  else if (a < b ) {
    return a;
  }
  else {
    return a;
  }
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

2.// Your code here.
function isEven(x) {
  if  (x > 10) {
    return isEven(x - 10);
    }
  else if (x === 1||2||3||4||5||6||7||8||9) {
    return true;
  }


console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

3.
function countBs(string) {
  string.split(" ");
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === "B") {
      count ++;
  }
    return count;
}
}
