const addButton = document.getElementById("add-box");
const addComment = document.getElementById("add-comment");

addButton.addEventListener("click", function() {
  const name = prompt("name the box");

  const container = document.createElement("div");
  const inputBox = document.createElement("input");
  const removeButton = document.createElement("button");

  container.classList.add("input-container");
  inputBox.setAttribute("type", "text");
  inputBox.setAttribute("id", name);
  inputBox.setAttribute("name", name);
  inputBox.setAttribute("placeholder", name);
  inputBox.setAttribute("maxlength", 256);
  inputBox.setAttribute("required", "");
  removeButton.classList.add("remove-box");
  removeButton.innerHTML = "-";

  container.appendChild(inputBox);
  container.appendChild(removeButton);

  document.getElementById("form-container").appendChild(container);
});

addComment.addEventListener("click", function() {
    const name = prompt("name the box");
  
    const container = document.createElement("div");
    const textArea = document.createElement("textarea");
    const removeButton = document.createElement("button");
  
    container.classList.add("input-container");
    textArea.setAttribute("type", "text");
    textArea.setAttribute("id", name);
    textArea.setAttribute("name", name);
    textArea.setAttribute("placeholder", name);
    textArea.setAttribute("maxlength", 3072);
    textArea.setAttribute("required", "");
    textArea.setAttribute("rows", "5");
    removeButton.classList.add("remove-box");
    removeButton.innerHTML = "-";
  
    container.appendChild(textArea);
    container.appendChild(removeButton);
  
    document.getElementById("form-container").appendChild(container);
  });

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("remove-box")) {
      event.target.parentNode.remove();
    }
  });