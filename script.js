function refreshPage() {
    window.location.reload()
}

function scale(element, value) {
    element.style.transform = "scale(" + value + ")";
}


// pokeballs
var pokeDiv = document.querySelector("#pokeballs");
var currentPokemon = ""

function getPokemon(element) {
    console.log(element.value)
    currentPokemon = element.value;
}

function makeCoderCard() {
    var res = `<div class="pokeball">
                    <img src="./assets/pokeball.png" alt="pokeball">
                    <img src="./assets/pokeball.png" alt="pokeball">
                    <img src="./assets/pokeball.png" alt="pokeball">
                    <img src="./assets/pokeball.png" alt="pokeball">
                    <img src="./assets/pokeball.png" alt="pokeball">
                </div>`
    return res
    // console.log(res);
}

async function search() {
    var response = await fetch("https://pokeapi.co/api/v2/pokemon/" + currentPokemon);
    var coderData = await response.json();
    console.log(coderData);
    pokeDiv.innerHTML = makeCoderCard(coderData) + pokeDiv.innerHTML;
}




// help
var helpDiv = document.querySelector("#help-div");

function makeHelp() {
    var res = `<div class="help-div">
                    <div class="correct key">
                        <img src="./assets/masterball.png" alt="masterball">
                        <p>= Correct Value </p>
                    </div>
                    <div class="wrong key">
                        <img src="./assets/pokeball.png" alt="pokeball">
                        <p>= Inorrect Value </p>
                    </div>
                </div>`
    return res
}

function help() {
    helpDiv.innerHTML = makeHelp() + helpDiv.innerHTML
}

function remove() {
    helpDiv.innerHTML = null
}

