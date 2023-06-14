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
    name: "Bola de fuego",
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
    name: "Afilar",
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
    name: "Luz curativa",
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
    name: "Abrumar",
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
    cardTextOnSucces:"Arremetes contra el enemigo con todo tu poder",
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
    passiveText1: "Agrega 1 recurso rojo al principio de cada turno<br>---<br>Cuando se equipa, realiza un ataque gratis contra una bestia  ",
    passiveText2: "",
    cardTextOnSucces:"Realizas un corte rápido y certero, la hoja de tu arma corta la carne sin dificultad alguna"
};
neutrals.push(shadowAxe);

let lightning = {
    id: 8,
    name: "Convocar rayo",
    cost: "3",
    type: "magic",
    img: 'img/Neutrals/Call_Lightning.png',
    conditionalPassive1: useLightning,
    cardEffectOnSucces: doNothing,
    passiveText1: "Un devastador ataque eléctrico que aplica 1 contador al enemigo seleccionado",
    passiveText2: "",
    cardTextOnSucces:"Atacas al enemigo con la fuerza de un rayo"
}
neutrals.push(lightning);

let justiceShield = {
    id: 9,
    name:"Escudo de la justicia", 
    cost:"3", 
    type: "item",
    itemType: "shield",
    img: 'img/Neutrals/justiceShield.png',
    durability: 3,
    startTurnItem1: "",
    startTurnItem2:"", 
    endTurnItem1: useProtect, 
    endTurnItem2:"", 
    effectOnEquip1: "",
    conditionalItem2:"",
    passiveText1: "Protege hasta 3 contadores",
    passiveText2: "",
    cardTextOnSucces:""
};
neutrals.push(justiceShield);