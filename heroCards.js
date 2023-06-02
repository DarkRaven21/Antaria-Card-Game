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
    img: "img/monnet.png",
    startTurnPassive1:"", 
    startTurnPassive2:"", 
    endTurnPassive1:"", 
    endTurnPassive2:"", 
    conditionalPassive1:"",
    conditionalPassive2:"",
    ability1: aHeal,
    ability2: aHurt,
    ability3: "",
    abilityText1: "Curar (2)<br>Quita un contador del jugador",
    abilityText2: "Herir (3)<br>Aplica un contador a la Bestia seleccionada",
    abilityText3: "" 
}
heroes.push(monnet)

let thuldir = {
    id: 1,
    cardClass: "thuldir",
    name:"Thuldir", 
    life:"4", 
    img: "img/thuldir.png",
    startTurnPassive1: pBerserk, 
    startTurnPassive2:"", 
    endTurnPassive1:"", 
    endTurnPassive2:"", 
    conditionalPassive1:"",
    conditionalPassive2:"",
    ability1: "",
    ability2: "",
    ability3: "",
    abilityText1: "Pasiva<br>Gana 1 recurso rojo extra al principio del turno si el jugador tiene al menos 3 contadores rojos sobre su persona",
    abilityText2: "",
    abilityText3: "" 
}
heroes.push(thuldir);