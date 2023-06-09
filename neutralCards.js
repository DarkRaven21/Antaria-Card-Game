const neutrals = [
    {
        id: "",
        name:"", 
        cost:"",
        type:"",
        img:"",
        conditionalPassive1:"",
        cardEffectOnSucces:"",
        passiveText1: "",
        passiveText2: "",
        cardTextOnSucces:""
    }
]

let fireball = {
    id: 1,
    name: "Fireball",
    cost: "3",
    type: "magic",
    img: 'img/Neutrals/Fire_Bomb.png',
    conditionalPassive1: useFireball,
    cardEffectOnSucces: doNothing,
    passiveText1: "Una rápida bola de fuego que aplica 1 contador al enemigo seleccionado",
    passiveText2: "",
    cardTextOnSucces:"Una rápida y poderosa bola de fuego sale disparada hacia tu objetivo"
}
neutrals.push(fireball);

let sharpen = {
    id: 2,
    name: "Sharpen",
    cost: "2",
    type: "magic",
    img: 'img/Neutrals/Sharpen.png',
    conditionalPassive1: useSharpen,
    cardEffectOnSucces: "",
    passiveText1: "Otorgas a tu arma un filo devastador y ganas 1 recurso rojo. Ganas 1 recurso rojo extra por cada item equipado",
    passiveText2: "",
    cardTextOnSucces:""
}
neutrals.push(sharpen);

let healingBolt = {
    id: 3,
    name: "Healing Bolt",
    cost: "2",
    type: "magic",
    img: 'img/Neutrals/Healing_Bolt.png',
    conditionalPassive1: useHealingBolt,
    cardEffectOnSucces: "",
    passiveText1: "Un golpe de magia curativa que sana las heridas y quita un contador",
    passiveText2: "",
    cardTextOnSucces:""
}
neutrals.push(healingBolt); 

let overwhelm = {
    id: 4,
    name: "Overwhelm",
    cost: "4",
    type: "magic",
    img: 'img/Neutrals/Overwhelm.png',
    conditionalPassive1: useOverWhelm,
    cardEffectOnSucces: function(){
        sufferRetailation(1);
        writeInCombatHistory('La fuerza del golpe también te hace daño', 'blue')
    },
    passiveText1: "Un poderoso golpe que aplica dos contadores al objetivo pero que tambien aplica un contador al usuario",
    passiveText2: "",
    cardTextOnSucces:""
}
neutrals.push(overwhelm);

let sword = {
    id: 5,
    name:"Espada Pirata", 
    cost:"3", 
    type: "item",
    itemType: "sword",
    img: 'img/Neutrals/Sword.png',
    startTurnItem1: sharpEdge,
    startTurnItem2:"", 
    endTurnItem1: "", 
    endTurnItem2:"", 
    effectOnEquip1: "",
    conditionalItem2:"",
    passiveText1: "Agrega 1 recurso rojo al principio de cada turno",
    passiveText2: "",
    cardTextOnSucces:""
};
neutrals.push(sword);

let iceAxe = {
    id: 6,
    name:"Hacha de acero frío", 
    cost:"3", 
    type: "item",
    itemType: "axe",
    img: 'img/Neutrals/iceAxe.png',
    startTurnItem1: sharpEdge,
    startTurnItem2:"", 
    endTurnItem1: "", 
    endTurnItem2:"", 
    effectOnEquip1: "",
    conditionalItem2:"",
    passiveText1: "Agrega 1 recurso rojo al principio de cada turno",
    passiveText2: "",
    cardTextOnSucces:""
};
neutrals.push(iceAxe);

let shadowAxe = {
    id: 7,
    name:"Hacha Sombra", 
    cost:"5", 
    type: "item",
    itemType: "axe",
    img: 'img/Neutrals/shadowAxe.png',
    startTurnItem1: sharpEdge,
    startTurnItem2:"", 
    endTurnItem1: "", 
    endTurnItem2:"", 
    effectOnEquip1: useShadowStrike,
    conditionalItem2:"",
    passiveText1: "Cuando se equipa, realiza un ataque gratis contra una bestia",
    passiveText2: "Agrega 1 recurso rojo al principio de cada turno",
    cardTextOnSucces:"Realizas un corte rápido y certero, la hoja de tu arma corta la carne sin dificultad alguna"
};
neutrals.push(shadowAxe);