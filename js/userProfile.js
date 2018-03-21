"use strict";

let $ = require('../lib/node_modules/jquery'),
firebase = require('./configure'),
    fb = require('./interaction'),
    user = require('./user');



    

// console.log("user logged in profile");

// let userData = [];

// function getFBUser(fbUser) {
//     return $.ajax({
//       url: `${firebase.getFBsettings().databaseURL}/users.jsonn?orderBy="uid"&equalTo="${user.getUser()}"`,
//       method: 'GET'
//     }).done((userData) => {
//         console.log("user Data", userData);
//       return userData;
//     });
//   }

// console.log("fb user data", getFBUser());




// let display;
// let showUserName;
// let showUpcoming = document.getElementById("upcomingReservations");

// function displayProfile() {
//     getFBUser().then((display) => {
//         for(var m = 0; m < display.length; m++) {
//             console.log("user information: ", display);
//             showUserName = `USER INFORMATION ${display[m]}`;
//         }
//         showUpcoming.innerHTML = showUserName;
//     });
// }

// module.exports = {getFBUser};

