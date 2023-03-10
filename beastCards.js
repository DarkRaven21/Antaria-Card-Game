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
  orangeRatio:0, 
  redRatio:0, 
  blueRatio:-1
}
beasts.push(laos)