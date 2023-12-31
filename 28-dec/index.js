// //assignment 1
var a = "";
for (i = 1; i <= 5; i++) {
    for (j = 1; j <= 4 - i + 1; j++) {
        a += j;
    }
    a += "\n";
}
console.log(a)




// // assignment 2

var a = "";
for (i = 1; i <= 4; i++) {
    a = a + i;
    console.log(a)
}

// // assignment 3

var c = { name: "veeresh naik", age: 20, salary: 20000, dob: "18-jan-2003" }
console.log(c)
Object.assign(c, { dateofbirth: c.dob })["dob"];
delete c["dob"];
console.log(c)


// // assignment 4
for (i = 1; i <= 100; i++) {
    for (j = 2; j < i; j++) {
        if (i % j === 0)
            break

    }
    if (i === j) {
        console.log(i)
    }


}

// // assignment 4

var n1 = 0, n2 = 1, num;
for (i = 0; i <= 10; i++) {
    console.log(n1)
    num = n1 + n2
    n1 = n2
    n2 = num
}
