const users = JSON.parse(localStorage.getItem("users"));

function loginUser() {
  const email = document.querySelector("input[name='email']").value;
  const password = document.querySelector("input[name='password']").value;

  if (!email || !password) {
    return;
  }

  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    sessionStorage.setItem("user", JSON.stringify(user));

    window.location.href = "/";
  } else {
    alert("Thông tin không chính xác!");
  }
}

document.querySelector("form").addEventListener("submit", loginUser);