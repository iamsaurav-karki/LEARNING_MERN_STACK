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
    this.getUser();
  }

  getUser() {   // function overriding
     console.log("I am getuser of student class")
   }

}

const S1 = new Student("saurav");