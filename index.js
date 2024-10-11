const DOMSelectors = {
  header: document.querySelector("h1"),
  items: document.querySelectorAll("li"),
  cardHeader: document.querySelector(".card-header"),
  button: document.querySelector(".btn"),
  container: document.querySelector(".container"),
  text: document.getElementById("value"),
  image: document.getElementById("img"),
};

function addElement(card) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card"><h2 class="header">${card}</h2></div>`
  );
}

DOMSelectors.button.addEventListener("click", function (insert) {
  insert.preventDefault();

  const inputValue = DOMSelectors.text.value.trim(); // remove whitespace

  // make sure they didnt input nothing
  if (inputValue) {
    addElement(inputValue);
    DOMSelectors.text.value = "";
  } else {
    alert("please enter some text into the form.");
  }
});

// event listener for form
//get values from form for widget object
// create card and insert it
// find remove buttons and event listeners
