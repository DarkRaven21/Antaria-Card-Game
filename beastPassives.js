function predator(){
if (this.life >= 3 && this.isAlive == "true"){
    receiveCounter();
    writeInCombatHistory("Anruk te ataca desde las sombras");
}
//let zone = document.getElementById("beast-zone");
// let beast = document.getElementById("cardFrameBeast")
// let life = beast.getElementsByClassName("inner-circle")
// for (i=0; i < life.length; i++){
//     if (life[i].dataset.wounded == "true"){
//     break
//     }
//     receiveCounter();
//     writeInCombatHistory("Anruk attacks you from the shadows")
//     break
// }
}

function tailHit(){
    if(blueResource >= 1){
        return;
    }
}

function hardScales() {
    if(redResource >= 1){
        redResource -= 1;
        updateResourcesDivs();
    }
}

function debilidadMagica() {
    return;
}

function pinzamiento(){
    if (this.isAlive == "true"){
        receiveCounter();
        writeInCombatHistory("Laos arremete contra tus heroes");
    }
}

function caparazon(){
    if (this.life < 3){
        this.defense = 3;
        console.log("Making me stronger every time I lose life");
        if (this.life < 2){
        this.defense = 4;
        } 
        updateCard(this.id);
    };
}