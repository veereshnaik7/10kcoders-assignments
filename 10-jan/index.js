console.log("class for employee......");
class Employee {
  constructor(name, age, desigination, salary, experinence) {
    this.name = name;
    this.age = age;
    this.desigination = desigination;
    this.salary = salary;
    this.experinence = experinence;
    console.log(this);
  }
  hike() {
    if (this.experinence >= 2) {
      this.salary = this.salary + this.salary * 0.2;
    } else {
      this.salary = this.salary + this.salary * 0.1;
    }
  }
}
const emp1 = new Employee("veeresh", 21, "web dovelper", 300000, 2);
const emp2 = new Employee("nandini", 19, "house wife", 15000, 1);
const emp3 = new Employee("nandeesh", 12, "student", 2000, 0);
const emp4 = new Employee("veena", 5, "student", 10000, 0);

/// class for person
console.log("class for person......");
class Person {
  constructor(name, age, gendre, color, height, weight) {
    this.name = name;
    this.age = age;
    this.gendre = gendre;
    this.color = color;
    this.height = height;
    this.weight = weight;
    console.log(this);
  }
}
const person1 = new Person("veeresh", 21, "male", "white", 48, 5.8);
const person2 = new Person("nandu", 19, "female", "white", 40, 4.8);
const person3 = new Person("nandeesh", 6, "male", "white", 20, 3);
const person4 = new Person("veena", 3, "female", "white", 12, 2.5);

/// class for car
console.log("class for car......");
class Car {
  constructor(brand, model, noofseats, color, mailouge, price, type) {
    this.brand = brand;
    this.model = model;
    this.noofseats = noofseats;
    this.color = color;
    this.mailouge = mailouge;
    this.price = price;

    console.log(this);
  }
}
const car1 = new Car("TATA", "tata NANO", "4seater", "green", "30kmph", "5L");
const car2 = new Car(
  "KIA",
  "seltons",
  "7seater",
  "whitesmoke",
  "35kmph",
  "17L"
);
const car3 = new Car(
  "HUNDAYI",
  "hunday SUV",
  "4seater",
  "black",
  "30kmph",
  "20L"
);
const car4 = new Car(
  "MAHINDRA",
  "Mahindra THAR",
  "4seater",
  "red",
  "25kmph",
  "15L"
);

/// class for remote
console.log("class for remote......");
class Remote {
  constructor(brand, color, noofbuttons, price) {
    this.brand = brand;
    this.color = color;
    this.noofbuttons = noofbuttons;
    this.price = price;
    console.log(this);
  }
}
const remote1 = new Remote("tata play", "white", "60", "250rs");
const remote2 = new Remote("airtel", "black", "50", "200rs");

/// class for laptop
console.log("class for laptop ......");
class Laptop {
  constructor(brand, processor, gen, RAM, ROM, price) {
    this.brand = brand;
    this.processor = processor;
    this.gen = gen;
    this.RAM = RAM;
    this.ROM = ROM;
    this.price = price;
    console.log(this);
  }
}
const laptop1 = new Laptop("dell", "i7", "8thgen", "8gb,512gb", 50000);
const laptop2 = new Laptop("hp", "i5", "8thgen", "8gb,512gb", 40000);
const laptop3 = new Laptop("macbook", "ios", "macbpookpro", "16gb,1tb", 150000);
