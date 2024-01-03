//  task-1 pattern
var a = "******";
var b = "";
for (i = 0; i <= a.length - 1; i++) {
  b = b + a[i];
  console.log(b);
}
console.log("\n", "\n", "\n");

//  task-2 pattern
var a = "******";
var b = "";
for (i = 0; i <= a.length - 1; i++) {
  for (j = 0; j <= a.length - 1 - i; j++) {
    b += a[j];
  }
  b += "\n";
}
console.log(b);



str="veeeresh    "
console.log(String.toUPPERCASE(str))
