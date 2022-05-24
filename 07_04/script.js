/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

let tableItems = [
  "laptop",
  "notebook",
  "macbook",
  "oppo",
  "spectacles",
  "glass",
  "mouse",
];
console.log("table items are", tableItems);

const removedItem = tableItems.pop();
console.log("table items are", tableItems);

tableItems.unshift(removedItem);
console.log("table items are", tableItems);

tableItems.sort();
console.log("table items are", tableItems);

const found = tableItems.indexOf("notebook");
console.log(found);

tableItems.splice(found, 1);

console.log("table items are", tableItems);
