"use strict";
let $ = require('../lib/node_modules/jquery');
let googleAuth = require('./googleAuth');


$("#login-btn").click(function() {
    console.log("Login button has been clicked");
});


// FUNCTION PLANNING

/*


// // // // MVP GOALS \\ \\ \\ \\

FUNCTIONS FOR GOOGLE AUTHENTICATION

FUNCTION TO RENDER THE BODY-CONTAINER DIV

AJAX FUNCTION TO 'GET' ESTAURANT INFORMATION // json imported to firebase

A FUNCTION TO 'POST' & 'PATCH' TO FIREBASE

A FUNCTION TO 'DELETE' ITEMS FROM FIREBASE

A FUNCTION TO ALLOW USER TO CHECK-IN


// // // // STRETCH GOALS \\ \\ \\ \\

A FUNCTION TO VIEW ALL RESTAURANTS

A FUNCTION TO VIEW ALL RESERVATIONS

A FUNCTION TO VIEW ARCHIVED / PAST RESERVATIONS

A FUNCTION TO SEND USER A REMINDER

*/