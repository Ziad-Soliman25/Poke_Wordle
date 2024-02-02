function refreshPage() {
    window.location.reload()
    // makePokeData()
}

function scale(element, value) {
    element.style.transform = "scale(" + value + ")";
}


// pokeballs and guesses
var pokeDiv = document.querySelector("#pokeballs");

function makePokeData() {
    var res = document.querySelector(".pokeball")
    res.innerHTML = `
                    <img class="gen" src="./assets/pokeball.png" alt="pokeball">
                    <img class="type1" src="./assets/pokeball.png" alt="pokeball">
                    <img class="type2" src="./assets/pokeball.png" alt="pokeball">
                    <img class="height" src="./assets/pokeball.png" alt="pokeball">
                    <img class="weight" src="./assets/pokeball.png" alt="pokeball">
                    `
    // return res
    // console.log(res);
}

async function getAnswer() {
    try {
        var response = await fetch(`https://pokeapi.co/api/v2/pokemon/` + getRandomInt(809));
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

    var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
    var pokeData = await response.json();
    console.log(pokeData.name);
    console.log(answer.name)

    if (pokeData.name == answer.name) {
        var images = document.querySelectorAll('.pokeball img')
        // images.src ="./assets/masterball.png"
        console.log("you were right")
        images.forEach(image => image.src="./assets/masterball.png")
        // document.querySelector('div.pokeball img').src ="./assets/masterball.png"
    }
    
    // pokeDiv.innerHTML = makePokeData(pokeData) + pokeDiv.innerHTML;
    
}




// answer pokemon
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
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

$(document).ready(function () {
    $("#question").hover(function () {
        helpDiv.innerHTML = makeHelp() + helpDiv.innerHTML;
    }, function () {
        helpDiv.innerHTML = null;
    });
});