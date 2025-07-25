function getGameIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

const gameId = getGameIdFromURL();

fetch('games.json')
  .then(res => res.json())
  .then(data => {
    const game = data.find(g => g.gameId === gameId);
    if (!game) {
      document.getElementById('game-details').innerText = 'Game not found.';
      return;
    }

    document.getElementById('game-details').innerHTML = `
      <h1>${game.name}</h1>
      <img src="${game.image}" width="300" height="200">
      <p><strong>Description:</strong> ${game.description}</p>
      <p><strong>Created:</strong> ${game.created}</p>
      <p><strong>Time Period:</strong> ${game.time}</p>
      <p><strong>Creator:</strong> ${game.creator}</p>
      <a class="play-button" href="https://www.roblox.com/games/start?placeId=5846386835&launchData=${game.gameId}">Play</a>
    `;
  });
