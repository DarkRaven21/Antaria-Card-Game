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







function pBerserk(){
    if (playerCounters >= 3){
      redResource++;
      updateResourcesDivs();
    }
}

