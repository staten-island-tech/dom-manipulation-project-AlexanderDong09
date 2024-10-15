const DOMSelectors = {
  cardHeader: document.querySelector(".header"),
  button: document.querySelector(".btn"),
  container: document.querySelector(".container"),
  text: document.getElementById("value"),
  image: document.getElementById("img"),
};

function createCard(event) {
  // does multiple things, calls all the functions below
  event.preventDefault(); // make sures default behavior is prevented

  // starts with getting input from user
  input();

  // then inserts the object, clearing the form afterwards
  DOMSelectors.button.addEventListener("click", function () {
    insertObject();
  });

  clearForm();
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

function insertObject(card, img) {
  // inserts the card using insertAdjacentElement, two variables being card and img
  DOMSelectors.container.insertAdjacentElement(
    "beforeend",
    `<div class="card"><h2 class="header">${card}</h2><img src="${img}</div>`
  );
}

function clearForm() {
  // simple function, clears the form
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
