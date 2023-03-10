function predator(){
let beast = document.getElementById("cardFrameBeast")
let life = beast.getElementsByClassName("inner-circle")
for (i=0; i < life.length; i++){
    if (life[i].dataset.wounded == "true"){
    break
    }
    receiveCounter();
    writeInCombatHistory("Anruk attacks you from the shadows")
    break
}
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
    console.log("Doing damage at the end of every turn");
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