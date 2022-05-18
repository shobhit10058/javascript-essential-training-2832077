/**
 * class for creating a new book
 */

class Book {
  constructor(fieldKeyDictionary) {
    this.availability = [];
    for (let key in fieldKeyDictionary) {
      this[key] = fieldKeyDictionary[key];
    }
  }
  addAvailability(availableObject) {
    this.availability.push(availableObject);
  }
  updateFields(field, value) {
    this[field] = value;
  }
}

export default Book;
