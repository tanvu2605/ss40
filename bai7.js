let userName = "";

function addUserName() {
  const name = document.querySelector("input[name='name']").value;

  if (!name) {
    return;
  }

  localStorage.setItem("userName", name);

  userName = name;
  document.querySelector("#name").innerHTML = userName;

  document.querySelector("form").style.display = "none";
}

function deleteUserName() {
  localStorage.removeItem("userName");

  userName = "";
  document.querySelector("#name").innerHTML = userName;

  document.querySelector("form").style.display = "block";
}

document.querySelector("form").addEventListener("submit", addUserName);

document.querySelector("#delete").addEventListener("click", deleteUserName);