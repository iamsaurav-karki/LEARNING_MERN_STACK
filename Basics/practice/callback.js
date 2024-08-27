// //hello(goodbye);
// hello(goodbye)
// leave()
// //goodbye();

// function hello(callback) {
//   console.log("Hello")
//   callback();
// }

// function leave() {
//   console.log("leave")
// }

// function goodbye() {
//   console.log("goodbye")
// }
  
// sum(display,2,3)
// function sum(callback, x, y) {
//   result = x + y;
//   callback(result)
// }

// function display(result) {
//   console.log(result)
// }



var add = (callback, x, y) => {
  let result = x + y
  callback(result)
}

var display = (result) => {
  console.log(result)
}
add(display, 3, 3);