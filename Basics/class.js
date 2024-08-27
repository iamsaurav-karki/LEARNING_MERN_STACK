class User{
  name;
  email;
  phone;
  address;
  role;
  // we can declare private data members as :
  //#name;
  //#email;
  //user static keyword for constant declaration

  constructor(_name, _email){
  this.data = {}                 // this creates public variable data
}

  setName(_name) {
    this.name = _name;   // this points to self . means instance of the object
  }
}


let userObj = new User()
userObj.setName("John Doe");   // here this points to userObj , // this is public so can be called anywhere
// if this is used inside class then it gives the scope of class
//if used outside calss then it gives the scope of the file
userObj.address="bhojpur"
console.log(userObj) 
