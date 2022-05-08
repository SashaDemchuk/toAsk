// import Book from "./Book.js";
import Book from "./modules/Book.js";

const firstOrganicBook = new Book(
  "Advanced Organic Chemistry",
  1060,
  "Chemistry",
  true,
  300,
  "Amazon"
);
console.log(firstOrganicBook);
firstOrganicBook.newPrice();
console.log(firstOrganicBook.price);
firstOrganicBook.gifting("Me");
console.log(firstOrganicBook.owner);
firstOrganicBook.newChecking(false);
console.log(firstOrganicBook.isItNew);
