// let i = 1;
// do {
//   console.log(i);
//   i++;
//   break;
// } while (i <= 5);
//patterns

// for (let a = 1; a <= 5; a++) {
//   let toPrint = "";
//   for (let b = 1; b <= a; b++) {
//     toPrint += "*  ";
//   }
//   console.log(toPrint);
// }

// for (let c = 5; c > 0; c--) {
//   let toPrint1 = "";
//   for (let d = 0; d < c; d++) {
//     toPrint1 += "*  ";
//   }
//   console.log(toPrint1);
// }

// box pattern
for (let e = 1; e <= 5; e++) {
  let printbox = "";
  for (let f = 1; f <= 5; f++) {
    if (e === 1 || e === 5) {
      printbox += "*   ";
    } else {
      if (f === 1 || f === 5) {
        printbox += "*   ";
      }
      else {
        printbox += "    ";
      }
    }
  }
  
  console.log(printbox);
}
