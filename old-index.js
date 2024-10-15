const DOMSelectors = {
  cardHeader: document.querySelector(".header"),
  button: document.querySelector(".btn"),
  delete: document.querySelector(".delete-btn"),
  container: document.querySelector(".container"),
  text: document.getElementById("value"),
  image: document.getElementById("img"),
};

function createCard() {
  DOMSelectors.button.addEventListener("click", function (event) {
    event.preventDefault();

    const inputValue = DOMSelectors.text.value.trim(); // remove whitespace
    const imageLink = DOMSelectors.image.value;

    if (inputValue === "" || imageLink === "") {
      alert("Both fields are required!");
      clearForm();
      return; // if both fields are emtpy,stop execution
    }

    addElement(inputValue, imageLink);
    clearForm();

    removeCard();
  });
}

function addElement(card, img) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card"><h2 class="header">${card}</h2><img src="${img}"><button class="delete-btn" type="button">delete</button></div>`
  );
}

function clearForm() {
  document.querySelector("form").reset();
}

function removeCard() {
  DOMSelectors.container.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
      // check if what's being clicked is the delete button
      const card = event.target.closest(".card"); // find the closest parent card of the delete button that was clicked
      card.remove();
    }
  });
}

run();
// event listener for form
//get values from form for widget object
// create card and insert it
// find remove buttons and event listeners
