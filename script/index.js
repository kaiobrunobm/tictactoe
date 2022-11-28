"use strict";
const game_div = document.querySelector(".game");
const first_player = document.querySelector("#player-1");
const second_player = document.querySelector("#player-2");

document
  .querySelector(".player-inputs > button")
  .addEventListener("click", function () {
    const players_div = document.createElement("div");
    players_div.className = "players-title";

    const first_player_span = document.createElement("span");
    if (first_player.value === "") {
      first_player.value = "First Player";
    }

    if (second_player.value === "") {
      second_player.value = "Second Player";
    }

    first_player_span.className = "first-player";
    first_player_span.innerText = first_player.value;

    const x = document.createElement("i");
    x.className = "tic-tac-toe-icon bx bx-x";
    first_player_span.appendChild(x);

    const second_player_span = document.createElement("span");
    second_player_span.className = "second_player";
    second_player_span.innerText = second_player.value;

    const circle = document.createElement("i");
    circle.className = "tic-tac-toe-icon bx bx-radio-circle";
    second_player_span.appendChild(circle);

    const game_div_h2 = document.createElement("h2");

    game_div_h2.append(first_player_span, second_player_span);

    players_div.appendChild(game_div_h2);

    game_div.appendChild(players_div);

    document.querySelector(".tic-tac-toe").style.marginTop = "0";
    document.querySelector(".player-inputs").style.display = "none";
  });

function start_game() {
  let game_icon = "tic-tac-toe-icon bx bx-x";

  function player_turn_game(event) {
    let turn_player = document.body.classList.toggle("first-player-turn");
    turn_player = document.body.classList.toggle("second-player-turn");
    event.currentTarget.removeEventListener("click", player_turn_game);

    if (document.body.classList.contains("first-player-turn")) {
      game_icon = "tic-tac-toe-icon bx bx-x";
    } else if (document.body.classList.contains("second-player-turn")) {
      game_icon = "tic-tac-toe-icon bx bx-radio-circle";
    }
  }

  function add_icon_game(event) {
    const space = event.target;
    const icon = document.createElement("i");
    icon.className = game_icon;
    space.appendChild(icon);
    event.target.addEventListener("click", player_turn_game);
    event.target.removeEventListener("click", add_icon_game);
    event.target.style.cursor = "default";
  }

  document
    .querySelector("#top-space-1")
    .addEventListener("click", add_icon_game);
  document
    .querySelector("#top-space-1")
    .addEventListener("click", player_turn_game);

  document
    .querySelector("#top-space-2")
    .addEventListener("click", add_icon_game);
  document
    .querySelector("#top-space-2")
    .addEventListener("click", player_turn_game);

  document
    .querySelector("#top-space-3")
    .addEventListener("click", add_icon_game);
  document
    .querySelector("#top-space-3")
    .addEventListener("click", player_turn_game);

  document
    .querySelector("#mid-space-4")
    .addEventListener("click", add_icon_game);
  document
    .querySelector("#mid-space-4")
    .addEventListener("click", player_turn_game);

  document
    .querySelector("#mid-space-5")
    .addEventListener("click", add_icon_game);
  document
    .querySelector("#mid-space-5")
    .addEventListener("click", player_turn_game);

  document
    .querySelector("#mid-space-6")
    .addEventListener("click", add_icon_game);
  document
    .querySelector("#mid-space-6")
    .addEventListener("click", player_turn_game);

  document
    .querySelector("#bot-space-7")
    .addEventListener("click", add_icon_game);
  document
    .querySelector("#bot-space-7")
    .addEventListener("click", player_turn_game);

  document
    .querySelector("#bot-space-8")
    .addEventListener("click", add_icon_game);
  document
    .querySelector("#bot-space-8")
    .addEventListener("click", player_turn_game);

  document
    .querySelector("#bot-space-9")
    .addEventListener("click", add_icon_game);
  document
    .querySelector("#bot-space-9")
    .addEventListener("click", player_turn_game);
}

document
  .querySelector(".player-inputs > button")
  .addEventListener("click", start_game);