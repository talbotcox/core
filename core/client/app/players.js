var container = document.getElementById("container")
var ul = document.createElement("UL");
var li = document.createElement("LI");
ul.style.backgroundColor = "black";
ul.style.color = "gray";
ul.style.fontFamily = "helvetica";

console.log(ul,container)

container.appendChild(ul)
//ul.appendChild(li)

players = players.sort(function(player1,player2){
  return player1.name.localeCompare(player2.name);
});

var eff = players.filter(function(player){
  return player.gamesPlayed > 15
})

var counter = 0
  for (counter; counter < players.length; counter++) {
    var player = eff[counter]
    var playerElement = playerList(player, counter)
    ul.appendChild(playerElement)
  }



function playerList(player , counter) {
   var item = document.createElement("LI")
   var h3 = document.createElement("H1")
   var stats = document.createElement("div")

   str = ""
   for (var key in player) {
     if (key === "name"){
       continue;
     }
     var value = player[key];
     str = str + key + ":" + value + "<br>"

   }

   stats.innerHTML = str
   h3.innerHTML = player.name



   item.appendChild(h3)
   item.appendChild(stats)
   return item

}
