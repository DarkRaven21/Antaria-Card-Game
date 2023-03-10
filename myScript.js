   
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
        clearResources();
        getResources();
        getBeasts();
        getHeroes();
        getAbilities();
        getHandCards();
        addTargets();
        checkStartTurnPassives();
        startButton.disabled = true
        startButton.textContent = "Comenzar turno"
        attackButton.disabled = false
        endButton.disabled = false
        isInitialFase = "true"
        isGameStarted = "true"
      }
    }
    
    function endTurn(){
      clearResources();
      updateResourcesDivs();
      removeAttack();
      startButton.disabled = false
      attackButton.disabled = true
      endButton.disabled = true
      checkEndTurnPassives();
      isInitialFase = "false"
      //clearResources won't be necesary in the final product
    }
    
    function resetGame(){
      if (confirm("¿Está seguro que quiere reiniciar la partida?")){
        endTurn();
        clearBeastCard();
        clearHeroCard();
        clearHandCard();
        attackButton.disabled = true;
        endButton.disabled = true;
        isGameStarted = "false";
        startButton.textContent = "Comenzar juego";
        combatHistory.textContent = ""
        let lifeInner = document.getElementsByClassName("inner-circle");
        for (i=0; i<lifeInner.length; i++){
          lifeInner[i].dataset.wounded = "false"
          lifeInner[i].style.backgroundColor = "white"
        }
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
    
    function checkStartTurnPassives(){
      beasts.forEach(beast => {if(beast.startTurnPassive1 != "" && beast.isAlive == "true"){
        beast.startTurnPassive1();
      }
      if(beast.startTurnPassive2 != "" && beast.isAlive == "true"){
        beast.startTurnPassive2();
      }})
    }
    
    function checkEndTurnPassives(){
      beasts.forEach(beast => {if(beast.endTurnPassive1 != "" && beast.isAlive == "true"){
        beast.endTurnPassive1();
      }
      if(beast.endTurnPassive2 != "" && beast.isAlive == "true"){
        beast.endTurnPassive2();
      }})
    }
    
    function checkConditionalPassives(){
      beasts.forEach(beast => {if(beast.conditionalPassive1 != "" && beast.isAlive == "true"){
        beast.conditionalPassive1();
      }
      if(beast.conditionalPassive2 != "" && beast.isAlive == "true"){
        beast.conditionalPassive2();
      }})
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
    
    function paintRed(){
      if (this.dataset.type == "hero"){
        showMsg("You can't attack heroes")
        removeAttack()
        return
      }
      if (redResource >= this.dataset.defense){
      let life = this.getElementsByClassName("inner-circle")
      let name = this.querySelector("#nameBeast").textContent
      let lifeArray = Array.from(life);
      for (i=0; i < life.length; i++){
        if (life[i].dataset.wounded == "false"){
          life[i].setAttribute("data-wounded", "true");
          life[i].style.backgroundColor = "red";
          totalLife = lifeArray.filter(life => (life.dataset.wounded=="true"));
          if (totalLife.length == life.length){
            writeInCombatHistory("You've slained " + name)
            showMsg("This Beast is DEAD")
            beasts[1].isAlive = "false";
            break
          }
          writeInCombatHistory("Has herido a " + name);
          break;
        }
      }
      redResource -= this.dataset.defense;
      updateResourcesDivs();
      removeAttack()
      checkConditionalPassives() //Esto se chequea al finalizar el ataque
      }
      else {showMsg("No tienes el poder suficiente")}
      removeAttack();
    }
    
    function removeRed(cardName){
      let thisCard = document.getElementsByClassName(cardName);
      let life = thisCard[0].getElementsByClassName("inner-circle");
      for (i=life.length-1; i >= 0; i--){
        if (life[i].dataset.wounded == "true"){
          life[i].setAttribute("data-wounded", "false");
          life[i].style.backgroundColor = "white";
          return true;
        }
       }
    }
    
    function receiveCounter(){
      let player = document.getElementById("cardFrameHero")
      let life = player.getElementsByClassName("inner-circle")
      let lifeArray = Array.from(life);
      for (i=0; i < life.length; i++){
        if (life[i].dataset.wounded == "false"){
          life[i].setAttribute("data-wounded", "true");
          life[i].style.backgroundColor = "red";
          totalLife = lifeArray.filter(life => (life.dataset.wounded=="true"));
          if (totalLife.length == life.length){
            alert("Game Over")
            startButton.disabled = true
            endButton.disabled = true
            attackButton.disabled = true
            resetGame();   
          }
          break;
        }
      }
    }
    
    function writeInCombatHistory(log){
      combatHistory.innerHTML += log + "<br />";
    }
    
    //Making Beast Card
    
    let passivesButton = document.getElementsByClassName("passive");
    let isGameStarted = "false"
    let isBigger = "false";
    
    function getBeasts(){
      if (isGameStarted == "false"){
      let frame = document.getElementById("cardFrameBeast");
      let passives = document.getElementsByClassName("passive");
      let name = document.getElementById("nameBeast");
      let defense = document.getElementById("defense");
      let lifeCounters = document.getElementById("lifeCountersBeast");
      name.textContent = beasts[1].name;
      frame.dataset.defense = beasts[1].defense;
      frame.dataset.orangeRatio = beasts[1].orangeRatio;
      frame.dataset.redRatio = beasts[1].redRatio;
      frame.dataset.blueRatio = beasts[1].blueRatio;
      defense.textContent = beasts[1].defense;
      for (i=0; i < beasts[1].life; i++){
        let circle = document.createElement("div");
        let innerCircle = document.createElement("div");
        circle.classList.add("counter");
        innerCircle.classList.add("inner-circle");
        innerCircle.setAttribute("data-wounded", "false");
        circle.appendChild(innerCircle);
        lifeCounters.appendChild(circle);    
      }
      passives[0].textContent = beasts[1].passiveText1;
      passives[1].textContent = beasts[1].passiveText2;
      passives[2].textContent = beasts[1].passiveText3;
    //isGameStarted = "true";
      }
    }
    
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
    
    for (i=0; i < passivesButton.length; i++){
      passivesButton[i].addEventListener("click", makeBigger)
    }
    
    function makeBigger(){
      let frame = document.getElementById("cardFrameBeast");
      
      if (isBigger == "false"){
        frame.classList.add("zoom");
        isBigger = "true";
      }
      else {
        frame.classList.remove("zoom");
        isBigger = "false";
      }
    }
    
    function getHeroes(){ 
      if (isGameStarted == "false"){
      let cardClass = document.getElementById("cardContainer");
      let name = document.getElementById("nameHero");
      let abilities = document.getElementsByClassName("ability")
      let lifeCounters = document.getElementById("lifeCountersHero")
      //Filling the Card with data
      cardClass.classList.add(heroes[1].cardClass);
      name.textContent = heroes[1].name;
      for (i=0; i < heroes[1].life; i++){
        let circle = document.createElement("div");
        let innerCircle = document.createElement("div");
        circle.classList.add("counter");
        innerCircle.classList.add("inner-circle");
        innerCircle.setAttribute("data-wounded", "false");
        circle.appendChild(innerCircle);
        lifeCounters.appendChild(circle);   
      }
      abilities[0].innerHTML = heroes[1].abilityText1;
      abilities[1].innerHTML = heroes[1].abilityText2;
      abilities[2].innerHTML = heroes[1].abilityText3;
      for (let i = 0; i < abilities.length; i++) {
        if (abilities[i].textContent === ""){
            abilities[i].remove();
        }
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
      let heroAbilities = document.getElementById("abilityContainerHero");
      let heroAbility = heroAbilities.getElementsByClassName("ability");
      addClickEvent(heroAbility, useAbility);
    }
    
    function addClickEvent(Array, functionToAdd){
      for (i = 0; i < Array.length; i++){
        Array[i].addEventListener("click", functionToAdd);
      }
    }
    
    function useAbility(){
      let thisAbility = this.id;
      if (thisAbility == "ability1"){
        heroes[1].ability1()
      } else if (thisAbility == "ability2"){
        heroes[1].ability2()
      } else if (thisAbility == "ability3") {
        heroes[1].ability3();
      }
    }
    
    //Small recap to add some alert msg
    let alertMsg = document.getElementById("alertMsg");
    
    function hideMsg(){
      alertMsg.setAttribute("aria-expanded", false);
    }
    
    function showMsg(message){
      alertMsg.setAttribute("aria-expanded", true);
      alertMsg.textContent = message;
      alertMsg.focus();
      alertMsg.addEventListener("focusout", hideMsg);
    }
    
    //Abilities
    
    //Making the necesary variables
    let actionCost = 0;
    let actionTarget = "none";
    let actionType = "none";
    
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

    function doDamage(recievedCost, receivedTarget, receivedType){
      if (receivedType == "ability"){
        if (orangeResource >= recievedCost){
          actionCost = recievedCost;
          actionTarget = receivedTarget;
          actionType = receivedType;
          showMsg(`Pick a ${receivedTarget} card`);
          return 
        } 
        else {
          showMsg("No tienes los recursos suficientes")
        }
      }
      else if (receivedType == "magic"){
        if (blueResource >= recievedCost){
          actionCost = recievedCost;
          actionTarget = receivedTarget;
          actionType = receivedType;
          showMsg(`Pick a ${receivedTarget} card`);
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
          showMsg(`Pick a ${receivedTarget} card`);
          return 
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
          paintRedNew(x);
          blueResource -= (actionCost +  parseInt(x.dataset.blueRatio));
          checkConditionalPassives();
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
      let life = beast.getElementsByClassName("inner-circle")
      let name = beast.querySelector("#nameBeast").textContent
      let lifeArray = Array.from(life);
      for (i=0; i < life.length; i++){
        if (life[i].dataset.wounded == "false"){
          life[i].setAttribute("data-wounded", "true");
          life[i].style.backgroundColor = "red";
          totalLife = lifeArray.filter(life => (life.dataset.wounded=="true"));
          if (totalLife.length == life.length){
            writeInCombatHistory("You've slained " + name)
            showMsg("This Beast is DEAD")
            beasts[1].isAlive = "false";
            break
          }
          writeInCombatHistory("Has herido a " + name);
          break;
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
    }

    //Magic Cards

    let magicCardInUse = "";

    function getHandCards(){
      let handCards = document.querySelectorAll(".handPlayingCard");

      for (i=0; i<handCards.length; i++){
        completeCard(handCards[i]);
        addClickToHandCard(handCards[i]);
        showHandCard(handCards[i]);
      }
    }

    function addClickToHandCard(card){
      if(isGameStarted == "false"){
        card.addEventListener("click", usingMagic);
      }
    }

    function completeCard(card){
      let magicId = getRandomNumber(1, (magics.length - 1)); //Esto me busca en el mazo de cartas la carta elegida
      //let img = card.querySelector(".imageHand"); not working right now
      let name = card.querySelector("#nameHand");
      let cost = card.querySelector("#cost");
      let passiveText = card.querySelector(".handPassive");

      card.dataset.id = magicId;
      name.textContent = magics[magicId].name;
      cost.textContent = magics[magicId].cost;
      passiveText.textContent = magics[magicId].passiveText1;
    }

    function usingMagic(){
      magics[this.dataset.id].conditionalPassive1();
      magicCardInUse = this;
    }

    function clearHandCard(){
      let handCards = document.querySelectorAll(".handPlayingCard");

      for (i=0; i<handCards.length; i++){
        handCards[i].dataset.id = "";
        handCards[i].querySelector("#nameHand").textContent = "";
        handCards[i].querySelector("#cost").textContent = "";
        handCards[i].querySelector(".handPassive").textContent = "";
        handCards[i].removeEventListener("click", usingMagic);
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