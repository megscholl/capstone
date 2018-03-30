"use strict";



let $ = require('../lib/node_modules/jquery'),
    user = require('./userProfile'),
    login = require('./user'),
    configure = require('./configure'), 
    firebaseKey = require('./firebaseKey'),
    interactions = require('./interaction'),
    restaurants = require('./restaurants'),
    upcomingResos = require('./userResos');

    
    // login.logOut();
    restaurants.loopRestaurants();
    

var userID = "";


$("#login-btn").click(function() {
    // console.log("Login button has been clicked");
    login.logInGoogle()
    .then((result) => {
    //   console.log("result from login -", result.user.uid);
      interactions.addUser(interactions.buildUserObject(result.user.displayName, result.user.uid, result.user.photoURL));
      login.setUser(result.user.uid);
      userID = result.user.uid;
      console.log("login setUser: ", userID);
          $("#login-btn").addClass("d-none");
          $("#userPic").removeClass("d-none").html(`<img src="${result.user.photoURL}" alt="${result.user.displayName} photo from Google" class="profPic rounded-circle">`);
          console.log("login complete!");
      });
    });

    $(document).on("click", "#logout", ()=> {
        // console.log("logout clicked");
        login.logOut();
        console.log("logged out?", userID);
        $("#userPic").addClass("d-none");
        $("#login-btn").removeClass("d-none");
        $("#logout").addClass("d-none");
        $("#secondaryLogin").removeClass("d-none");
      });



// FUNCTION PLANNING

/*


// // // // MVP GOALS \\ \\ \\ \\

X FUNCTIONS FOR GOOGLE AUTHENTICATION

X FUNCTION TO RENDER THE BODY-CONTAINER DIV

X AJAX FUNCTION TO 'GET' ESTAURANT INFORMATION // json imported to firebase

* A FUNCTION TO 'POST' & 'PATCH' TO FIREBASE

X A FUNCTION TO 'DELETE' ITEMS FROM FIREBASE

X A FUNCTION TO ALLOW USER TO CHECK-IN


// // // // STRETCH GOALS \\ \\ \\ \\

A FUNCTION TO VIEW ALL RESTAURANTS

A FUNCTION TO VIEW ALL RESERVATIONS

A FUNCTION TO VIEW ARCHIVED / PAST RESERVATIONS

A FUNCTION TO SEND USER A REMINDER

*/