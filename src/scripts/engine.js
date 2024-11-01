
const emojis = [
    "<img alt='javascript' src='./src/data/poke_1.gif'>",
    "<img alt='javascript' src='./src/data/poke_2.gif'>",
    "<img alt='javascript' src='./src/data/poke_3.gif'>",
    "<img alt='javascript' src='./src/data/poke_4.gif'>",
    "<img alt='javascript' src='./src/data/poke_5.gif'>",
    "<img alt='javascript' src='./src/data/poke_6.gif'>",
    "<img alt='javascript' src='./src/data/poke_7.gif'>",
    "<img alt='javascript' src='./src/data/poke_8.gif'>",
    "<img alt='javascript' src='./src/data/poke_1.gif'>",
    "<img alt='javascript' src='./src/data/poke_2.gif'>",
    "<img alt='javascript' src='./src/data/poke_3.gif'>",
    "<img alt='javascript' src='./src/data/poke_4.gif'>",
    "<img alt='javascript' src='./src/data/poke_5.gif'>",
    "<img alt='javascript' src='./src/data/poke_6.gif'>",
    "<img alt='javascript' src='./src/data/poke_7.gif'>",
    "<img alt='javascript' src='./src/data/poke_8.gif'>",
];

let openCards = [];

let shuffleEmojis = emojis.sort(() =>(Math.random() > 0.5) ? 2 : -1);

for(let i=0; i < emojis.length; i++){
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function playSound(audioName) {
    let audio = new Audio(`./src/audio/${audioName}.m4a`);
    audio.volume = 0.5;
    audio.play();
  }

function handleClick(){
    if(openCards.length < 2){
        this.classList.add('boxOpen');
        openCards.push(this);
    }

    if(openCards.length === 2){
        setTimeout(checkMatch, 500);
    }
    playSound("flip");
}

function checkMatch(){

    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
        playSound("flipback");
    }

    openCards = [];
    
    if(document.querySelectorAll(".boxMatch").length === emojis.length){
        alert("Você venceu!")
    }

}