const beasts = [
  // {
  //   name:"", 
  //   life:"", 
  //   defense:"",
  //   isAlive: "true",
  //   withEffect:"false", 
  //   startTurnPassive1:"", 
  //   startTurnPassive2:"", 
  //   endTurnPassive1:"", 
  //   endTurnPassive2:"", 
  //   conditionalPassive1:"",
  //   conditionalPassive2:"",
  //   passiveText1: "",
  //   passiveText2: "",
  //   passiveText3: "",
  //   orangeRatio:"", 
  //   redRatio:"", 
  //   blueRatio:""
  // }
]
    
let anruk = {
  id: 0,
  name:"Anruk", 
  life:"3", 
  defense:"3", 
  isAlive: "true",
  withEffect:"false", 
  startTurnPassive1: hardScales,
  startTurnPassive2:"", 
  endTurnPassive1: predator, 
  endTurnPassive2:"", 
  conditionalPassive1: tailHit,
  conditionalPassive2:"",
  passiveText1: "Te hace perder un recurso de tipo rojo durante la fase inicial",
  passiveText2: "Si ésta carta no tiene contadores al final del turno, aplica un contador al jugador",
  passiveText3: "Si al jugador le sobran contadores rojos despues de realizar un ataque, aplica 1 contador al jugador.",
  img: "img/anruk.png",
  orangeRatio:0, 
  redRatio:0, 
  blueRatio:0
}
beasts.push(anruk);

let laos = {
  id: 1,
  name:"Laos", 
  life:"3", 
  defense:"2", 
  isAlive: "true",
  withEffect:"false", 
  startTurnPassive1: debilidadMagica,
  startTurnPassive2:"", 
  endTurnPassive1: pinzamiento, 
  endTurnPassive2:"", 
  conditionalPassive1: caparazon,
  conditionalPassive2: "",
  passiveText1: "Al final del turno aplica un contador al jugador",
  passiveText2: "+1 de Defensa por cada contador en esta carta",
  passiveText3: "Los hechizos lanzados contra ésta carta cuestan uno menos",
  img: "img/laos.png",
  orangeRatio:0, 
  redRatio:0, 
  blueRatio:-1
}
beasts.push(laos);

let jayce = {
  id: 2,
  name:"Jayce", 
  life:"3", 
  defense:"3", 
  isAlive: "true",
  withEffect:"false", 
  startTurnPassive1: corneredBeast,
  startTurnPassive2: "", 
  endTurnPassive1: opportunist, 
  endTurnPassive2:"", 
  conditionalPassive1: antiMagicSkin,
  conditionalPassive2:"",
  passiveText1: "Si el jugador no tiene un recurso azul al final del turno. Aplica 1 contador",
  passiveText2: "Los hechizos lanzados contra ésta carta cuestan 1 recurso más",
  passiveText3: "Si es la unica Bestia con vida, gana 1 más de Defensa",
  img: "img/jayce.png",
  orangeRatio:0, 
  redRatio:0, 
  blueRatio:1
}
beasts.push(jayce);

let nikTaliHa = {
  id: 3,
  name:"Nik'Tali'Ha", 
  life:"2", 
  defense:"4", 
  isAlive: "true",
  withEffect:"false", 
  startTurnPassive1: trance,
  startTurnPassive2:"", 
  endTurnPassive1: keenEye, 
  endTurnPassive2:"", 
  conditionalPassive1: agility,
  conditionalPassive2: "",
  passiveText1: "Recupera toda la vida al principio del turno",
  passiveText2: "Aplica 1 contador al jugador por cada dos recursos que no se hayan utilizado",
  passiveText3: "Las habilidades utilizadas contra esta carta cuestan 2 recursos más",
  img: "img/nikTaliHa.png",
  orangeRatio:2, 
  redRatio:0, 
  blueRatio:0
}
beasts.push(nikTaliHa);

let minnarak = {
  id: 4,
  name:"Minnarak", 
  life:"3", 
  defense:"4", 
  isAlive: "true",
  withEffect:"false", 
  startTurnPassive1: webbedZone,
  startTurnPassive2: paralizingVenom, 
  endTurnPassive1: "", 
  endTurnPassive2:"", 
  conditionalPassive1: venomBite,
  conditionalPassive2:"",
  passiveText1: "Te hace perder un recurso de tipo naranja durante la fase inicial",
  passiveText2: "Cada vez que el jugador ataque esta carta recibirá un contador de veneno",
  passiveText3: "El jugador perderá un recurso al azar al inicio del turno por cada contador de veneno",
  img: "img/Minnarak.png",
  orangeRatio:0, 
  redRatio:0, 
  blueRatio:0
}
beasts.push(minnarak);