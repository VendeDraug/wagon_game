const playerOne = document.getElementById("player1_race");
const playerTwo = document.getElementById("player2_race");
const raceTracks = document.querySelector(".racer_table");

window.addEventListener("keyup", (event) => {
  if (event.keyCode === 81) {
    const activeBox = playerOne.querySelector(".active");
    const nextBox = activeBox.nextElementSibling;
    activeBox.classList.toggle("active");
    if (nextBox.classList.value.includes("last")) {
      nextBox.classList.add("active");
      confirm("Player 1 won!");
      raceTracks.querySelectorAll("td").forEach((td) => {
        td.classList.remove("active");
        if (td.classList.value.includes("first")) {
          td.classList.add("active");
        }
      });
    } else {
      nextBox.classList.add("active");
    }
  }
});

window.addEventListener("keyup", (event) => {
  if (event.keyCode === 80) {
    const activeBox = playerTwo.querySelector(".active");
    const nextBox = activeBox.nextElementSibling;
    activeBox.classList.toggle("active");
    if (nextBox.classList.value.includes("last")) {
      nextBox.classList.add("active");
      confirm("Player 2 won!");
      raceTracks.querySelectorAll("td").forEach((td) => {
        td.classList.remove("active");
        if (td.classList.value.includes("first")) {
          td.classList.add("active");
        }
      });
    } else {
      nextBox.classList.add("active");
    }
  }
});
