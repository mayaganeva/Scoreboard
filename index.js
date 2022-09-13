// Variables

let scoreHome = document.getElementById("home");
let scoreGuest = document.getElementById("guest");
let sumHome = 0;
let sumGuest = 0;

//Home Score

function plus1H() {
    sumHome += 1;
    scoreHome.textContent = sumHome;
}

function plus2H() {
    sumHome += 2;
    scoreHome.textContent = sumHome;
}

function plus3H() {
    sumHome += 3;
    scoreHome.textContent = sumHome;
}

//Guest Score

function plus1G() {
    sumGuest += 1;
    scoreGuest.textContent = sumGuest;
}

function plus2G() {
    sumGuest += 2;
    scoreGuest.textContent = sumGuest;
}

function plus3G() {
    sumGuest += 3;
    scoreGuest.textContent = sumGuest;
}

function winner() {
    if (sumHome > sumGuest) {
        scoreHome.classList.add("winner");
        scoreGuest.classList.remove("winner");
    } else if (sumHome < sumGuest) {
        scoreGuest.classList.add("winner");
        scoreHome.classList.remove("winner");
    } else {
        scoreHome.classList.remove("winner");
        scoreGuest.classList.remove("winner");
    }
}

function newGame() {
    sumHome = 0;
    sumGuest = 0;
    scoreHome.textContent = 0;
    scoreGuest.textContent = 0;
}


// Mobile viewport height fix

let vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty('--vh', `${vh}px`);