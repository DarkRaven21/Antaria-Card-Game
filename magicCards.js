const magics = [
    {
        id: "",
        name:"", 
        cost:"",
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
    conditionalPassive1: function fireball(){
        doDamage(3, "beast", "magic");
    },
    conditionalPassive2: "",
    passiveText1: "Una rápida bola de fuego que aplica 1 contador al enemigo seleccionado",
    passiveText2: ""
}

magics.push(fireball);

let sharpen = {
    id: 2,
    name: "Sharpen",
    cost: "2",
    conditionalPassive1: function sharpen(){alert('sharpen used')},
    conditionalPassive2: "",
    passiveText1: "Otorgas a tu arma un filo devastador. Ganas 1 recurso de ataque extra en cada ronda",
    passiveText2: ""
}

magics.push(sharpen);

let healingBolt = {
    id: 3,
    name: "Healing Bolt",
    cost: "2",
    conditionalPassive1: function healingBolt(){alert('Healing Bolt used')},
    conditionalPassive2: "",
    passiveText1: "Un golpe de magia curativa que sana las heridas y quita un contador",
    passiveText2: ""
}

magics.push(healingBolt); 

let overwhelm = {
    id: 4,
    name: "Overwhelm",
    cost: "3",
    conditionalPassive1: function overwhelm(){alert('overwhelm used')},
    conditionalPassive2: "",
    passiveText1: "Un poderoso golpe que aplica dos contadores al objetivo pero que tambien aplica un contador al usuario",
    passiveText2: ""
}

magics.push(overwhelm);

