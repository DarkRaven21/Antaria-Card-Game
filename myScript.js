   
    //Declarations
    let resources = 0;
    let redResource = 0;
    let blueResource = 0;
    let orangeResource = 0;
    
    let totalResDiv = document.getElementById("totalResources");
    let redResDiv = document.getElementById("redResource");
    let orangeResDiv = document.getElementById("orangeResource");
    let blueResDiv = document.getElementById("blueResource");
    
    let startButton = document.getElementById("startButton");
    let isInitialFase = "false"
    let attackButton = document.getElementById("attackButton");
    let isAttacking = "false"
    let endButton = document.getElementById("endButton");
    let resetButton = document.getElementById("resetButton")
    let combatHistory = document.getElementById("combatHistory");

    let passivesButton = document.getElementsByClassName("passive");
    let isGameStarted = "false"
    let isBigger = "false";

    let alertMsg = document.getElementById("alertMsg");

    let actionCost = 0;
    let actionTarget = "none";
    let actionType = "none";
    let actionDamage = 2;

    var magicCardInUse = "";

    let beastDeck = [];
    let heroDeck = [];
    let handDeck = [];

    let playerLife = 0;
    let playerCounters = 0;

    let itemInUse = "";


    
    //Event Listeners
    startButton.addEventListener("click", startGame)
    attackButton.addEventListener("click", attackBeast)
    endButton.addEventListener("click", endTurn)
    resetButton.addEventListener("click", resetGame)
    
    //Functions
    
    function getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function updateResourcesDivs(){
      resources = redResource + blueResource + orangeResource;
      totalResDiv.textContent = resources;
      redResDiv.textContent = redResource;
      orangeResDiv.textContent = orangeResource;
      blueResDiv.textContent = blueResource;
      clearActions();
    }
    
    function startGame(){
      if (isInitialFase == "false"){
        populateDeck(beastDeck, beasts);
        populateDeck(heroDeck, heroes);
        clearResources();
        getResources();
        loopBeastZone();
        getHeroes();
        getAbilities();
        getHandCards();
        addTargets();
        getPlayerLife();
        checkStartTurnPassives();
        checkStartTurnItems();
        removeGlow();
        addClickables();
        startButton.disabled = true
        startButton.textContent = "Comenzar turno"
        attackButton.disabled = false
        endButton.disabled = false
        isInitialFase = "true"
        isGameStarted = "true"
      }
    }
    
    function endTurn(){
      removeAttack();
      removeGlow();
      startButton.disabled = false
      attackButton.disabled = true
      endButton.disabled = true
      checkEndTurnPassives();
      clearResources();
      updateResourcesDivs();
      isInitialFase = "false"
      //clearResources won't be necesary in the final product
    }
    
    function addClickables() {
      for (i=0; i < passivesButton.length; i++){
        passivesButton[i].addEventListener("click", makeBigger)
      }

      let showItemBtn = document.querySelectorAll("#item-btn")

      for (let i=0; i < showItemBtn.length; i++){
        showItemBtn[i].addEventListener("click", showItemCard)
      }
    }
    
    function clearResources(){
      resources = 0;
      redResource = 0;
      orangeResource = 0;
      blueResource = 0;
    }
    
    function getResources(){
      resources = 0;
      let diceThrow = 0;
      
      while(resources<5){
        diceThrow = getRandomNumber(1,3);
        if(diceThrow == 1){
          blueResource++
          resources++
        }
          else if(diceThrow == 2){
          redResource++
          resources++
        }
        else {
          orangeResource++
          resources++
        }
      }
    updateResourcesDivs();
    }  

    function checkStartTurnItems(){
      let zone = document.getElementById("hero-zone");
      let activeHero = zone.querySelectorAll("#cardFrameHero");
      for (let i=0; i<activeHero.length; i++){
        if (activeHero[i].dataset.item != ""){
          let id = activeHero[i].dataset.item;
          if (neutrals[id].startTurnItem1 != ""){    
            neutrals[id].startTurnItem1();
            if (neutrals[id].startTurnItem2 != ""){
              neutrals[id].startTurnItem2();
            }
          }
        }
      }
    }
    
    function addTargets(){
      if (isGameStarted == "false"){
        let cards = document.getElementsByClassName("playingCard");
        for (i=0; i<cards.length; i++){
          cards[i].addEventListener("click", paintRedMsg);
        }
      }
    }
    
    function attackBeast(){
      removeGlow();
      if (isAttacking == "false"){
        doDamage(0, "beast", "attack");
        isAttacking = "true"
        attackButton.classList.add("isAttacking");
      }
      else {
        removeAttack();
      }
    }
    
    function removeAttack(){
      attackButton.classList.remove("isAttacking");
      isAttacking = "false"
    };
    
    function removeRed(){
      let zone = document.getElementById("hero-zone");
      let life = zone.querySelectorAll(".inner-circle")
    
      for (i=life.length-1; i >= 0; i--){
        if (life[i].dataset.wounded == "true"){
          life[i].setAttribute("data-wounded", "false");
          life[i].style.backgroundColor = "white";
          playerCounters--;
          return true;
        }
      }
    }

    function removeRedFromBeast(damage, id){
      let howMuch = damage;
      let zone = document.getElementById("beast-zone")
      let beastCard = zone.querySelector(`[data-id='${id}']`);
      let life = beastCard.querySelectorAll(".inner-circle");
      
      for (let j=0; j<howMuch; j++){
        for (let i=life.length-1; i >= 0; i--){
          if (life[i].dataset.wounded == "true"){
            life[i].setAttribute("data-wounded", "false");
            life[i].style.backgroundColor = "white";
            break;
          }
        }
      }
    }
    
    function receiveCounter(){
      let zone = document.getElementById("hero-zone");
      let life = zone.querySelectorAll(".inner-circle")
      
      for (i=0; i < life.length; i++){
        if (life[i].dataset.wounded == "false"){
          life[i].setAttribute("data-wounded", "true");
          life[i].style.backgroundColor = "red";
          playerCounters++;
          isGameOver();
          break
        }
      }
    }
    
    function writeInCombatHistory(log, color){
      let div = document.createElement('div');
      div.textContent = "- "+log;
      if (color != undefined){
        div.classList.add(color);
      }
      combatHistory.appendChild(div);
    }
    
    //Making Beast Card
    
    function clearBeastCard(){
      let passives = document.getElementsByClassName("passive");
      let name = document.getElementById("nameBeast");
      let defense = document.getElementById("defense");
      name.textContent = "";
      defense.textContent = "";
      let life = document.getElementById("lifeCountersBeast");
      while (life.firstChild) {
        life.removeChild(life.lastChild);
      }
      for (i=0; i < passives.length; i++) {
        passives[i].textContent = ""
      }
    }
    
    function makeBigger(){
      //let frame = document.getElementById("cardFrameBeast");
      let frame = this.parentNode.parentNode.parentNode;
      
      if (isBigger == "false"){
        frame.classList.add("zoom");
        isBigger = "true";
      }
      else {
        frame.classList.remove("zoom");
        isBigger = "false";
      }
    }

    function showItemCard(){
      if (this.parentNode.classList.contains("first")){
        this.parentNode.classList.remove("first");
      } else {
        this.parentNode.classList.add("first");
      }
    }

    function getHeroes(){ 
      if (isGameStarted == "false"){
        let zone = document.getElementById("hero-zone");
        let frame = zone.querySelectorAll("#cardFrameHero");
        for (let i=0; i < frame.length; i++){
          frame[i].dataset.id = heroes[heroDeck[0]].id;
          frame[i].querySelector("#cardContainer").classList.add(heroes[heroDeck[0]].cardClass)
          frame[i].querySelector("#nameHero").textContent = heroes[heroDeck[0]].name;
          frame[i].querySelector("#imageHero").src = heroes[heroDeck[0]].img;
          frame[i].querySelector("#imageHero").addEventListener("click", equipItem)
    
          let lifeCounters = frame[i].querySelector("#lifeCountersHero");
          for (let i=0; i < heroes[heroDeck[0]].life; i++){
            let circle = document.createElement("div");
            let innerCircle = document.createElement("div");
            circle.classList.add("counter");
            innerCircle.classList.add("inner-circle");
            innerCircle.setAttribute("data-wounded", "false");
            circle.appendChild(innerCircle);
            lifeCounters.appendChild(circle);   
          }
    
          let abilities = frame[i].querySelectorAll(".ability")
          abilities[0].innerHTML = heroes[heroDeck[0]].abilityText1;
          abilities[1].innerHTML = heroes[heroDeck[0]].abilityText2;
          abilities[2].innerHTML = heroes[heroDeck[0]].abilityText3;
          for (let i = 0; i < abilities.length; i++) {
            if (abilities[i].textContent === ""){
                abilities[i].remove();
            }
          }
          heroDeck.shift();
        }
      }
    }
    
    function clearHeroCard(){
      let abilityContainerHero = document.getElementById("abilityContainerHero");
      let name = document.getElementById("nameHero");
      name.textContent = "";
      let life = document.getElementById("lifeCountersHero");
      while (life.firstChild) {
        life.removeChild(life.lastChild);
      }
      while (abilityContainerHero.firstChild){
        abilityContainerHero.removeChild(abilityContainerHero.lastChild);
      }
      for (i=0; i < 3; i++) {
        let div = document.createElement('div');
        div.id = "ability"+[i+1];
        div.classList.add("ability");
        abilityContainerHero.appendChild(div);
      }
    }
    
    //Getting Abilities
    function getAbilities(){
      let heroAbilities = document.querySelector("#hero-zone");
      let heroAbility = heroAbilities.querySelectorAll(".ability");
      addClickEvent(heroAbility, useAbility);
    }
    
    function addClickEvent(Array, functionToAdd){
      for (i = 0; i < Array.length; i++){
        Array[i].addEventListener("click", functionToAdd);
      }
    }
    
    //Small recap to add some alert msg

    
    function hideMsg(){
      alertMsg.setAttribute("aria-expanded", false);
    }
    
    function showMsg(message){
      alertMsg.setAttribute("aria-expanded", true);
      alertMsg.textContent = message;
      alertMsg.focus();
      alertMsg.addEventListener("focusout", hideMsg);
    }

    function doDamage(recievedCost, receivedTarget, receivedType, howMuchDamage){
      if (howMuchDamage == undefined){
        actionDamage = 1;
      } else {
        actionDamage = howMuchDamage;
      }

      if (receivedType == "ability"){
        if (orangeResource >= recievedCost){
          actionCost = recievedCost;
          actionTarget = receivedTarget;
          actionType = receivedType;
          showMsg(`Elige una ${receivedTarget} card`);
          return 
        } 
        else {
          showMsg("No tienes los recursos suficientes")
        }
      }
      else if (receivedType == "magic"){
        if (true){
          actionCost = recievedCost;
          actionTarget = receivedTarget;
          actionType = receivedType;
          showMsg(`Elige una ${receivedTarget} card`);
          return 
        } 
        else {
          showMsg("No tienes los recursos suficientes")
        }
      }
      else if (receivedType == "attack"){
          actionCost = recievedCost;
          actionTarget = receivedTarget;
          actionType = receivedType;
          showMsg(`Elige una ${receivedTarget} card`);
          return 
      }
    }

    function paintRedMsg(){
      if (actionType == "none") {return};
      if (actionType == "attack"){
        performAttack(this);
      }
      if (actionType == "ability"){
        performAbility(this);
      }
      if (actionType == "magic"){
        performMagic(this);
      }
    }
    
    function performAttack(x){
      if (x.dataset.type == "beast") {
          if (redResource >= x.dataset.defense){
            paintRedNew(x);
            redResource -= x.dataset.defense;
            checkConditionalPassives();
            clearActions();
            removeAttack();
            updateResourcesDivs();
          } 
          else {
            showMsg("No tienes los recursos suficientes")
            removeAttack();
            clearActions();
          }
        } 
      else {
          showMsg("No puedes atacar Héroes");
          removeAttack();
          clearActions();
        }
    }

    function performAbility(x){
        if (x.dataset.type == "beast" && actionTarget == "beast") {
            if (orangeResource >= (actionCost + parseInt(x.dataset.orangeRatio))){
              paintRedNew(x);
              orangeResource -= (actionCost + parseInt(x.dataset.orangeRatio));
              checkConditionalPassives();
              clearActions();
              updateResourcesDivs();
            } 
            else {
              showMsg("No tienes el poder suficiente")
              clearActions();
            }
        } 
        else if (x.dataset.type == "beast" && actionTarget != "beast") {
            showMsg("Has elegido el objetivo equivocado");
            clearActions();
        }
        else if (x.dataset.type == "hero" && actionTarget == "hero"){
            performAbilityOnHero(x);
        }
        //Add More Cases
    }

    function performMagic(x){
      if (x.dataset.type == "beast" && actionTarget == "beast") {
        if (blueResource >= (actionCost + parseInt(x.dataset.blueRatio))){ 
          checkMagicCardText(magicCardInUse);
          paintRedNew(x);
          blueResource -= (actionCost +  parseInt(x.dataset.blueRatio));
          checkConditionalPassives();
          checkMagicCardEffect(magicCardInUse);
          clearActions();
          updateResourcesDivs();
          removeHandCard(magicCardInUse);
        } 
        else {
          showMsg("No tienes el poder suficiente")
          clearActions();
        }
    } 
    else if (x.dataset.type == "beast" && actionTarget != "beast") {
        showMsg("Has elegido el objetivo equivocado");
        clearActions();
    }
    else if (x.dataset.type == "hero" && actionTarget == "hero"){
        performAbilityOnHero(x);
    }
    }
    
    function paintRedNew(beast){
      let id = beast.dataset.id;
      let life = beast.getElementsByClassName("inner-circle")
      let name = beast.querySelector("#nameBeast").textContent
      while (actionDamage > 0){
        for (let i=0; i < life.length; i++){
          if (life[i].dataset.wounded == "false"){
            life[i].setAttribute("data-wounded", "true");
            life[i].style.backgroundColor = "red";
            beasts[id].life--;
            actionDamage--;
            if (beasts[id].life <= 0){
              writeInCombatHistory("Has eliminado a " + name, 'red')
              showMsg("Esta Bestia ha muerto")
              beasts[id].isAlive = "false";
              break
            }
            writeInCombatHistory("Has herido a " + name, "red");
            break;
          }
        }
      }
    }

    function performAbilityOnHero(hero){
        showMsg("Has seleccionado una carta de Héroe");
        //I need to make this
    }

    function clearActions(){
        actionCost = 0;
        actionTarget = "none";
        actionType = "none";
        actionDamage = 1;
    }

    //Magic Cards

    function getHandCards(){
      let handCards = document.querySelectorAll(".handPlayingCard");

      for (i=0; i<handCards.length; i++){
        completeNeutralCard(handCards[i]);
        addClickToHandCard(handCards[i]);
        showHandCard(handCards[i]);
      }
    }

    function addClickToHandCard(card){
      if(isGameStarted == "false"){
        card.addEventListener("click", useCard);
      }
    }

    function completeNeutralCard(card){
      let cardId = getRandomNumber(1, (neutrals.length - 1)); //Esto me busca en el mazo de cartas la carta elegida
      //let img = card.querySelector(".imageHand"); not working right now
      //Lo de arriba lo voy a tener que cambiar cuando tenga el mazo terminado
      let name = card.querySelector("#nameHand");
      let cost = card.querySelector("#cost");
      let passiveText = card.querySelector(".handPassive");
      let img = card.querySelector('#imageHand');

      card.dataset.id = cardId;
      card.dataset.type = neutrals[cardId].type;
      name.textContent = neutrals[cardId].name;
      cost.textContent = neutrals[cardId].cost;
      img.src = neutrals[cardId].img;
      passiveText.textContent = neutrals[cardId].passiveText1;
    }

    function useCard(){
      removeGlow();
      if (this.dataset.type == 'magic'){
        useMagic(this)
      }
      else if (this.dataset.type == 'item'){
        useItem(this);
      }
    }

    function useMagic(card){
      magicCardInUse = card;
      neutrals[card.dataset.id].conditionalPassive1();
    }

    function addGlow(){
      let zone = document.getElementById("hero-zone");
      let heroes = zone.querySelectorAll("#cardFrameHero");
      for(let i=0; i<heroes.length; i++){
        heroes[i].querySelector("#imageHero").classList.add("glow");
      }
    }

    function removeGlow(){
      let zone = document.getElementById("hero-zone");
      let heroes = zone.querySelectorAll("#cardFrameHero");
      for(let i=0; i<heroes.length; i++){
        heroes[i].querySelector("#imageHero").classList.remove("glow");
      }
    }

    function clearHandCard(){
      let handCards = document.querySelectorAll(".handPlayingCard");

      for (i=0; i<handCards.length; i++){
        handCards[i].dataset.id = "";
        handCards[i].querySelector("#nameHand").textContent = "";
        handCards[i].querySelector("#cost").textContent = "";
        handCards[i].querySelector(".handPassive").textContent = "";
        handCards[i].removeEventListener("click", useCard);
      }
    }

    function removeHandCard(card){
      card.style.display = "none";
      magicCardInUse = "";
    }

    function showHandCard(card){
      card.style.display = "";
      magicCardInUse = "";
    }

    //new

    function updateCard(id){
      let zone = document.getElementById("beast-zone");
      let card = zone.querySelector("[data-id='"+id+"']");
      card.dataset.defense = beasts[id].defense;
      card.querySelector("#defense").textContent = beasts[id].defense;
    }

    function checkEndTurnPassives(){
      let zone = document.getElementById("beast-zone");
      let activeBeast = zone.querySelectorAll("#cardFrameBeast");
      for (let i=0; i<activeBeast.length; i++){
        if (beasts[activeBeast[i].dataset.id].isAlive == "true" && beasts[activeBeast[i].dataset.id].endTurnPassive1 != ""){
          beasts[activeBeast[i].dataset.id].endTurnPassive1();
          if (beasts[activeBeast[i].dataset.id].endTurnPassive2 != "") {
            beasts[activeBeast[i].dataset.id].endTurnPassive2();
          }
        }   
      }
    }
    
    function checkStartTurnPassives(){
      checkBeastSTPassives();
      checkHeroSTPassives();
    }

    // New
    function checkBeastSTPassives(){
      let zone = document.getElementById("beast-zone");
      let activeBeast = zone.querySelectorAll("#cardFrameBeast");
      for (let i=0; i<activeBeast.length; i++){
        if (beasts[activeBeast[i].dataset.id].isAlive == "true" && beasts[activeBeast[i].dataset.id].startTurnPassive1 != ""){
          beasts[activeBeast[i].dataset.id].startTurnPassive1();
          if (beasts[activeBeast[i].dataset.id].startTurnPassive2 != "") {
            beasts[activeBeast[i].dataset.id].startTurnPassive2();
          }
        }   
      }
    }

    function checkHeroSTPassives(){
      let zone = document.getElementById("hero-zone");
      let activeHero = zone.querySelectorAll("#cardFrameHero");
      for (let i=0; i<activeHero.length; i++){
        if (heroes[activeHero[i].dataset.id].startTurnPassive1 != ""){
          heroes[activeHero[i].dataset.id].startTurnPassive1();
          if (heroes[activeHero[i].dataset.id].startTurnPassive2 != "") {
            heroes[activeHero[i].dataset.id].startTurnPassive2();
          }
        }   
      }
    }
    // New
    
    function checkConditionalPassives(){
      let zone = document.getElementById("beast-zone");
      let activeBeast = zone.querySelectorAll("#cardFrameBeast");
      for (let i=0; i<activeBeast.length; i++){
        if (beasts[activeBeast[i].dataset.id].isAlive == "true" && beasts[activeBeast[i].dataset.id].conditionalPassive1 != ""){
          beasts[activeBeast[i].dataset.id].conditionalPassive1();
          if (beasts[activeBeast[i].dataset.id].conditionalPassive2 != "") {
            beasts[activeBeast[i].dataset.id].conditionalPassive2();
          }
        }   
      }
    }

    function checkMagicCardEffect(card){
      neutrals[card.dataset.id].cardEffectOnSucces();
    }

    function checkMagicCardText(card){
      let text = neutrals[card.dataset.id].cardTextOnSucces;
      writeInCombatHistory(text, 'blue');
    }
    
    function loopBeastZone(){
      if (isGameStarted == "false"){
        let zone = document.getElementById("beast-zone");
        let activeBeast = zone.querySelectorAll("#cardFrameBeast");
        for (let i=0; i<activeBeast.length; i++){
          fillBeastCard(activeBeast[i]);
        }
      }
    }
    
    function fillBeastCard(frame){
      frame.dataset.defense = beasts[beastDeck[0]].defense;
      frame.dataset.id = beasts[beastDeck[0]].id;
      frame.dataset.redRatio = beasts[beastDeck[0]].redRatio;
      frame.dataset.blueRatio = beasts[beastDeck[0]].blueRatio;
      frame.dataset.orangeRatio = beasts[beastDeck[0]].orangeRatio;
      frame.querySelector("#nameBeast").textContent = beasts[beastDeck[0]].name;
      frame.querySelector("#defense").textContent = beasts[beastDeck[0]].defense;
      frame.querySelector("#imageBeast").src = beasts[beastDeck[0]].img;
      let passives = frame.getElementsByClassName("passive");
      passives[0].textContent = beasts[beastDeck[0]].passiveText1;
      passives[1].textContent = beasts[beastDeck[0]].passiveText2;
      passives[2].textContent = beasts[beastDeck[0]].passiveText3;
      addLifeToCard(frame, beastDeck[0]);
      beastDeck.shift();
    }
    
    function addLifeToCard(frame, id){
      for (let i=0; i < beasts[id].life; i++){
        let lifeCounters = frame.querySelector("#lifeCountersBeast");
        let circle = document.createElement("div");
        let innerCircle = document.createElement("div");
        circle.classList.add("counter");
        innerCircle.classList.add("inner-circle");
        innerCircle.setAttribute("data-wounded", "false");
        circle.appendChild(innerCircle);
        lifeCounters.appendChild(circle);    
      }
    }

    function useAbility(){
      let thisAbility = this.id;
      let cardId = this.parentNode.parentNode.parentNode.dataset.id;
      if (thisAbility == "ability1" && heroes[cardId].ability1 != ""){
        heroes[cardId].ability1()
      } else if (thisAbility == "ability2" && heroes[cardId].ability2 != ""){
        heroes[cardId].ability2()
      } else if (thisAbility == "ability3" && heroes[cardId].ability3 != "") {
        heroes[cardId].ability3();
      }
    }

