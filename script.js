var imposter = 0;
var knives = 0;
var guns = 0;
var vents = 0;
var kills = 0;
function buyKnife(){
var knifeCost = Math.floor(10 * Math.pow(1.1,knives));     //works out the cost of this knife
if(imposter >= knifeCost){                                   //checks that the player can afford the knife
  knives = knives + 1                                   //increases number ofknives
imposter = imposter - knifeCost;                          //removes the imposter spent
document.getElementById('knives').innerHTML = knives;  //updates the number ofknives for the user
document.getElementById('imposter').innerHTML = imposter;  //updates the number of imposter for the user
}else{
alert("you no have enough imposters")
};
var nextCost = Math.floor(10 * Math.pow(1.1,knives));       //works out the cost of the next knife
document.getElementById('knifeCost').innerHTML = nextCost;  //updates the knife cost for the user
};
window.setInterval(function(){

sus(knives*prestiges);

}, 1000);
function buyGun(){
var gunCost = Math.floor(50 * Math.pow(1.1,guns));     //works out the cost of this knife
if(imposter >= gunCost){                                   //checks that the player can afford the knife
  guns = guns + 1                                   //increases number ofknives
imposter = imposter - gunCost;                          //removes the imposter spent
document.getElementById('guns').innerHTML = guns;  //updates the number ofknives for the user
document.getElementById('imposter').innerHTML = imposter;  //updates the number of imposter for the user
}else{
alert("you no have enough imposters")
};
var nextcost2 = Math.floor(50 * Math.pow(1.1,guns));       //works out the cost of the next knife
document.getElementById('gunCost').innerHTML = nextcost2;  //updates the knife cost for the user
};
window.setInterval(function(){

sus(guns*5*prestiges);

}, 1000);
function buyVent(){
var ventCost = Math.floor(100 * Math.pow(1.1,vents));     //works out the cost of this knife
if(imposter >= ventCost){                                   //checks that the player can afford the knife
  vents = vents + 1                                   //increases number ofknives
imposter = imposter - ventCost;                          //removes the imposter spent
document.getElementById('vents').innerHTML = vents;  //updates the number ofknives for the user
document.getElementById('imposter').innerHTML = imposter;  //updates the number of imposter for the user
}else{
alert("you no have enough imposters")
};
var nextcost3 = Math.floor(100 * Math.pow(1.1,vents));      //works out the cost of the next knife
document.getElementById('ventCost').innerHTML = nextcost3;  //updates the knife cost for the user
};
window.setInterval(function(){

sus(vents*10*prestiges);

}, 1000);
function prettify(input){
var output = Math.round(input * 1000000)/1000000;
return output;
}
function loadGame(){
var savedGame = JSON.parse(localStorage.getItem("gameSave"));
if (typeof savedGame.imposter !== "undefined") imposter = savedGame.imposter;
if (typeof savedGame.guns !== "undefined") guns = savedGame.guns;
if (typeof savedGame.knives !== "undefined") knives = savedGame.knives;
if (typeof savedGame.vents !== "undefined") vents = savedGame.vents;
if (typeof savedGame.gunCost !== "undefined") gunCost = savedGame.gunCost
if (typeof savedGame.knifeCost !== "undefined") knifeCost = savedGame.knifeCost;
if (typeof savedGame.ventCost !== "undefined") ventCost = savedGame.ventCost;
if (typeof savedGame.kills !== "undefined") kills = savedGame.kills;
if (typeof savedGame.prestiges !== "undefined") prestiges = savedGame.prestiges;
}
function saveGame(){
var gameSave = {
imposter: imposter,
knives: knives,
knifeCost: knifeCost,
gunCost: gunCost,
ventCost: ventCost,
guns: guns,
vents: vents,
kills: kills,
prestiges: prestiges,
};
localStorage.setItem("gameSave", JSON.stringify(gameSave))
}
window.onload = function(){
loadGame();
};
function kill(number){
kills = kills + number
imposter = imposter - number
document.getElementById('kills').innerHTML = kills;
};
var prestiges = 1;
var prestigeCost = 10000;
function prestige() {
    if(kills >= prestigeCost){
imposter = 0;
knives = 0;
guns = 0;
vents = 0;
kills = 0;
prestiges = prestiges + 1
prestigeCost = Math.floor(10000 * Math.pow(1, 1, prestiges));
document.getElementById('prestigeCost').innerHTML = prestigeCost
document.getElementById('kills').innerHTML = kills;
document.getElementById('ventCost').innerHTML = nextcost3;
document.getElementById('vents').innerHTML = vents;  //updates the number ofknives for the user
document.getElementById('imposter').innerHTML = imposter;
document.getElementById('knives').innerHTML = knives;
document.getElementById('guns').innerHTML = guns; 
document.getElementById('gunCost').innerHTML = nextcost2;
document.getElementById('knifeCost').innerHTML = nextCost; 
  }else{
      alert("u don't have enough kills. get some more >:(")
  }};