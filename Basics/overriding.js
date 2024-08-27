class User{
  constructor(_name) {
    this.name = _name;
    console.log("I am inside user class")
    console.log(this.name);
  }
  getUser(){
  console.log("This is getuser of user class ")
  }
}

class Student extends User{
  constructor(name) {   // constructor overriding
    super(name); //this always calls parent class constructor.. this is always mandatory if we creating constructor in childclass and parentclass
    //parent constructor lei child constructor le override garda jaile super() lekhnu parxa
    //child ko through bata parent ma data pathauna through super() pathauna sakinxa.
    console.log("I am inside student class")
<<<<<<< HEAD
    // this.getUser();
  }

  getUser() {   // function overriding
    super.getUser(); // this calls getuser function of parent class.
=======
    this.getUser();
  }

  getUser() {   // function overriding
>>>>>>> 965f94c85d2a1fa923497637986ba3a82db5ea4a
     console.log("I am getuser of student class")
   }

}

const S1 = new Student("saurav");