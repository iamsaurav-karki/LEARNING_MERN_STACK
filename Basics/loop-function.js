// let arr = [
//   {
//   name: "sulav ",
//   email:"sulav@gmail.com"
// },
//   {
//     name: "saurav",
//     email:"saurav@gmail.com"
//   },
//   {
//     name: "samyog",
//     email:"samyog@gmail.com"
//   }

// ]

// arr.forEach((value, index) => {
//   //this function doesnot returns
// })
// arr.map((value, index) => {
//   console.log(value);
//   console.log(index);
//   return { name:value.name,index };
//   //has return value
  
// })

//task 
let user = [
  {
    name: 'saurav',
    email: 'saurav@gmail.com',
    address: 'kathmandu',
    language:'MERN'
  },
  {
    name: 'sam',
    email: 'sam@gmail.com',
    address: 'Bhaktapur',
    language:'JS'
  },
  {
    name: 'samyog',
    email: 'samyog@gmail.com',
    address: 'lalitpur',
    language:'PHP'
  },
  {
    name: 'sailendra',
    email: 'sailendra@gmail.com',
    address: 'bhaktapur',
    language:'React'
  },
  {
    name: 'laxmi',
    email: 'lamxi@gmail.com',
    address: 'kathmandu',
    language:'JS'
  },
  {
    name: 'samriddha',
    email: 'samriddha@gmail.com',
        email: 'samriddha@gmail.com',
            email: 'samriddha@gmail.com',
    address: 'lalitpur',
    language:'React'
  }
]

// let userktm = [];
// let userbkt = [];
// let userltp = [];
// user.forEach((item) => {
//   if (item.address.toLowerCase === 'kathmandu') {
//     userktm.push(item)
//   }
//   else if (item.address.toLowerCase === 'bhaktapur') {
//     userbkt.push(item)
//   }
//   else if (item.address.toLowerCase === 'lalitpur') {
//     userltp.push(item)
//   }
// })



//using filter loop
let userktm = user.filter((value)=>(value.address.toLowerCase() === 'kathmandu'))
let userbkt = user.filter((value)=>(value.address.toLowerCase() === 'bhaktapur'))
let userltp = user.filter((value)=>(value.address.toLowerCase() === 'lalitpur'))




//task
let groupped = {};
user.forEach((item) => {
  let key = item.address.toLowerCase();
  if (!groupped[key]) {
    groupped[key] = []
}
  
  groupped[key].push(item);


})
console.log(groupped);
