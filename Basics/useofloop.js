let product = [
  {
    name: "product1",
    price: 2000,
    discount: 100,
    description: "product1 description",
  },
  {
    name: "product2",
    price: 3000,
    discount: 200,
    description: "product2 description",
  },
  {
    name: "product1",
    price: 4000,
    discount: 300,
    description: "product3 description",
  },
];
for (let i = 0; i < product.length; i++) {
  let prod = product[i];
  if (prod) {
    prod.discountAmt = (prod.price * prod.discount) / 100;
    prod.afterDiscount = prod.price - prod.discountAmt;
  }
}
console.log(product);

for (let index in product) {
  let prod = product[index];
  prod.discountAmt = (prod.price * prod.discount) / 100;
  prod.afterDiscount = prod.price - prod.discountAmt;
}
console.log(product);

// in gives index , of gives object

for (let prod of product) {
  if (prod) {
    prod.discountAmt = (prod.price * prod.discount) / 100;
    prod.afterDiscount = prod.price - prod.discountAmt;
  }
}
console.log(product);

