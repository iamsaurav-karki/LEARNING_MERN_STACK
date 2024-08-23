var function1 = (callu) => {
  setTimeout(() => {
     console.log("I am inside function1")
  callu();
  },1000)
 
}

var function2 = () => {
   setTimeout(() => {
     console.log("I am inside function2")

  },2000)
}
//after setting timeout we can also call it as:
function1(() => {
  
});
function2();
// function1(function2);
// //another way to call function
// function1(() => {
//   //body
// })


//built in function
setTimeout(() => {
  console.log("I am after 3 sec"),3000
})

//built in time related function in js

// setTimeout(cb,interval) cb:call back
// setInterval(cb,interval)
//clearInterval()
const addPadding = (numb) => {
  if (numb < 10) {
    numb = "0" + numb;
  }
    return numb;
  
  
}

const getClock = () => {
  const date = new Date()
  const hours = addPadding(date.getHours())
  const minutes = addPadding(date.getMinutes())
  const seconds = addPadding(date.getSeconds())
  document.getElementById('clock').innerHTML = `${hours}:${minutes}:${seconds}`
  //console.log(`${hours}:${minutes}:${seconds}`);
}
setInterval(getClock,1000)