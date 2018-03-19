"use strict";
let $ = require('../lib/node_modules/jquery'),
    login = require('./user'),
    configure = require('./configure'), 
    firebaseKey = require('./firebaseKey'),
    makeReservation = require('./makeReservation'),
    upcomingResos = require('./userResos'),
    postUID = require('./postUsertoFB');

    login.logOut();

$("#login-btn").click(function() {
    // console.log("Login button has been clicked");
    login.logInGoogle()
    .then((result) => {
      console.log("result from login -", result.user.uid);
      postUID.addUser(postUID.buildUserObject(result.user.displayName, result.user.uid));
    //   $("#auth-btn").addClass("is-hidden");
    //   $("#logout").removeClass("is-hidden");
    //   loadSongsToDOM();
    });
});



let showRestaurants = document.getElementById("restaurants");

let showAll;
function showAllRestaurants() {
    console.log("showing all restaurants");

    showAll = `
    RESTAURANTS WILL SHOW HERE
    `;
    showRestaurants.innerHTML = showAll;
}
showAllRestaurants();



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