// closure -- A function which is defined inside another function.
//var fxn2;
let fxn1 = () => {
  let a = { name: "saurav" };
  console.log("I am inside function1")
   let fxn2 = (response) => {
    //body
    console.log("I am inside function2")
  }
  fxn2(a);
  //return a
  // outside fxn1 fxn2 ko scope lina paryo ,call garna paryo bhane return fxn2 garne
  return {fxn2,a}
}



let response = fxn1();
response.fxn2();
//  for accessing outiside of the function .
//calling fxn 2
//response.fxn2()
//let { fxn2, data } = fxn1();
// fxn2();
// fxn2(response);


//callback


//recursive
//async - await fxn
