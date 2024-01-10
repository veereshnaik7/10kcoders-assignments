/// leap years in between 2000 && 2040
{
  let start = 2000;
  let end = 2040;
  function sequenceOfLeapyears(start, end) {
    for (var i = start; i <= end; i++) {
      if (i % 4 == 0 && i % 4 == 0) {
        console.log(i);
      }
    }
  }
  sequenceOfLeapyears(start, end);
}

{
  // sorting array;
  let array = [45, 1, 2, 3, 47, 67, 300, 0, 6];
  console.log(array[0]);

  // assending order
  let array2 = array.sort(function (a, b) {
    return a - b;
  });
  console.log("assending order", array2);

  //dessending order
  let array3 = array.sort(function (a, b) {
    return b - a;
  });
  console.log("dessending order", array3);
  console.log(array3[0], "is 1st largest number");
  console.log(array3[2], "is 3rd largest number");
}

// swapping of two numbers

// with  third variable
let a = 20;
let b = 10;
let c = a;
a = b;
b = c;
console.log(a, b);

// with out third variable
let x = 20;
let y = 10;
x = x + y;
y = x - y;
x = x - y;
console.log(x, y);

// distruction function and rest function
// for array

let array = [23, "naik", "nandini", 78];
let [e, r, ...rest] = array;
console.log(rest);

//default parameter
let add = (a, b = 100) => console.log(a + b);
add(50, 60);
