const user = {}
function User() {
  //data members
  this.name = '' // this is reference of object in a class
  this.address = ''
  
}
User.prototype.setname = function () {
  this.name = 'saurav karki'
}

User.prototype.setaddress = function () {
  this.address= 'bhojpur'
}


const newUser = new User() // function lei as a class use garim bhane that is called prototype in js


console.log("newUser.setname()" + "newUser.setaddress()" )