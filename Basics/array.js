let student = [];

let first = {
  name: "John",
  age: 20,
  address: "bhojpur",
  marks: 90,
};
//insert into array
student.push(first); // inserts into last position

let second = {
  fname: "saurav karki",
  age: 22,
  address: "nepalgunj",
  marks: 85,
};

student.unshift(second); // always populate the zero index. inserts into 0 index

// allocated position 0,1
//new size = 2
student[2] = {
  fname: "samyog karki",
  age: 18,
  address: "bhairawa",
  marks: 87,
};

// or can find length and assign it as:
let size = student.length;
student[size] = {
  fname: "sulav karki",
  age: 18,
  address: "hetauda",
  marks: 85,
};
student[10] = {
  fname: "sam karki",
  age: 18,
  address: "bhairawa",
  marks: 87,
};
console.log(student);
console.log("student");

// pop from array

let firstElem = student.shift(); // reades the first element of the array
let lastElem = student.pop(); // return the last element of the array

// use array slice function to retun subset of array
let midValue = student.slice(1, 3); //returns value from index 1 upto 2 value. always set end number+1;
let index1 = student.splice(1, 1);

let allowed = ["jpg", "png", "svg", "jpeg"];
let str = allowed.join(","); // return comma separated string

let filename = "abc.jpg";

let arrr = filename.split("."); // returns ["abc","jpg"]
let arrrrr = arrr.pop();

// above code can be simplified in a single line
let arr = filename.split(".").pop();
console.log(typeof arr);

// to search whether file extension is present in allowed or not
console.log(allowed.includes(arr));

// to convert the string to uppercase or lowercase
// string.toUpperCase() and string.toLowerCase()

// practical
let product = [];
let product1 = {
  id: 1,
  name: "apple",
  price: 100,
  discount: 10,
};
let product2 = {
  id: 2,
  name: "mango",
  price: 200,
  discount: 20,
};
let product3 = {
  id: 3,
  name: "banana",
  price: 300,
  discount: 30,
};

let product4 = {
  id: 4,
  name: "orange",
  price: 400,
  discount: 40,
};

let product5 = {
  id: 5,
  name: "kiwi",
  price: 500,
  discount: 50,
};
product.unshift(product1);
product.unshift(product2);
product.unshift(product3);
product.unshift(product4);
product.unshift(product5);
// or product.push(product1,product2,product3,product4,product5)

//let discountAmount = (product[0].price * product[0].discount) / 100;
//let afterDiscount = product[0].price - discountAmount;
//product[0].Afterdis = afterDiscount;
//product[0].DisAmt = discountAmount;
// or
product[0].Afterdis = (product[0].price * product[0].discount) / 100;
product[0].DisAmt = product[0].price - product[0].Afterdis;

product[1].Afterdis = (product[1].price * product[1].discount) / 100;
product[1].DisAmt = product[1].price - product[1].Afterdis;

product[2].Afterdis = (product[2].price * product[2].discount) / 100;
product[2].DisAmt = product[2].price - product[2].Afterdis;

product[3].Afterdis = (product[3].price * product[3].discount) / 100;
product[3].DisAmt = product[3].price - product[3].Afterdis;

product[4].Afterdis = (product[4].price * product[4].discount) / 100;
product[4].DisAmt = product[4].price - product[4].Afterdis;

console.log(
  "Product ID:" +
    product[0].id +
    "Name:" +
    product[0].name +
    ",Price:" +
    product[0].price +
    ",Discount:" +
    product[0].discount +
    ",After Discount:" +
    product[0].Afterdis +
    ",Discount Amount:" +
    product[0].DisAmt
);

console.log(
  "Product ID:" +
    product[1].id +
    "Name:" +
    product[1].name +
    ",Price:" +
    product[1].price +
    ",Discount:" +
    product[1].discount +
    ",After Discount:" +
    product[1].Afterdis +
    ",Discount Amount:" +
    product[1].DisAmt
);
console.log(
  "Product ID:" +
    product[2].id +
    "Name:" +
    product[2].name +
    ",Price:" +
    product[2].price +
    ",Discount:" +
    product[2].discount +
    ",After Discount:" +
    product[2].Afterdis +
    ",Discount Amount:" +
    product[2].DisAmt +
    ",After Discount:"
);
console.log(
  "Product ID:" +
    product[3].id +
    "Name:" +
    product[3].name +
    ",Price:" +
    product[3].price +
    ",Discount:" +
    product[3].discount +
    ",After Discount:" +
    product[4].Afterdis +
    ",Discount Amount:" +
    product[4].DisAmt
);
console.log(
  "Product ID:" +
    product[4].id +
    "Name:" +
    product[4].name +
    ",Price:" +
    product[4].price +
    ",Discount:" +
    product[4].discount +
    ",After Discount:" +
    product[4].Afterdis +
    ",Discount Amount:" +
    product[4].DisAmt
);
