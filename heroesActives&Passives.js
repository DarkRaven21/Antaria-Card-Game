//Hero Abilities
//a is Abilitiy, p is Passive
function aHurt(){
    doDamage(3, "beast", "ability");
}

function aHeal() {
    if(orangeResource >= 2){
      if (removeRed() === true){
          writeInCombatHistory("Usas tus habilidades para sanar tus heridas", "orange")
          orangeResource -= 2;
          updateResourcesDivs();
      } 
      else {
          showMsg("Tu vida está al máximo");
      }
    }
    else {
        showMsg("No tienes los recursos suficientes");
    }
}

function aStrongHeal(){
    if(orangeResource >= 3){
        if (removeRed() === true){
            writeInCombatHistory("Un impacto de luz cura tus heridas", "orange")
            orangeResource -= 3;
            updateResourcesDivs();
        } 
        else {
            showMsg("Tu vida está al máximo");
        }
      }
      else {
        showMsg("No tienes los recursos suficientes");
      }
}

function aSlitOpen(){
    doDamage(4, "beast", "ability");
}





function pBerserk(){
    if (playerCounters >= 3){
      redResource++;
      updateResourcesDivs();
    }
}

function pMasterSwordsman(){
    console.log(this.id);
    let zone = document.getElementById("hero-zone");
    let heroCards = zone.querySelectorAll(".full-hero");
    
    for (let i=0; i<heroCards.length; i++){
        let thisCard = heroCards[i].querySelector("#cardFrameHero");
        let thisCardItem = heroCards[i].querySelector(".item-equipped");

        if (thisCard.dataset.id == this.id && thisCardItem.dataset.itemType == "sword"){
            redResource++;
            updateResourcesDivs();
        }
    }
}

function pMasterMagi(){
    blueResource++
    updateResourcesDivs();
}

function pChainHeal(){
    let howMuchHealing = wasHealed;
    if (howMuchHealing > 0){
        for (let i=0; i<howMuchHealing; i++){
            removeRed();
        }
        writeInCombatHistory('Los efectos de la magia curativa siguen sanando tus heridas', 'orange')
    }
}

function pBeastSlayer(){
    let zone = document.getElementById('beast-zone');
    let beastCards = zone.querySelectorAll("#cardFrameBeast");
    beastCards.forEach(element => {
        if (element.classList.contains('dead-beast')){
            redResource++;
            updateResourcesDivs();
        }
    });
}

function pAxeMaster(){
    console.log(this.id);
    let zone = document.getElementById("hero-zone");
    let heroCards = zone.querySelectorAll(".full-hero");
    
    for (let i=0; i<heroCards.length; i++){
        let thisCard = heroCards[i].querySelector("#cardFrameHero");
        let thisCardItem = heroCards[i].querySelector(".item-equipped");

        if (thisCard.dataset.id == this.id && thisCardItem.dataset.itemType == "axe"){
            orangeResource++;
            updateResourcesDivs();
        }
    }
}
