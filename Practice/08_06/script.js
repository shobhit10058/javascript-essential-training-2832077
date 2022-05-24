/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

class Person {
  constructor(fieldKeyDictionary) {
    for (let key in fieldKeyDictionary) {
      this[key] = fieldKeyDictionary[key];
    }
  }
}

const createInputElement = (placeholder) => {
  const field = document.createElement("input");
  field.placeholder = placeholder;
  field.type = "text";
  return field;
};

const addField = () => {
  console.log("add field called");
  const divElem = document.createElement("div");
  divElem.className = "fields";
  divElem.innerHTML = `
    <input type="text" placeholder="Field"/>
    <input type="text" placeholder="Value"/>
  `;
  document
    .querySelector("form .actionBox")
    .insertAdjacentElement("beforebegin", divElem);
};

const addPerson = (person) => {
  const divElems = document.querySelectorAll(".fields");
  const newPerson = new Person({});
  divElems.forEach((divElem) => {
    const inputs = divElem.querySelectorAll("input");
    newPerson[inputs[0].value] = inputs[1].value;
  });
  const divElem = document.createElement("div");
  divElem.classList.add("peopleContainer");
  for (let key in newPerson) {
    const pElem = document.createElement("p");
    pElem.style.textAlign = "center";
    pElem.innerHTML = `
        <b>${key}</b>: ${newPerson[key]}
    `;
    divElem.append(pElem);
  }
  document.body.append(divElem);
};

document.querySelector("#addField").addEventListener("click", addField);
document.querySelector("#submit").addEventListener("click", addPerson);
