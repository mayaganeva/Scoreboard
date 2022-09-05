let scoreHome = document.getElementById("home");
let scoreGuest = document.getElementById("guest");
let sumHome = 0;
let sumGuest =0;

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