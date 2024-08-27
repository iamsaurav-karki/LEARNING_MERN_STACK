// async function name() {
//   return "saurav";  
// }
// function created with async always returns promise.

//async and await combo is used to handle promises
// const promdata = name();

// promdata.then((res) => {
//   console.log(res);
// })

// async wait

const p = new Promise((res,rej) => {
  res("I am promise");
  rej("I am reject of promise");

})

const getPromise = async () => {
  var val = await p;
  console.log(val);
  
}

getPromise()