const DOMSelectors = {
  cardHeader: document.querySelector(".header"),
  button: document.querySelector(".btn"),
  container: document.querySelector(".container"),
  text: document.getElementById("value"),
  image: document.getElementById("img"),
  bg: document.getElementById("background"),
  opacity: document.getElementById("opacity"),
};

function createCard() {
  // does multiple things, calls all the functions below
  DOMSelectors.button.addEventListener("click", function (event) {
    event.preventDefault();

    const inputValue = DOMSelectors.text.value;
    const imageLink = DOMSelectors.image.value;
    const bgColor = DOMSelectors.bg.value;
    const colorOpacity = DOMSelectors.opacity.value;

    if (
      inputValue === "" ||
      imageLink === "" ||
      bgColor === "" ||
      colorOpacity === ""
    ) {
      alert("Both fields are required!");
      clearForm();
      return; // if both fields are emtpy,stop execution
    }

    insertObject(inputValue, imageLink, bgColor, colorOpacity);
    clearForm();

    removeCard();
  });
}

function insertObject(card, img, bgColor) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card" style="background: ${bgColor}"><h2 class="header">${card}</h2><img src="${img}"><button class="delete-btn" type="button">delete</button></div>`
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
      event.target.closest(".card").remove(); // find the closest parent card of the delete button that was clicked
    }
  });
}

createCard();
