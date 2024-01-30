const players = document.querySelector("#players");

function addPlayer() {
  const name = document.querySelector("input[name='name']").value;
  if (!name) {
    return;
  }

  const player = {
    id: Date.now(),
    name,
  };

  localStorage.setItem(player.id, player.name);

  players.innerHTML += `
    <li>
      <strong>ID:</strong> ${player.id}
      <strong>Tên:</strong> ${player.name}
    </li>
  `;
}

document.querySelector("form").addEventListener("submit", addPlayer);

window.onload = function () {
  const playersFromLocalStorage = Object.keys(localStorage).map((key) => {
    return {
      id: key,
      name: localStorage.getItem(key),
    };
  });

  players.innerHTML = playersFromLocalStorage
    .map((player) => {
      return `
      <li>
        <strong>ID:</strong> ${player.id}
        <strong>Tên:</strong> ${player.name}
      </li>
    `;
    })
    .join("");
};

function deletePlayer() {
  const id = document.querySelector("input[name='id']").value;
  if (!id) {
    return;
  }

  localStorage.removeItem(id);

  players.innerHTML = Object.keys(localStorage)
    .map((key) => {
      return `
      <li>
        <strong>ID:</strong> ${key}
        <strong>Tên:</strong> ${localStorage.getItem(key)}
      </li>
    `;
    })
    .join("");
}

document
  .querySelector("form[method='post']")
  .addEventListener("submit", deletePlayer);