const DOMSelectors = {
  header: document.querySelector("h1"),
  description: document.querySelector(".card-desc"),
  items: document.querySelectorAll("li"),
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
