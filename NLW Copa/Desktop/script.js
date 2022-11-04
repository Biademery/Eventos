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
    "24/11",
    "QUINTA",
    createGames("switzerland", "07:00", "cameroon") +
      createGames("portugal", "13:00", "ghana") +
      createGames("brazil", "16:00", "serbia")
  ) +
  createCard(
    "28/11",
    "SEGUNDA",
    createGames("southkorea", "10:00", "ghana") +
      createGames("brazil", "13:00", "switzerland") +
      createGames("portugal", "16:00", "uruguay")
  );
