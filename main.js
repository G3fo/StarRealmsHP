var i = 2;
var content = document.getElementById("row").innerHTML;

window.addEventListener(
  "load",
  function(e) {
    setTimeout(function() {
      window.scrollTo(0, 1);
    }, 1);
  },
  false
);

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

Vue.component("player", {
  template: `<div>
  <button class="btn btn-success" v-on:click="player2 += 1">^</button>
  <br />

  <h1>
    {{ player2 }}
  </h1>

  <h3>{{ player2name }}</h3>

  <button class="btn btn-danger" v-on:click="player2 -= 1">v</button>
  <br />

  <input
    v-model="player2name"
    class="form-control"
    placeholder="Name..."
  />
</div>`
});

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
