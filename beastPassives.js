//Anruk
function predator(){
  if (this.life >= 3){
    writeInCombatHistory("Anruk embiste a tus heroes desde las sombras usando el poder de su mandibula", 'dgreen');
    if (!checkShields()){
      receiveCounter();
    }
    if (!checkShields()){
      receiveCounter();
    }
  }
}

function tailHit(){
  if (targetBeast == this.id){
    if(isAttacking=='true' && redResource >= 1){
      writeInCombatHistory('Anruk contraataca con un poderoso golpe', 'dgreen');
      receiveCounter();
      return;
    }
  }
}

function ominousPresence() {
    if(redResource >= 1){
        redResource -= 1;
        updateResourcesDivs();
    }
}

//Laos
function magicWeakness() {
    return;
}

function crusherClaw(){
  writeInCombatHistory("Laos arremete contra tus heroes con sus enormes pinzas", 'lred');
  if (!checkShields()){
    receiveCounter();
  }
}

function carapace(){
  if (this.life < 3){
    this.defense = 4;
    if (this.life < 2){
      this.defense = 5;
    } 
    updateCard(this.id);
  };
}

//Jayce
function opportunist() {
  if (blueResource > 0){
    writeInCombatHistory("Jayce huele magia en el aire y ataca a tus heroes con sus afiladas garras", 'lblue');
    if (!checkShields()){
      receiveCounter();
    }
    if (!checkShields()){
      receiveCounter();
    }
  };
}
  
function antiMagicSkin() {
  return;
}

function corneredBeast() {
  let zone = document.getElementById("beast-zone");
  let beastCards = zone.querySelectorAll("#cardFrameBeast");
  let aliveBeasts = 0;
  for (i=0; i<beastCards.length; i++){
    let id = beastCards[i].dataset.id
    if (beasts[id].isAlive == "true"){
      aliveBeasts++;
    }
  }
  if (aliveBeasts == 1){
    this.defense = 4;
    updateCard(this.id);
  }
}

//Nik'Tali'Ha
function trance() {
  if (this.life < 2){
      writeInCombatHistory("Nik'Tali'Ha se ha recuperado de todas sus heridas");
  }
  this.life = 2;
  removeRedFromBeast(2, this.id);
}

function keenEye() {
  if (resources >= 2){
    writeInCombatHistory("Nik'Tali'Ha aprovecha tu debilidad y ataca a tus heroes con sus largas pinzas", 'lgreen');
      for (let i=0; i<resources; i+=2){
        if(!checkShields()){
          receiveCounter();
        }
      }
  }
  return
}

function agility() {
  return
}

//Minnarak
function webbedZone(){
  if(orangeResource >= 1){
    orangeResource--;
    updateResourcesDivs();
  }
}

function venomBite(){
  if (targetBeast == this.id){
    if(isAttacking=='true'){
      //receiveCounter();
      addVenom();
      receiveCounter();
      writeInCombatHistory('Minnarak contraataca e inyecta veneno en tus heroes con sus largos colmillos');
      return;
    }
  }
}

function paralizingVenom(){
  // if (venomCounters > 0){
  //   for (let i=0; i<venomCounters; i++){
  //     receiveCounter();
  //   }
  //   writeInCombatHistory('El veneno desintegra la carne a un ritmo alarmante');
  // }
  return;
}

var venomCounters = 0;

function addVenom(){
  venomCounters++
  showVenom();
}

function showVenom(){
  let venomContainer = document.getElementById("venom-container");
  let venomDrops = venomContainer.querySelectorAll('.venom');

  for (let i = 0; i < venomDrops.length; i++) {
    if (venomDrops[i].classList.contains("hidden")){
      venomDrops[i].classList.remove("hidden");
      break;
    }
  }
}

//Thuk

var enragedCounters = 0;

function activeHunt(){
  if (redResource > 0){
    writeInCombatHistory("Thuk te ve ansioso por luchar y ataca a tus heroes con sus enormes y pesadas zarpas", 'lbrown');
    for (let i=0; i<redResource; i++){
      if (!checkShields()){
        receiveCounter();
      };
    }
  };
}

function enragedDefense(){
  if (this.life < 3){
    this.defense = 4;
    updateCard(this.id);
  };
}

function enragedPresence(){
  if (this.life < 2){
    enragedCounters = 1;
  };
}

//Blanche
function flyingHigh(){
  let id = this.id;
  //Rehacer
  let zone = document.getElementById("beast-zone");
  let card = zone.querySelector("[data-id='"+id+"']");
  let beastCards = zone.querySelectorAll('#cardFrameBeast');
  card.dataset.notAttackable = 'true';
  for (let i=0; i<beastCards.length; i++){
    if (beastCards[i].classList.contains("dead-beast")){
      card.dataset.notAttackable = '';
      break;
    }
  }
}

function swoopingDown(){
  if (this.life == 3){
    writeInCombatHistory("Blanche baja en picado desde las alturas y ataca a tus heroes con sus garras", 'lblue');
    if (!checkShields()){
      receiveCounter();
    }
  }
}

function fromAbove(){
  if (this.life < 3){
    this.orangeRatio = 0;
    this.blueRatio = 0;
    updateCard(this.id);
  };
}