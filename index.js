const DOMSelectors = {
  header: document.querySelector("h1"),
  description: document.querySelector(".card-desc"),
  items: document.querySelectorAll("li"),
  container: document.querySelector("container"),
};

// define
function addElement() {
  // find element with queryselector
  let form = document.querySelector("form");
  // listen for click event
  form.addEventListener("submit", function (event) {
    // prevent default behavior
    event.preventDefault();
    // logging click event
    console.log(event.target);
    // get info from the form
  });
}

//call
addElement();

DOMSelectors.container.insertAdjacentHTML(
  "beforeend",
  `<div class="card"><h2 class="header">${"hi"}</h2></div>`
);

// event listener for form
//get values from form for widget object
// create card and insert it
// find remove buttons and event listeners
