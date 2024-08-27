// const p1 = new Promise((res, rej) => {
  
// })

const url = "https://dog.ceo/api/breed/hound/images/random";

const getUrl = async () => {
  const data = await fetch(url);
  const jsonval = await data.json();
  console.log(jsonval);
}
getUrl();