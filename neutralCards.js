const neutrals = [
    {
        id: "",
        name:"", 
        cost:"",
        type:"",
        conditionalPassive1:"",
        conditionalPassive2:"",
        passiveText1: "",
        passiveText2: "",
    }
]

let fireball = {
    id: 1,
    name: "Fireball",
    cost: "3",
    type: "magic",
    conditionalPassive1: useFireball,
    conditionalPassive2: "",
    passiveText1: "Una rápida bola de fuego que aplica 1 contador al enemigo seleccionado",
    passiveText2: ""
}
neutrals.push(fireball);

let sharpen = {
    id: 2,
    name: "Sharpen",
    cost: "2",
    type: "magic",
    conditionalPassive1: function sharpen(){alert('sharpen used')},
    conditionalPassive2: "",
    passiveText1: "Otorgas a tu arma un filo devastador. Ganas 1 recurso de ataque extra en cada ronda",
    passiveText2: ""
}
neutrals.push(sharpen);

let healingBolt = {
    id: 3,
    name: "Healing Bolt",
    cost: "2",
    type: "magic",
    conditionalPassive1: function healingBolt(){alert('Healing Bolt used')},
    conditionalPassive2: "",
    passiveText1: "Un golpe de magia curativa que sana las heridas y quita un contador",
    passiveText2: ""
}
neutrals.push(healingBolt); 

let overwhelm = {
    id: 4,
    name: "Overwhelm",
    cost: "3",
    type: "magic",
    conditionalPassive1: function overwhelm(){alert('overwhelm used')},
    conditionalPassive2: "",
    passiveText1: "Un poderoso golpe que aplica dos contadores al objetivo pero que tambien aplica un contador al usuario",
    passiveText2: ""
}
neutrals.push(overwhelm);

let sword = {
    id: 5,
    name:"Sword", 
    cost:"3", 
    type: "item",
    startTurnItem1: sharpEdge,
    startTurnItem2:"", 
    endTurnItem1: "", 
    endTurnItem2:"", 
    conditionalItem1: "",
    conditionalItem2:"",
    passiveText1: "Agrega 1 recurso rojo al principio de cada turno",
    passiveText2: ""
};
neutrals.push(sword);

