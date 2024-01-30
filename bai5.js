const users = [];

function registerUser() {
  const name = document.querySelector("input[name='name']").value;
  const email = document.querySelector("input[name='email']").value;
  const password = document.querySelector("input[name='password']").value;

  if (!name || !email || !password) {
    return;
  }

  const user = {
    name,
    email,
    password,
  };

  users.push(user);

  localStorage.setItem("users", JSON.stringify(users));

  alert("Đăng ký thành công!");
}

document.querySelector("form").addEventListener("submit", registerUser);
