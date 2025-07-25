function getGameId() {
  return new URLSearchParams(window.location.search).get('id');
}

fetch('games.json')
  .then(res => res.json())
  .then(games => {
    const game = games.find(g => g.gameId === getGameId());
    const container = document.getElementById('game-container');

    if (!game) {
      container.innerHTML = "<p>Game not found.</p>";
      return;
    }

    container.innerHTML = `
      <div class="game-detail">
        <div class="game-preview">
          <img src="${game.image}" alt="${game.name}">
        </div>
        <div class="game-info">
          <h1>${game.name}</h1>
          <p><strong>By:</strong> ${game.creator}</p>
          <p><strong>Created:</strong> ${game.created}</p>
          <p><strong>Time Period:</strong> ${game.time}</p>
          <p>${game.description}</p>
          <a class="play-button" href="https://www.roblox.com/games/start?placeId=5846386835&launchData=${game.gameId}">Play</a>
        </div>
      </div>
    `;
  });
