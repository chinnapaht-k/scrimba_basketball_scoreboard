let countHome = 0;
let countGuest = 0;

let homeEl = document.getElementById("home_count");
let guestEl = document.getElementById("guest_count");

homeEl.textContent = countHome
guestEl.textContent = countGuest


function guestPlusOne() {
    countGuest += 1;
    guestEl.textContent = countGuest

}

function homePlusOne() {
    countHome += 1;
    homeEl.textContent = countHome

}


function guestPlusTwo() {
    countGuest += 2;
    guestEl.textContent = countGuest

}

function homePlusTwo() {
    countHome += 2;
    homeEl.textContent = countHome

}

function guestPlusThree() {
    countGuest += 3;
    guestEl.textContent = countGuest

}

function homePlusThree() {
    countHome += 3;
    homeEl.textContent = countHome

}

function reset() {
    countHome = 0;
    countGuest = 0;
    homeEl.textContent = countHome
    guestEl.textContent = countGuest
}