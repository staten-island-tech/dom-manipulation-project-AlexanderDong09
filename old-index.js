const DOMSelectors = {
  cardHeader: document.querySelector(".header"),
  button: document.querySelector(".btn"),
  container: document.querySelector(".container"),
  text: document.getElementById("value"),
  image: document.getElementById("img"),
};

function addElement(card, img) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card"><h2 class="header">${card}</h2><img src="${img}"></div>`
  );
}

DOMSelectors.button.addEventListener("click", function (insert) {
  insert.preventDefault();

  const inputValue = DOMSelectors.text.value.trim(); // remove whitespace
  const imageLink = DOMSelectors.image.value;

  if (inputValue === "" || imageLink === "") {
    alert("Both fields are required!");
    clearForm();
    return; // if both fields are emtpy,stop execution
  }

  addElement(inputValue, imageLink);
  clearForm();
});

function clearForm() {
  document.querySelector("form").reset();
}

// event listener for form
//get values from form for widget object
// create card and insert it
// find remove buttons and event listeners
