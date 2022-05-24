/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */

const articles = window.document.querySelectorAll("article");
console.log(articles);

articles.forEach((article) => {
  console.log(article.querySelectorAll("li"));
  article.querySelectorAll("li").forEach((item) => {
    console.log(item.innerHTML);
    const field = item.innerHTML.split(":")[0].trimStart();
    if (field == "Left strap length" || field == "Right strap length") return;
    const value = item.querySelector("span").innerHTML;
    console.log(field);
    const formElem = `
                    <form data-children-count="1">
                        <input
                        type="text"
                        name=${field}
                        placeholder="new ${field}"
                        value="${value}"
                        />
                        <button>Update</button>
                    </form>
                `;
    const fieldDiv = document.createElement("div");
    fieldDiv.innerHTML = formElem;
    item.appendChild(fieldDiv);
  });
});