// La idea es que populateDeck() va a llenar los arrays con indexes correlativos
// Cada uno representando una carta del mazo base.
// shuffle() va a tomar esos arrays y los va a reorganizar, barajando así el mazo.
// Cuando llamemos entonces al array[0] el index que nos dará como resultado será 
// la carta que tomaremos del mazo en primer lugar.
// array[0] = 5. entonces llamamos a beasts[5];
// tempArrayShow nos da una idea de como funcionaría el sistema;

function populateDeck(deck, base){
  for (let i=0; i < base.length; i++){
    deck[i] = i;
  }
  shuffle(deck);
}

function shuffle(deck){
  let i = deck.length;
  while (--i > 0) {
    let temp = Math.floor(Math.random() * (i + 1));
    [deck[temp], deck[i]] = [deck[i], deck[temp]];
  }
}


function tempArrayShow(deck, base){
  let tempDeck = [];
  for (let i=0; i < base.length; i++){
    let x = deck[i];
    tempDeck[i] = base[x];
  }
  console.log(tempDeck);
}
//
    

//Player Life


function getPlayerLife(){
  if (isGameStarted == "false"){
    let zone = document.getElementById("hero-zone");
    let hero = zone.querySelectorAll("#cardFrameHero");
    let id = 0;
    for (let i=0; i < hero.length; i++){
      id = hero[i].dataset.id;
      playerLife += parseInt(heroes[id].life);
    }
  }
} //Tengo que ir al script que agrega los contadores al jugador y sumar playerCounters desde ahi
//Tengo que llamar tambien a la funcion que determina si perdiste o no la partida

