"use strict";

let $ = require('../lib/node_modules/jquery'),
    firebase = require('./configure'),
    interaction= require('./interaction'),
    user = require('./user');

console.log("userResos are showing here");



// function to show any upcoming reservations that the user has
// for loop, show only the next 3 reservations

//if user has >=1 reservations in firebase, load the div=upcomingReservations

// let showRes = document.getElementById("upcomingReservations");

// function showUserResos() {
//     // console.log("USER RESERVATIONS");
//     interaction.getReso()
//     .then((userRes) => {
//         // console.log("user reservations");
//         // if(uid === uid) {
//             // SHOW UID'S 3 UPCOMING RESERVATIONS IN 'showRes'
//         // }else {
//             // console.log("user does not have any reservations");
//             // OPTION TO MAKE A RESERVATION
//         // }
//         // showRes += `upcoming user reservations will show up here`;
//     });
// }

// module.exports = {showUserResos};