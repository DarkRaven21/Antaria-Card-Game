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
    img: "img/Heroes/Monnet.png",
    startTurnPassive1:"", 
    startTurnPassive2:"", 
    endTurnPassive1:"", 
    endTurnPassive2:"", 
    conditionalPassive1:"",
    conditionalPassive2:"",
    ability1: aHeal,
    ability2: aHurt,
    ability3: "",
    abilityText1: "<span><strong>Curar (2)</strong><br>Quita un contador del jugador</span>",
    abilityText2: "<span><strong>Herir (3)</strong><br>Aplica un contador a la Bestia seleccionada</span>",
    abilityText3: "" 
}
heroes.push(monnet)

let thuldir = {
    id: 1,
    cardClass: "thuldir",
    name:"Thuldir", 
    life:"4", 
    img: "img/Heroes/Thuldir.png",
    startTurnPassive1: pBerserk, 
    startTurnPassive2:"", 
    endTurnPassive1:"", 
    endTurnPassive2:"",
    conditionalPassive1:"",
    conditionalPassive2:"",
    ability1: "",
    ability2: "",
    ability3: "",
    abilityText1: "<span><strong>Pasiva</strong><br>Gana 1 recurso rojo extra al principio del turno si el jugador tiene al menos 3 contadores rojos sobre su persona</span>",
    abilityText2: "",
    abilityText3: "" 
}
heroes.push(thuldir);

let yvonne = {
    id: 2,
    cardClass: "yvonne",
    name:"Yvonne", 
    life:"3",
    img:"img/Heroes/Yvonne.png",
    startTurnPassive1:pMasterSwordsman, 
    startTurnPassive2:"", 
    endTurnPassive1:"", 
    endTurnPassive2:"", 
    conditionalPassive1:"",
    conditionalPassive2:"",
    ability1: aHurt,
    ability2: "",
    ability3: "",
    abilityText1: "<span><strong>Golpe certero (3)</strong><br>Aplica un contador a la Bestia seleccionada</span>",
    abilityText2: "<span><strong>Maestra de la Espada</strong><br>Ganas 1 recurso rojo extra al principio del turno si tienes una espada equipada</span>",
    abilityText3: "" 
}
heroes.push(yvonne);

let moboa = {
    id: 3,
    cardClass: "moboa",
    name:"Moboa", 
    life:"3", 
    img: "img/Heroes/Moboa.png",
    startTurnPassive1:pMasterMagi, 
    startTurnPassive2:"", 
    endTurnPassive1:"", 
    endTurnPassive2:"", 
    conditionalPassive1:"",
    conditionalPassive2:"",
    ability1: "",
    ability2: "",
    ability3: "",
    abilityText1: "<span><strong>Magi experimentado</strong><br>Ganas 1 recurso azul extra al principio de cada turno</span>",
    abilityText2: "",
    abilityText3: "" 
}
heroes.push(moboa);

let fenrir = {
    id: 4,
    cardClass: "fenrir",
    name:"Fenrir", 
    life:"3", 
    startTurnPassive1:"", 
    startTurnPassive2:"", 
    endTurnPassive1:"", 
    endTurnPassive2:"", 
    conditionalPassive1:pChainHeal,
    conditionalPassive2:"",
    ability1: aStrongHeal,
    ability2: "",
    ability3: "",
    abilityText1: "<span><strong>Curar (3)</strong><br>Quita 1 contador de tu persona</span>",
    abilityText2: "<span><strong>Curación en cadena</strong><br>Quita un contador extra de tu persona si te has curado este turno</span>",
    abilityText3: "" 
}
heroes.push(fenrir);