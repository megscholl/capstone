"use strict";
let $ = require('../lib/node_modules/jquery'),
    indexContainer = document.getElementById("body-container");

console.log("makeReservation file is coming through");


var seeReservation;
function reservationForm() {
    console.log("form will show up in the body-container when this is clicked");
    seeReservation = `hey hey heeey`;
    indexContainer.innerHTML = seeReservation;
}


// function that will render the '#body-container' with the reservation form
$("#makeReservation").click(function() {
    console.log("load the DOM with a reservation - function (renderReservationForm)");
    reservationForm();
});


// module.exports = {reservationForm};