let homeScore = document.getElementById('home-score');
let guestScore = document.getElementById('guest-score');
let count = 0
let countGuest = 0

function add1home() {
    count+=1;
    homeScore.textContent = count;
}
function add2home() {
    count+=2;
    homeScore.textContent = count;
}
function add3home() {
    count+=3;
    homeScore.textContent = count;
}
function add1guest() {
    countGuest+=1;
    guestScore.textContent = countGuest;
}
function add2guest() {
    countGuest+=2;
    guestScore.textContent = countGuest;
}
function add3guest() {
    countGuest+=3;
    guestScore.textContent = countGuest;
}

function reset() {
    count = 0;
    countGuest = 0;
    guestScore.textContent = 0;
    homeScore.textContent = 0;
}