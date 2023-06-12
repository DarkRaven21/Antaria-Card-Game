function predator(){
  if (this.life >= 3){
    receiveCounter();
    writeInCombatHistory("Anruk te ataca desde las sombras");
  }
}

function tailHit(){
  if (targetBeast == this.id){
    if(isAttacking=='true' && redResource >= 1){
      receiveCounter();
      writeInCombatHistory('Anruk contraataca con un poderoso golpe');
      return;
    }
  }
}

function hardScales() {
    if(redResource >= 1){
        redResource -= 1;
        updateResourcesDivs();
    }
}

function debilidadMagica() {
    return;
}

function pinzamiento(){
  receiveCounter();
  writeInCombatHistory("Laos arremete contra tus heroes");
}

function caparazon(){
  if (this.life < 3){
    this.defense = 3;
    if (this.life < 2){
      this.defense = 4;
    } 
    updateCard(this.id);
  };
}

function opportunist() {
  if (blueResource > 0){
    receiveCounter();
    writeInCombatHistory("Jayce huele magia en el aire y te ataca con sus poderosas garras");
  };
}
  
function antiMagicSkin() {
  return;
}


//Check to see why if it's better in conditional passives
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

function trance() {
  if (this.life < 2){
      writeInCombatHistory("Nik'Tali'Ha se ha recuperado de todas sus heridas");
  }
  this.life = 2;
  removeRedFromBeast(2, this.id);
}

function keenEye() {
  if (resources >= 2){
      for (let i=0; i<resources; i+=2){
          receiveCounter();
      }
  writeInCombatHistory("Nik'Tali'Ha aprovecha tu debilidad y te ataca con sus poderosas pinzas");
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
      addVenom();
      writeInCombatHistory('Minnarak contraataca e inyecta veneno en tus heroes con sus largos colmillos');
      return;
    }
  }
}

function paralizingVenom(){
  // if (venomCounters > 0){
  //   useResources2(venomCounters);
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