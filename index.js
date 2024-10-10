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
  addElement(DOMSelectors.text.value);
});

// DOMSelectors.button.addEventListener("click", function (insert) {
//   insert.preventDefault();

//   const inputValue = DOMSelectors.text.value.trim(); // Get and trim the input value

//   // Check if the input value is not empty
//   if (inputValue) {
//     addElement(inputValue);
//     DOMSelectors.text.value = ''; // Clear the input field after adding the card
//   } else {
//     alert("Please enter some text!"); // Optional: alert the user
//   }
// });

// event listener for form
//get values from form for widget object
// create card and insert it
// find remove buttons and event listeners
