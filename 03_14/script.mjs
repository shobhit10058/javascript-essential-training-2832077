/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Book from "./Books.mjs";
import Backpack from "./Backpack.mjs";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

const book1 = new Book({
  name: "She was like a rose",
  availability: {
    amazon: {
      price: "Rs 200",
      Languages: ["English", "Hindi"],
    },
    flipkart: {
      price: "Rs 180",
      Languages: ["English"],
    },
  },
  author: "Marie Joseph",
  Publisher: "JosephPublishers",
  "Publishing Date": "2015",
});

console.log(book1);
