// using for off
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let even = [];
let odd = [];
for (var i of arr) {
  if (i % 2 === 0) {
    even.push(i);
  } else {
    odd.push(i);
  }
}
console.log("for off", even);
console.log("for off", odd);

// using for in
for (var i in arr) {
  if (arr[i] % 2 === 0) {
    even.push(arr[i]);
  } else {
    odd.push(arr[i]);
  }
}
console.log("for in", even);
console.log("for in", odd);

// //  reverse array by loop
let rev = [];
for (var i = arr.length - 1; i >= 0; i--) {
  rev.push(arr[i]);
}
console.log(rev);

//  reverse array by predifined method
console.log("predifined", rev);
// it was not working
// console.log(arr.reverse())
// arr2=arr.toReversed();
// console.log(arr2)

// palindrome

let str = "naik";
let rev2 = "";
function isPalindrome(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    rev2 += str[i];
  }
  if (str === rev2) {
    return `palindrome`;
  } else {
    return `not palindrome`;
  }
}
console.log(isPalindrome(str));
