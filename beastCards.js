const beasts = [
    {
    name:"", 
    life:"", 
    defense:"",
    isAlive: "true",
    withEffect:"false", 
    startTurnPassive1:"", 
    startTurnPassive2:"", 
    endTurnPassive1:"", 
    endTurnPassive2:"", 
    conditionalPassive1:"",
    conditionalPassive2:"",
    passiveText1: "",
    passiveText2: "",
    passiveText3: "",
    orangeRatio:"", 
    redRatio:"", 
    blueRatio:""}
    ]
    
    let anruk = {
    name:"Anruk", 
    life:"3", 
    defense:"3", 
    isAlive: "true",
    withEffect:"false", 
    startTurnPassive1: function hardScales() {
      if(redResource >= 1){
        redResource -= 1;
        updateResourcesDivs();
      }
    },
    startTurnPassive2:"", 
    endTurnPassive1:function predator() {
      let beast = document.getElementById("cardFrameBeast")
      let life = beast.getElementsByClassName("inner-circle")
      for (i=0; i < life.length; i++){
        if (life[i].dataset.wounded == "true"){
          break
        }
        receiveCounter();
        writeInCombatHistory("Anruk te ataca desde las sombras")
        break
      }}, 
    endTurnPassive2:"", 
    conditionalPassive1:function tailHit(){
      if(actionType == 'attack' && redResource > 0){
        receiveCounter();
        writeInCombatHistory("Anruk contraataca golpeando con su cola")
      }
    },
    conditionalPassive2:"",
    passiveText1: "Te hace perder un recurso de tipo rojo durante la fase inicial",
    passiveText2: "Si ésta carta no tiene contadores al final del turno, aplica un contador al jugador",
    passiveText3: "Si al jugador le sobran contadores rojos despues de realizar un ataque, aplica 1 contador al jugador.",
    orangeRatio:0, 
    redRatio:0, 
    blueRatio:0
    }
    
    beasts.push(anruk)