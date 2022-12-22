"use strict";
const game_div = document.querySelector(".game");
const first_player = document.querySelector("#player-1");
const second_player = document.querySelector("#player-2");

function game_win() {
  const top_space_1_result = function () {
    const top_space_1_value = document.querySelector("#top-space-1 > i");
    const top_space_2_value = document.querySelector("#top-space-2 > i");
    const top_space_3_value = document.querySelector("#top-space-3 > i");
    if (
      top_space_1_value.classList.contains("bx-x") &&
      top_space_2_value.classList.contains("bx-x") &&
      top_space_3_value.classList.contains("bx-x")
    ) {
      console.log("First player wins");
    } else if (
      top_space_1_value.classList.contains("bx-radio-circle") &&
      top_space_2_value.classList.contains("bx-radio-circle") &&
      top_space_3_value.classList.contains("bx-radio-circle")
    ) {
      console.log("second player wins");
    }
  };

  // const top_space_2 = document.getElementById("top-space-2");
  // const top_space_3 = document.getElementById("top-space-3");
  // const mid_space_1 = document.getElementById("mid-space-1");
  // const mid_space_2 = document.getElementById("mid-space-2");
  // const mid_space_3 = document.getElementById("mid-space-3");
  // const bot_space_1 = document.getElementById("bot-space-1");
  // const bot_space_2 = document.getElementById("bot-space-2");
  // const bot_space_3 = document.getElementById("bot-space-3");
}

function start_game() {
  document
    .querySelector(".player-inputs > button")
    .addEventListener("click", function () {
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

      const play_again_btn = document.querySelector(".play-again-btn");
      play_again_btn.style.display = "block";
      play_again_btn.addEventListener("click", function (event) {
        document
          .querySelectorAll(".tic-tac-toe-space")
          .forEach(function (element) {
            element.classList.remove("player-win");
            element.removeEventListener("click", add_icon_game);
            document
              .querySelectorAll(".tic-tac-toe-space > .tic-tac-toe-icon")
              .forEach(function (element) {
                element.parentNode.removeChild(element);
              });
          });

        players_div.parentNode.removeChild(players_div);
        first_player.value = "";
        second_player.value = "";
        document
          .querySelectorAll(".tic-tac-toe-space")
          .forEach(function (element) {
            element.style.cursor = "pointer";
          });
        document.body.classList = "first-player-turn";
        document.querySelector(".tic-tac-toe").style.marginTop = "10rem";
        document.querySelector(".player-inputs").style.display = "block";
        event.target.style.display = "none";
      });
    });
}
document
  .querySelector(".player-inputs > button")
  .addEventListener("click", start_game());
