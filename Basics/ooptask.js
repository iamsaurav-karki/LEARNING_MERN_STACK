class Product{
  #name;
  #price;
  #brand;
  #category;
  #afterDiscount;

  constructor(_name, _price, _brand, _category) {
    this.#name = _name;
    this.#price = _price;
    this.#brand = _brand;
    this.#category = _category;
    this.#aftergetDiscount();
    
  }

  #aftergetDiscount() {
    this.#afterDiscount = this.#price * 0.8;
  }

  getafterDiscount() {
    
    console.log(this.#price);
    console.log(this.#brand);
    console.log(this.#name);
    console.log(this.#category);
    console.log(this.#afterDiscount);



  }
}

let pro1 = new Product("apple watch", 23000, "apple", "gadgets");
pro1.getafterDiscount();
