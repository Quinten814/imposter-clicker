var imposter = 0;
var knives = 0;
var guns = 0;
var vents = 0;
var kills = 0;
function buyKnife(){
var knifeCost = Math.floor(10 * Math.pow(1.1,knives));     
if(imposter >= knifeCost){                                   
  knives = knives + 1                                   
imposter = imposter - knifeCost;                          
document.getElementById('knives').innerHTML = knives;  
document.getElementById('imposter').innerHTML = imposter;  
}else{
alert("you no have enough imposters")
};
var nextCost = Math.floor(10 * Math.pow(1.1,knives));       
document.getElementById('knifeCost').innerHTML = nextCost;  
};
window.setInterval(function(){

sus(knives*prestiges);

}, 1000);
function buyGun(){
var gunCost = Math.floor(50 * Math.pow(1.1,guns));     
if(imposter >= gunCost){                                   
  guns = guns + 1                                   
imposter = imposter - gunCost;                          
document.getElementById('guns').innerHTML = guns;  
document.getElementById('imposter').innerHTML = imposter;  
}else{
alert("you no have enough imposters")
};
var nextcost2 = Math.floor(50 * Math.pow(1.1,guns));       
document.getElementById('gunCost').innerHTML = nextcost2;  
};
window.setInterval(function(){

sus(guns*5*prestiges);

}, 1000);
function buyVent(){
var ventCost = Math.floor(100 * Math.pow(1.1,vents));     
if(imposter >= ventCost){                                   
  vents = vents + 1                                   
imposter = imposter - ventCost;                          
document.getElementById('vents').innerHTML = vents;  
document.getElementById('imposter').innerHTML = imposter;  
}else{
alert("you no have enough imposters")
};
var nextcost3 = Math.floor(200*Math.pow(1.1,vents))
document.getElementById('ventCost').innerHTML = nextcost3  
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
document.getElementById('ventCost').innerHTML = ventCost;
document.getElementById('vents').innerHTML = vents;  
document.getElementById('imposter').innerHTML = imposter;
document.getElementById('knives').innerHTML = knives;
document.getElementById('guns').innerHTML = guns; 
document.getElementById('gunCost').innerHTML = gunCost;
document.getElementById('knifeCost').innerHTML = knifeCost; 
  }};
