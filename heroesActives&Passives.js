//Hero Abilities
//a is Abilitiy, p is Passive
function aHurt(){
    doDamage(3, "beast", "ability");
}

function aHeal() {
    if(orangeResource >= 2){
    if (removeRed("monnet") === true){
        writeInCombatHistory("Usas tus habilidades para sanar tus heridas")
        orangeResource -= 2;
        updateResourcesDivs();
    } 
    else {
        showMsg("Tu vida está a máximo");
    }
    }
    else {
    showMsg("No tienes los recursos suficientes");
    }
}







function pBerserk(){
    if (playerCounters >= 3){
      redResource++;
      updateResourcesDivs();
    }
}

