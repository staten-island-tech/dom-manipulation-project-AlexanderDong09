const DOMSelectors = {
  cardHeader: document.querySelector(".header"),
  button: document.querySelector(".btn"),
  delete: document.querySelector(".delete-btn"),
  container: document.querySelector(".container"),
  text: document.getElementById("value"),
  image: document.getElementById("img"),
};

function addElement(card, img) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card"><h2 class="header">${card}</h2><img src="${img}"><button class="delete-btn" type="button">delete</button></div>`
  );
}

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

function clearForm() {
  document.querySelector("form").reset();
}

function removeCard() {
  DOMSelectors.container.addEventListener("click", function (event) {
    // check if what's being clicked is the delete button

    if (event.target.classList.contains("container")) {
      DOMSelectors.container.removeChild(event.target);
    }
  });
}

function remove() {
  DOMSelectors.container.addEventListener("click", function (event) {
    //if i click something in the container class
    if (event.target.classList.contains("box")) {
      //and the div class = box
      DOMSelectors.container.removeChild(event.target); //then remove that child from the container div
    }
  });
}

// event listener for form
//get values from form for widget object
// create card and insert it
// find remove buttons and event listeners
