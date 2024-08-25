class User{
  name;
  email;
  address;
  login() {
    
  }
}

class Student extends User{
  role = "student"
  phone;
}


const std = new Student()
std.name = "saurav karki";

class Admin extends User{
   role = "admin"
  phone;
  isActive;
}

const adminObj = new Admin()
adminObj.name = "Admin user"