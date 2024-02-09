function refreshPage() {
    window.location.reload()
}

function scale(element, value) {
    element.style.transform = "scale(" + value + ")";
}

// generation variables

var gen1s = 1
var gen1e = 151
var gen2s = 152
var gen2e = 251
var gen3s = 252
var gen3e = 386
var gen4s = 387
var gen4e = 493
var gen5s = 494
var gen5e = 649

// pokeballs and guesses

var pokeDiv = document.querySelector("#pokeballs");
// var nameDiv = document.querySelector("#name")

function makePokeData() {
    var res = `<div class="pokeball">
                    <img class="gen" src="./assets/pokeball.png" alt="pokeball">
                    <img class="type1" src="./assets/pokeball.png" alt="pokeball">
                    <img class="type2" src="./assets/pokeball.png" alt="pokeball">
                    <img class="height" src="./assets/pokeball.png" alt="pokeball">
                    <img class="weight" src="./assets/pokeball.png" alt="pokeball">
                </div>`
    return res
    // console.log(res);
}
// function makeNameData() {
//     var res = `<div class="name">
//                     <h1>${pokeName}</h1>
//                 </div>`
//     return res
// }

// answer pokemon

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

async function getAnswer() {
    try {
        // change the number of the getRandomInt argument to add more generations
        var response = await fetch(`https://pokeapi.co/api/v2/pokemon/` + getRandomInt(650));
        answer = await response.json()
        console.log(answer)
    } catch (e) {
        console.log("ERROR: " + e)
    }

}

var answer;
getAnswer();

async function search() {
    var inputElem = document.querySelector('#pokeName')
    var pokeName = inputElem.value

    if (pokeName === ""){
        return
    }

    // console.log(answer)

    var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
    var pokeData = await response.json();
    console.log(pokeData.name);
    console.log(answer.name)

    console.log(pokeData)
    pokeDiv.innerHTML = makePokeData(pokeData) + pokeDiv.innerHTML;
    // nameDiv.innerHTML = makeNameData(pokeData) + nameDiv.innerHTML;

    if (pokeData.id == answer.id) {
        var images = document.querySelectorAll('.pokeball img')
        // images.src ="./assets/masterball.png"
        console.log("you were right")
        images.forEach(image => image.src="./assets/masterball.png")
        // document.querySelector('div.pokeball img').src ="./assets/masterball.png"
    }

    if (pokeData.id >= gen1s && pokeData.id <= gen1e && answer.id >= gen1s && answer.id <= gen1e){
        var images = document.querySelector('.gen')
        images.src ="./assets/masterball.png"
        console.log("gen is the same")
    }
    if (pokeData.id >= gen2s && pokeData.id <= gen2e && answer.id >= gen2s && answer.id <= gen2e){
        var images = document.querySelector('.gen')
        images.src ="./assets/masterball.png"
        console.log("gen is the same")
    }
    if (pokeData.id >= gen3s && pokeData.id <= gen3e && answer.id >= gen3s && answer.id <= gen3e){
        var images = document.querySelector('.gen')
        images.src ="./assets/masterball.png"
        console.log("gen is the same")
    }
    if (pokeData.id >= gen4s && pokeData.id <= gen4e && answer.id >= gen4s && answer.id <= gen4e){
        var images = document.querySelector('.gen')
        images.src ="./assets/masterball.png"
        console.log("gen is the same")
    }
    if (pokeData.id >= gen5s && pokeData.id <= gen5e && answer.id >= gen5s && answer.id <= gen5e){
        var images = document.querySelector('.gen')
        images.src ="./assets/masterball.png"
        console.log("gen is the same")
    }

    if (pokeData.types[0].name === answer.types[0].name){
        var images = document.querySelector('.type1')
        images.src ="./assets/masterball.png"
        console.log("type 1 is the same")
    }

    if (pokeData.types[1].name === answer.types[1].name){
        var images = document.querySelector('.type2')
        images.src ="./assets/masterball.png"
        console.log("type 2 is the same")
    }
    
    if (pokeData.height === answer.height){
        var images = document.querySelector('.height')
        images.src ="./assets/masterball.png"
        console.log("height is the same")
    }

    if (pokeData.weight === answer.weight){
        var images = document.querySelector('.weight')
        images.src ="./assets/masterball.png"
        console.log("weight is the same")
    }
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
                    <p>Only lower case answers</p>
                </div>`
    return res
}

$(document).ready(function () {
    $("#question").hover(function () {
        helpDiv.innerHTML = makeHelp() + helpDiv.innerHTML;
    }, function () {
        helpDiv.innerHTML = null;
    });
});
