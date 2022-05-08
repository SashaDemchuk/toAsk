const Book = class {
  constructor(name, pageNum, genre, isItNew, price, owner) {
    this.name = name;
    this.pageNum = pageNum;
    this.genre = genre;
    this.isItNew = isItNew;
    this.price = price;
    this.owner = owner;
  }
  gifting(newOwner) {
    this.owner = newOwner;
  }
  newChecking(newStatus) {
    this.isItNew = newStatus;
  }
  newPrice() {
    this.price = this.price * 2;
  }
};
export default Book;
