function createGames(player1, hour, player2) {
  return `
      <li>
          <img src="./assets/teams/${player1}.svg" alt="Bandeira do time ${player1}" />
          <strong>${hour}</strong>
          <img src="./assets/teams/${player2}.svg" alt="Bandeira do time ${player2}" />
      </li>`;
}

let delay = -0.3;

function createCard(date, day, games) {
  delay = delay + 0.3;

  return `
      <div class="card" style="animation-delay: ${delay}">
          <h2>${date}<span>${day}</span></h2>
          <ul>
              ${games}
          </ul>
      </div>`;
}

document.querySelector("#cards").innerHTML =
  createCard(
    "21/11",
    "SEGUNDA",
    createGames("brazil", "08:00", "cameroon") +
      createGames("hungary", "13:00", "argentina") +
      createGames("colombia", "20:00", "japan")
  ) +
  createCard(
    "24/11",
    "QUINTA",
    createGames("britishcolumbia", "08:00", "cameroon") +
      createGames("india", "13:00", "armenia") +
      createGames("comoros", "20:00", "jordan")
  );
