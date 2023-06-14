function useFireball(){
    doDamage(3, "beast", "magic");
}

function sharpEdge(){
    redResource += 1
    updateResourcesDivs();
}

function useHealingBolt(){
    if(blueResource >= 2){
        if (removeRed() === true){
            writeInCombatHistory("Un rayo de luz sana tus heridas", "blue")
            blueResource -= 2;
            updateResourcesDivs();
            removeHandCard(magicCardInUse);
        } 
        else {
            showMsg("Tu vida está al máximo");
        }
      }
      else {
      showMsg("No tienes los recursos suficientes");
      }
}

function useOverWhelm(){
    //Ver como hacer que funcione
    if((playerLife - playerCounters) > 1){
        doDamage(4, "beast", "magic", 2);
    } 
    else {
        showMsg("Realizar este ataque te mataría");
    }
}

function sufferRetailation(number){
    while(number > 0){
        receiveCounter();
        number --;
    }
}

function useSharpen(){
    if (blueResource >=2){
        let zone = document.getElementById("hero-zone");
        let activeHero = zone.querySelectorAll("#cardFrameHero");
        redResource++;
        for (let i=0; i<activeHero.length; i++){
          if (activeHero[i].dataset.item != ""){
            redResource++;
          }
        }
        writeInCombatHistory("Una ola de energía mágica le da a tus armas un filo sin igual", "blue")
        blueResource -= 2;
        updateResourcesDivs();
        removeHandCard(magicCardInUse);
    } else {
    showMsg("No tienes los recursos suficientes");
    }
}

function useShadowStrike(){
    magicCardInUse = findCardInGame(this.id, "Neutral");
    doDamage(0, "beast", "neutral");
}

function useLightning(){
    doDamage(3, "beast", "magic");
}

function useProtect(){
    return
}















function testingEffect(){
    alert("Working");
}

function doNothing(){
    return
}