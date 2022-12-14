let homeScoreEl = document.getElementById("homeScore")
let guestScoreEl = document.getElementById("guestScore")
let countHome = 0
let countGuest = 0

function addOnePointHome() {
    countHome += 1
    homeScoreEl.textContent = countHome
    highlight()
}

function addTwoPointHome() {
    countHome += 2
    homeScoreEl.textContent = countHome
    highlight()
}

function addThreePointHome() {
    countHome += 3
    homeScoreEl.textContent = countHome
    highlight()
}

function addOnePointGuest() {
    countGuest += 1
    guestScoreEl.textContent = countGuest
    highlight()
}

function addTwoPointGuest() {
    countGuest += 2
    guestScoreEl.textContent = countGuest
    highlight()
}

function addThreePointGuest() {
    countGuest += 3
    guestScoreEl.textContent = countGuest
    highlight()
}

function resetCounters() {
    countHome = 0
    countGuest = 0
    homeScoreEl.textContent = countHome
    guestScoreEl.textContent = countGuest
    highlight()
}

function highlight() {
    if (countHome > countGuest) {
    document.getElementById("homeScore").style.color = "#04F13D";
    document.getElementById("guestScore").style.color = "#D45353";}
    else if (countGuest > countHome) {
    document.getElementById("guestScore").style.color = "#04F13D";
    document.getElementById("homeScore").style.color = "#D45353";}
    else {
    document.getElementById("homeScore").style.color = "#D45353";
    document.getElementById("guestScore").style.color = "#D45353";}
}