// Decision making statement
//Iterative statement

// decision making
/*
if 
else-if
switch


// for if
if is executed for variable non empty, empty or non empty object, empty array
else executed for flase, null, '', "",empty variables , undefined
*/

let day = "sunday";
if (day === "sunday" || day === "saturday") {
  console.log("Weekend");
} else {
  if (day === "friday") {
    console.log("almost weekend");
  } else {
    console.log("weekdays");
  }
}

// task

let marksObt = 400;
let percentage = (marksObt / 500) * 100;
console.log(percentage);

if (percentage >= 80) {
  console.log("Distinction");
} else {
  if (percentage >= 60) {
    console.log("First Division");
  } else {
    if (percentage >= 45) {
      console.log("Second Division");
    } else {
      if (percentage >= 32) {
        console.log("third division");
      } else {
        console.log("sorry you are failed");
      }
    }
  }
}

//task 2
let totalUnitsConsumed = 100;
let totalAmount = 0;

if (totalUnitsConsumed <= 20) {
  totalAmount = 80;
} else if (totalUnitsConsumed <= 30) {
  totalAmount = 80 + (totalUnitsConsumed - 20) * 5;
} else if (totalUnitsConsumed <= 50) {
  totalAmount = 80 + 10 * 5 + (totalUnitsConsumed - 30) * 7;
} else if (totalUnitsConsumed <= 80) {
  totalAmount = 80 + 10 * 5 + 20 * 7 + (totalUnitsConsumed - 50) * 10;
} else {
  totalAmount = 80 + 10 * 5 + 20 * 7 + 30 * 10 + (totalUnitsConsumed - 80) * 15;
}

console.log("Total Electricity Bill:", totalAmount, "NRP");

// task 3
let grossSalary = 5000000;
let taxAmount = 0;
if (grossSalary <= 500000) {
  taxAmount = grossSalary * 0.01;
} else if (grossSalary <= 700000) {
  taxAmount = 5000 + (grossSalary - 500000) * 0.15;
} else if (grossSalary <= 1000000) {
  taxAmount = 5000 + 200000 * 0.15 + (grossSalary - 1000000) * 0.2;
} else if (grossSalary <= 2000000) {
  taxAmount =
    5000 + 200000 * 0.15 + 3000000 * 0.3 + (grossSalary - 2000000) * 0.3;
} else if (grossSalary <= 5000000) {
  taxAmount =
    5000 +
    200000 * 0.15 +
    3000000 * 0.2 +
    1000000 * 0.3 +
    (grossSalary - 2000000) * 0.36;
} else {
  taxAmount =
    5000 +
    200000 * 0.15 +
    3000000 * 0.2 +
    1000000 * 0.3 +
    3000000 * 0.36 +
    (grossSalary - 5000000) * 0.39;
}
let netsalary = grossSalary - taxAmount;
console.log("Net salary:", netsalary);
console.log("Annual Tax paid:", taxAmount);
console.log("monthly Tax paid:", (taxAmount / 12).toFixed(2));
console.log("Monthly salary:", netsalary / 12);
