/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */
const grid = document.querySelector(".grid");
grid.addEventListener("mouseover", (event) => {
  //   event.target.style.border = "2px solid red";
  Object.assign(event.target.style, {
    border: "2px solid red",
    backgroundColor: event.target.className === "grid" ? "white" : "blue",
  });
});

document.body.addEventListener("keydown", (event) => {
  console.log(document.body.style.backgroundColor);
  if (event.key === "t") {
    console.log(event.key);
    document.body.style.backgroundColor =
      document.body.style.backgroundColor === "" ? "black" : "";
  }
});
