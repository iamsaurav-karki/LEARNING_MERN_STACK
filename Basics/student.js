class Student {
  name;
  marks;

  percentage;
  division;


  constructor(_name, _marks) {
    this.name = _name;
    this.marks = _marks;
    this.#getPercentage();
    this.#getDivision();
  }         
  
  #getPercentage() { // this method is private when # is used. to call private method we can call it through constuction or create a function inside a class and call it. we cannot call it from outside the class
    this.percentage = this.marks / 1000 * 100;
  }
    
  #getDivision = () => {
    if (this.percentage >= 80) {
      this.division = "Distinction"
    }
    else if (this.percentage >= 60) {
      this.division = "First Division"

    }
    else if (this.percentage >= 45) {
      this.division = "Second Division"
    }
    else {
      this.divison = "failed"
    }
  }

<<<<<<< HEAD
  // getDivisionValue = () => {  // private method can be called as:
  //   this.#getDivision();
  // }
=======
  getDivisionValue = () => {
    this.#getDivision();
  }
>>>>>>> 965f94c85d2a1fa923497637986ba3a82db5ea4a
}

const studentObj = new Student("saurav", 700);
console.log(studentObj);

// studentObj.getPercentage();  // we can directly call the function inside construction also
// studentObj.getDivision();
console.log(studentObj);