function isGameOver(){
  if(playerCounters >= playerLife){
    setTimeout(() => {
      alert("The Game is Over. You've Lost");
      resetGame();
    }, "10");
  }
}


//Item

function useItem(card){
  itemInUse = card.dataset.id;
  actionCost = card.querySelector("#cost").textContent;
  actionType = "item";
  actionTarget = "hero";
  showMsg("Elige un heroe");
  addGlow();
}

// function useItem(card){
//   itemInUse = card.dataset.id;
//   actionCost = card.querySelector("#cost").textContent;
//   actionType = "item"
//   actionTarget = "hero"
//   addGlow();
// }

//Esto es lo que está en imageHero
function equipItem(){
  removeGlow();
  if (actionType == "item" && actionTarget == "hero"){
    if(totalResources >= actionCost){
      useResources(actionCost);
      let fullCard = this.parentNode.parentNode.parentNode;
      this.parentNode.parentNode.dataset.item = itemInUse;
      fillItemCard(fullCard);
      clearActions(); //No se como se llama, pero lo que limpia los cost, types y eso
    }
  }
}

//Esta funcion es para descontar los recursos del jugador desde ataque hasta habilidad
function useResources(cardCost) {
  let cost = cardCost;
  while (cost > 0){
    if (redResource > 0){
      redResource --;
    } else if (blueResource > 0){
      blueResource --;
    } else if (orangeResource > 0){
      orangeResource--;
    }
    cost --;
  }
  updateResourcesDivs();
}

