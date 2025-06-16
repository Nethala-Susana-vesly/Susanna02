document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const firstName = document.getElementById("firstname").value;
  const surname = document.getElementById("surname").value;
  const email = document.getElementById("email").value;
  const number = document.getElementById("number").value;

  if (firstName && surname && email && number) {
    document.getElementById("formStatus").textContent = "✅Contact saved successfully!";
    document.getElementById("formStatus").style.color = "green";
    document.getElementById("formStatus").style.backgroundColor = "white";
    this.reset();
  } else {
    document.getElementById("formStatus").textContent = "Please fill all fields.";
    document.getElementById("formStatus").style.color = "red";
  }
});


document.getElementById("addBtn").addEventListener("click", function () {
  const input = document.getElementById("todoInput");
  const value = input.value.trim();
  if (value !== "") {
    const list = document.getElementById("todoList");
    const li = document.createElement("li");
    li.textContent = value;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "✕";
    removeBtn.style.color = "white";
    removeBtn.style.backgroundColor = "red";
    removeBtn.onclick = function () {
      list.removeChild(li);
    };

    li.appendChild(removeBtn);
    list.appendChild(li);
    input.value = "";
  }
});
