let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let body = document.querySelector("body");
let gameSeq = [];
let userSeq = [];
let hScore = 0;
h2.innerText = "Press any key to start the game";
const ogColor = h3.style.color;
let started = false;
let level = 0;

function gameStart() {
    if (started == false) {
        levelUp()
        started = true;
    }
}
function buttonFlash() {
    let buttonNum = Math.floor(Math.random() * 4 + 1);
    let buttonToFlash = document.querySelector(`#button${buttonNum}`);
    const ogColor = buttonToFlash.style.backgroundColor;
    buttonToFlash.style.backgroundColor = `rgb(255, 255, 255)`
    setTimeout(() => {
        buttonToFlash.style.backgroundColor = ogColor;
    }, 200);
    gameSeq.push(buttonToFlash.id);
}

function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;
    buttonFlash();
}
function buttonFlashOnClick(event) {
    if (started == true) {

        if (event.target.classList.value == "button") {
            let buttonToFlash = event.target;
            const ogColor = buttonToFlash.style.backgroundColor;
            buttonToFlash.style.backgroundColor = `rgb(30, 247, 51)`;
            setTimeout(() => {
                buttonToFlash.style.backgroundColor = ogColor;
            }, 150);
            userSeq.push(buttonToFlash.id);
        }
    }
    else {
        h2.style.color = `rgb(230, 18, 18)`;
        setTimeout(() => (h2.style.color = ogColor), 100);
    }

}
body.addEventListener("keydown", gameStart);
body.addEventListener("click", buttonFlashOnClick);

function seqCheck(event) {

    let index = userSeq.length - 1;
    if (started == true && gameSeq[index] == userSeq[index]) {
        if (gameSeq.length == userSeq.length) {
            setTimeout(() => (levelUp()), 500);
            userSeq = []; //game changer, used to check all userseq
        }
    }

    else if (started == true && event.target.classList.value == "button" && gameSeq[index] != userSeq[index]) {
        body.style.backgroundColor = `rgb(247, 30, 55)`;
        setTimeout(() => (body.style.backgroundColor = `rgb(255, 255, 255)`), 200)
        h1.innerText = `Game over!! Score: ${level - 1}`;
        h1.style.color = `rgb(247, 30, 55)`;
        h2.innerText = "Press any key to restart the game";
        started = false;
        highestScore();
        if (started == false) {
            level = 0;
            gameSeq = [];
            userSeq = [];
        }
    }
    else { }
}
function gameRstart() {
    h1.innerText = "Simon Says Game";
    h1.style.color = `rgb(0, 0, 0)`;
}

function highestScore() {
    if (hScore < (level - 1)) {
        hScore = (level - 1);
        h3.innerText = `Highest Score: ${hScore}`;
    }
}

body.addEventListener("click", seqCheck);
body.addEventListener("keydown", gameRstart);
