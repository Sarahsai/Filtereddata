// Data as JSON objects
var players = [
  {
    "playerName": "LeBron James",
    "team": "Los Angeles Lakers",
    "position": "Small Forward"
  },
  {
    "playerName": "Stephen Curry",
    "team": "Golden State Warriors",
    "position": "Point Guard"
  },
  {
    "playerName": "Kevin Durant",
    "team": "Brooklyn Nets",
    "position": "Small Forward"
  },
  {
    "playerName": "Kawhi Leonard",
    "team": "LA Clippers",
    "position": "Small Forward"
  },
  {
    "playerName": "Giannis Antetokounmpo",
    "team": "Milwaukee Bucks",
    "position": "Power Forward"
  },
  {
    "playerName": "James Harden",
    "team": "Brooklyn Nets",
    "position": "Shooting Guard"
  },
  {
    "playerName": "Russell Westbrook",
    "team": "Los Angeles Lakers",
    "position": "Point Guard"
  },
  {
    "playerName": "Joel Embiid",
    "team": "Philadelphia 76ers",
    "position": "Center"
  },
  {
    "playerName": "Nikola Jokic",
    "team": "Denver Nuggets",
    "position": "Center"
  },
  {
    "playerName": "Luka Doncic",
    "team": "Dallas Mavericks",
    "position": "Point Guard"
  },
  {
    "playerName": "Damian Lillard",
    "team": "Portland Trail Blazers",
    "position": "Point Guard"
  },
  {
    "playerName": "Kyrie Irving",
    "team": "Brooklyn Nets",
    "position": "Point Guard"
  },
  {
    "playerName": "Paul George",
    "team": "LA Clippers",
    "position": "Small Forward"
  },
  {
    "playerName": "Anthony Davis",
    "team": "Los Angeles Lakers",
    "position": "Power Forward"
  },
  {
    "playerName": "Zion Williamson",
    "team": "New Orleans Pelicans",
    "position": "Power Forward"
  },
  {
    "playerName": "Devin Booker",
    "team": "Phoenix Suns",
    "position": "Shooting Guard"
  },
  {
    "playerName": "Bradley Beal",
    "team": "Washington Wizards",
    "position": "Shooting Guard"
  },
  {
    "playerName": "Donovan Mitchell",
    "team": "Utah Jazz",
    "position": "Shooting Guard"
  },
  {
    "playerName": "Jayson Tatum",
    "team": "Boston Celtics",
    "position": "Small Forward"
  },
  {
    "playerName": "Karl-Anthony Towns",
    "team": "Minnesota Timberwolves",
    "position": "Center"
  }
];


function displayPlayers() {
  var playerContainer = document.getElementById("player-container");
  playerContainer.innerHTML = ""; // Clear existing players

  for (var i = 0; i < players.length; i++) {
    var player = players[i];
    var playerCard = document.createElement("div");
    playerCard.className = "player-card";
    playerCard.innerHTML = `
      <h3>${player.playerName}</h3>
      <p><strong>Team:</strong> ${player.team}</p>
      <p><strong>Position:</strong> ${player.position}</p>
    `;
    playerContainer.appendChild(playerCard);
  }
}

displayPlayers();


function filterByTeam() {
  var teamFilter = document.getElementById("team-filter").value;
  players = players.filter(function(player) {
    return player.team === teamFilter;
  });
  displayPlayers();
}


function filterByPosition() {
  var positionFilter = document.getElementById("position-filter").value;
  players = players.filter(function(player) {
    return player.position === positionFilter;
  });
  displayPlayers();
}


document.getElementById("team-filter").addEventListener("change", filterByTeam);
document.getElementById("position-filter").addEventListener("change", filterByPosition);
