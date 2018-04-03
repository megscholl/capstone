"use strict";



let $ = require('../lib/node_modules/jquery'),
    login = require('./user'),
    configure = require('./configure'), 
    firebaseKey = require('./firebaseKey'),
    interactions = require('./interaction'),
    restaurants = require('./restaurants'),
    upcomingResos = require('./userResos');

    
    // login.logOut();
    restaurants.loopRestaurants();
    

var userID = "";

function checkUserFB(uid){
  getFBDetails(uid)
  .then((result) => {
      let data = Object.values(result);
       if (data.length === 0){
          interactions.addUser(interactions.buildUserObj(result.user.uid))
           .then((result) => {
           });
       }
  });
}

$("#login-btn").click(function() {
    // console.log("Login button has been clicked");
    login.logInGoogle()
    .then((result) => {
// console.log("result: ", result);

      getFBDetails(result.user.uid).then((kickback) => {
        // console.log("kickback: ", kickback);
        let kickbackUser = Object.values(kickback);
        // console.log("kickbackUser: ", kickbackUser);

        if(kickbackUser.length === 0) {
             interactions.addUser(interactions.buildUserObject(result.user.displayName, result.user.uid));
             login.setUser(result.user.uid);
             userID = result.user.uid;
             //   console.log("login setUser: ", userID);
            //  $("#login-btn").addClass("d-none");
        } 
        else{
          // console.log("kickbackUser not 0");
        }
      });

      });
    });

    $(document).on("click", "#logout", ()=> {
        // console.log("logout clicked");
        login.logOut();
        // console.log("logged out?", userID);
        $("#login-btn").removeClass("d-none");
        $("#logout").addClass("d-none");
      });


      function getFBDetails(user){
        return $.ajax({
            url: `${configure.getFBsettings().databaseURL}/users.json?orderBy="uid"&equalTo="${user}"`
         }).done((resolve) => {
            return resolve;
         }).fail((error) => {
            return error;
         });
      }
// FUNCTION PLANNING

/*


// // // // MVP GOALS \\ \\ \\ \\

X FUNCTIONS FOR GOOGLE AUTHENTICATION

X FUNCTION TO RENDER THE BODY-CONTAINER DIV

X AJAX FUNCTION TO 'GET' ESTAURANT INFORMATION // json imported to firebase

X A FUNCTION TO 'POST' & 'PATCH' TO FIREBASE

X A FUNCTION TO 'DELETE' ITEMS FROM FIREBASE

X A FUNCTION TO ALLOW USER TO CHECK-IN
*/