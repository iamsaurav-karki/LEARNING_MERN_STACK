//ways of declaring function:
/*
1. function add(){
}
2. const add = function(a,b){
}
3. arrow fuction :
const add = (a,b) => {
}
  4. object function

  let user = {
  setname: function(){
  }
  
  }
  //calling : usr.sername();


*/
  // arrow function example:
const Fxn = () => {
  let a;
  let b;
  return { a, b };
  //or return [a,b]
}
let { a, b } = Fxn();

// example 2

const Fxn1 = ({ a, b, c = 0 })=>{
  return a + b + c;
}

let result = Fxn1({ a: 20, b: 20 })

const printName = (name)=>{
  let x = 20;
  console.log("Saurav")
}
printName("saurav");
