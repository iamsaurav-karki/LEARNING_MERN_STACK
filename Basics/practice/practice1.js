// let user = {
//   name: "saurav",
//   address: "bhojpur",
//   age: 22,
//   phone: 9824386075,
//   greet: () => {
    
//   },

//   setdetails: function () {
//     console.log(this.name);
    
//   },

//   add() {
    
//   }

// }

// user.setdetails();

// var name = "saurav karki";
// var age = 22;
// var address = "bhojpur";

// function setDetails(getname, getage, getaddress) {
//   return ('Name is ' + getname + 'Age is' + getage + 'Address is' + getaddress
//   );
// }
// console.log(setDetails(name, age, address));


//destructuring
//normal way
// const printname = (persondata) => {
//   console.log(persondata.name)
// }

//using destructuring
// const printname = ({name}) => {
//   console.log(name)
// }


// printname(user)


// const { name, age } = user;  // destructuring
// console.log(name);


//array destructuring

const Username = ["saurav", "ramesh"];
const [username, username1] = Username;
console.log(username, username1)