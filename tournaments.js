function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

const id = getQueryParam("id");
const tournament = tournaments.find(t => t.id === id);

document.getElementById("tournament-title").textContent = tournament.name;
document.getElementById("tournament-dates").textContent = tournament.dates;

const playerList = document.getElementById("player-list");

// show players with checkboxes
tournament.players.forEach(player => {
  const div = document.createElement("div");
  div.classList.add("player-option");

  div.innerHTML = `
    <label>
      <input type="checkbox" value="${player}">
      ${player}
    </label>
  `;
  playerList.appendChild(div);
});

document.getElementById("save-team-btn").addEventListener("click", () => {
  const checkedBoxes = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'));
  const selectedPlayers = checkedBoxes.map(cb => cb.value);

  if (selectedPlayers.length === 0) {
    document.getElementById("status").textContent = "Select at least one player!";
    return;
  }

  localStorage.setItem(`team-${tournament.id}`, JSON.stringify(selectedPlayers));
  document.getElementById("status").textContent = "Team saved!";
});
const tournaments = [
  {
    id: "masters",
    name: "The Masters",
    dates: "Apr 9 - Apr 12, 2026",
    players: ["Scottie Scheffler", "Viktor Hovland", "Rory McIlroy", "Brooks Koepka"]
  },
  {
    id: "pga",
    name: "PGA Championship",
    dates: "May 14 - May 17, 2026",
    players: ["Jordan Spieth", "Xander Schauffele", "Justin Thomas", "Jon Rahm"]
  },
  {
    id: "usopen",
    name: "U.S. Open",
    dates: "Jun 18 - Jun 21, 2026",
    players: ["Max Homa", "Sam Burns", "Tyrrell Hatton", "Dustin Johnson"]
  }
];

const listContainer = document.getElementById("tournament-list");

tournaments.forEach(t => {
  const li = document.createElement("li");
  li.innerHTML = `
    <a href="tournament.html?id=${t.id}" class="tournament-link">
      <strong>${t.name}</strong><br>
      <small>${t.dates}</small>
    </a>
  `;
  listContainer.appendChild(li);
});
