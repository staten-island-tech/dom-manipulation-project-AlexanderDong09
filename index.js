const DOMSelectors = {
  cardHeader: document.querySelector(".header"),
  button: document.querySelector(".btn"),
  container: document.querySelector(".container"),
  text: document.getElementById("value"),
  image: document.getElementById("img"),
};

function createCard() {
  // does multiple things, calls all the functions below

  // starts with

  // then inserts the object
  DOMSelectors.button.addEventListener("click", function () {
    insertObject();
  });

  // adds a remove button to each card
}

function insertObject(card, img) {
  // inserts the card using insertAdjacentElement, two variables being card and img
  DOMSelectors.container.insertAdjacentElement(
    "beforeend",
    `<div class="card"><h2 class="header">${card}</h2><img src="${img}</div>`
  );
}

function input() {
  // this gets input from the forms, makes sure they're not empty

  // might be able to just be put into createCard(), but we'll see

  const inputValue = DOMSelectors.text.value.trim();
  const imageLink = DOMSelectors.image.value;

  if (inputValue === "" || imageLink === "") {
    alert("Both fields are required!");
    return; // if both fields are emtpy,stop execution
  }
}

function clearForm() {
  // simple function, clears the form
  document.querySelector("form").reset();
}

function removeObject() {
  // figure out how tf to do this lmao
}
