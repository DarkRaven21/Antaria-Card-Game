const heroes = [
    //{
    // cardClass: "",
    // name:"", 
    // life:"", 
    // startTurnPassive1:"", 
    // startTurnPassive2:"", 
    // endTurnPassive1:"", 
    // endTurnPassive2:"", 
    // conditionalPassive1:"",
    // conditionalPassive2:"",
    // ability1: "",
    // ability2: "",
    // ability3: "",
    // abilityText1: "",
    // abilityText2: "",
    // abilityText3: ""
    //}
]
    
let monnet = {
    id: 0,
    cardClass: "monnet",
    name:"Monnet", 
    life:"4", 
    startTurnPassive1:"", 
    startTurnPassive2:"", 
    endTurnPassive1:"", 
    endTurnPassive2:"", 
    conditionalPassive1:"",
    conditionalPassive2:"",
    ability1: function Heal() {
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
    },
    ability2: function Hurt(){
        doDamage(3, "beast", "ability");
    },
    ability3: function doNothing(){
        console.log("")
    },
    abilityText1: "Curar (2)<br>Quita un contador del jugador",
    abilityText2: "Herir (3)<br>Aplica un contador a la Bestia seleccionada",
    abilityText3: "" 
}
heroes.push(monnet)