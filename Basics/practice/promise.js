const newProm = new Promise((res, rej)=> {
  res("i am resolve")
  rej("I am reject")
}
)
newProm.then(() => {
  console.log("resolved")
})
  .catch(() => {
  console.log("rejected")
  })


const fxnProm = () => {
  return new Promise((resolve,reject) => {
    resolve("I am resolve of promise as a function")
    reject("I am reject of promise as a function")
    
    })
}
  
fxnProm().then((res) => {
  console.log(res)
}
)
  .catch((err) => {
  console.log(err)
})