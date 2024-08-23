// const connection = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I am connection")
//     let conn = true;
//     if (conn) {
//       resolve("I am resolve of connection")
//     }
//     else {
//       reject("I am reject of connection")
//     }

//   })
// }

// const DB = () => {
//   return new Promise((resolve, reject) => {

//     console.log("I am database")
//     let dbb = true;
//     if (dbb) {
//       resolve("I am resolve of db")
//     }
//     else {
//       reject("I am reject of db")
//     }
//   }
//   )
// }

// const queryExecute = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I am execute query")
//     let success = true;
//     if (success) {
//       resolve("I am resolve of query execute")
//     }
//     else {
//       reject("I am reject of query execute")
//     }
//   }
//   )
// }

// connection().then((resolve) => {
//   console.log(resolve)
// })
//   .catch((reject) => {
//   console.log(reject)
//   })
// DB().then((resolve) => {
//   console.log(resolve)
// })
//   .catch((reject) => {
//   console.log(reject)
//   })
// queryExecute().then((resolve) => {
//   console.log(resolve)
// })
//   .catch((reject) => {
//   console.log(reject)
//   })
// Making it asynchronous
//nesting of promises

// connection().then((resolve) => {
//   console.log(resolve)
//   DB().then((res1) => {
//     console.log(res1)
//     queryExecute().then((res2) => {
//       console.log(res2)
//     })
//       .catch((rej2) => {
//       console.log(rej2)
//     })
    
//   })
//     .catch((rej3) => {
//     console.log(rej3)
//   })
// })
//   .catch((reject) => {
//     console.log(reject)
//   })

//chaning of promise.. we generally used chaining instead of nesting
// connection()
//   .then((res) => {
//   console.log(res)
//   return DB()
//   })
//   .then((res1) => {
//     console.log(res1)
//     return queryExecute()
//   })
//   .then((res2) => {
//     console.log(res2)
//   })
//   .catch((rej) => {
//     console.log(rej)
//   })


// let loading = true;
// Login()
//   .then((res) => {
//     ///
//     //loading = false;
//   })
//   .catch((rej) => {
//     ///
//     //loading = false;
   
//   })
//   .finally(() => {
//     ///doesnot takes argument
//     // always gets executed.
//     loading = false;
//   }
// )

let prom1 = Promise.resolve("I am promise 1")
let prom2 = Promise.resolve("I am promise 2")
let prom3 = Promise.reject("I am reject 3")
let prom4 = Promise.resolve("I am promise 4")

Promise.all([prom1, prom2, prom3, prom4]) // we must only use promise.all if all the promise is correct i.e resolve , if one or more case is rejected then promise.all() function must not be used
  .then((res)  => {
    console.log(res);
})
  .catch((rej) => {
    console.log(rej);
  })
Promise.allSettled([prom1, prom2, prom3, prom4]) 
  .then((res)  => {
    console.log(res);
})
  .catch((rej) => {
    console.log(rej);
})