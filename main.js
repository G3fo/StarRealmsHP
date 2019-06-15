var i = 2;
var content = document.getElementById("row").innerHTML;

function addPlayer(add) {
  i > 4 ? (i = 4) : "";
  i < 1 ? (i = 1) : "";

  let player = "player" + i;
  let div = document.getElementById(player);

  if (add == 1) {
    div.classList.remove("hide");
    i++;
  } else {
    div.classList.add("hide");
    i--;
  }
}

var app = new Vue({
  el: "#app",
  data: {
    player1: 50,
    player2: 50,
    player3: 50,
    player4: 50,
    player1name: "",
    player2name: "",
    player3name: "",
    player4name: ""
  }
});
