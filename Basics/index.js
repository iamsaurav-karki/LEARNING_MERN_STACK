console.log("hello world");
// document.write("hello world");
var x = 10;
console.log(x);
{
  var x = 20;
  console.log(x);
}
console.log(x);

let y = 10;
console.log(x);
{
  let y = 20;
  console.log(x);
}
console.log(y);

let name = 123.4443434;
let namelower = name.toFixed(2);
console.log(namelower);

let a = 10;
console.log(a++);
let b = 10;
console.log(++b);

let c = null;
console.log(c);

let student = {
  Name: "saurav",
  Marks: 80,
  percentage: 60,
};

let studentPercentage = student.percentage ?? student.percentage;
console.log(studentPercentage);
let studentMarks = student.Marks ?? student.Marks;
console.log(studentMarks);

// spread or rest operatior--- only available in js

let studentD = {
  Name: "saurav",
  Age: 22,
};

let studentDadds = {
  ...studentD,
  address: "bhojpur",
  Age: 22,
};

console.log(studentDadds.Age);

//can also be used in case of array

let allowed = ["jpg", "png", "svg"];
let notallowedVideo = ["mp4", "mov"];

let merged = [...allowed, ...notallowedVideo];

let moreStudentDetails = {
  Name: "saurav",
  Age: 23,
  Address: "Bhaktapur",
  Class: "Bachelors",
};

let { Name: fName, Age, Address, ...other } = moreStudentDetails;

console.log(other.Class);
console.log(moreStudentDetails?.Name);
