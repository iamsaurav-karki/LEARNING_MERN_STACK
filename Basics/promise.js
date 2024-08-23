// promise always fulfills or get rejected.
//promise is always aysnchronous call
const myPromise = new Promise((resolve, reject) => { // here resolve and reject is callback
  //logic
  console.log("I am inside promise")
  reject("I am reject")
  // resolve("I am resolve")
  // resolve({});
}
)
myPromise.then((res) => {
  //success/fulfill
  //console.log(res);
}).catch((err) => {
  console.log(err);
  //reject/error/exception
 })

console.log("I am outside promise")
 
// or we can put it inside the fuction as
// const MyPromisefxn = () => {
//   return new Promise((resolve, reject) => { // here resolve and reject is callback
//   //logic
//   console.log("I am inside promise")
//   resolve("I am resolve")
//   resolve({});
// }
//   )
// }
// MyPromisefxn().then((res) => {
//   //success/fulfill
//   console.log(res);
//  }).catch((err) => {
//   //reject/error/exception
//  })
