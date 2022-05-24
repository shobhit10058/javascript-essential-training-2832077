/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */

const navBar = document.createElement("nav");
const navContent = `
    <ul class="navbar">
        <li><a href="#">Home</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Know-More</a></li>
    </ul>
`;

navBar.innerHTML = navContent;
document.querySelector("header").insertAdjacentElement("beforeend", navBar);
