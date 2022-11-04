export function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/img/flag/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/img/flag/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}