function fillItemCard(card){
  let itemCard = card.querySelector(".item-equipped");
  let id = itemInUse;
  //itemCard.querySelector(".item-equipped-image") = neutrals[id].image;
  itemCard.querySelector("#nameHand").textContent = neutrals[id].name;
  itemCard.querySelector("#cost").textContent = neutrals[id].cost;
  itemCard.querySelector(".handPassive").textContent = neutrals[id].passiveText1;
  itemCard.classList.add("show");

  discardItem();
  itemInUse = "";
}

function discardItem(){
  let zone = document.getElementById("hand-zone");
  let card = zone.querySelectorAll("#handCardFrame");
  for (let i=0; i<card.length; i++){
    console.log(card[i].dataset.id);
    if(card[i].dataset.id == itemInUse){
      card[i].style.display = "none";
      break
    }
  }
  itemInUse = "";
}

// Las habilidades no funcionan en la segunda carta. Reparar

















   //Ya no se usa
   function resetGame(){
    if (confirm("¿Está seguro que quiere reiniciar la partida?")){
      window.location.reload();
      //Dejo esto comentado para limpieza mas tarde
      // endTurn();
      // clearBeastCard();
      // clearHeroCard();
      // clearHandCard();
      // attackButton.disabled = true;
      // endButton.disabled = true;
      // isGameStarted = "false";
      // startButton.textContent = "Comenzar juego";
      // combatHistory.textContent = ""
      // let lifeInner = document.getElementsByClassName("inner-circle");
      // for (i=0; i<lifeInner.length; i++){
      //   lifeInner[i].dataset.wounded = "false"
      //   lifeInner[i].style.backgroundColor = "white"
      // }
    }
  }