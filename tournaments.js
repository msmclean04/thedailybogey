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
