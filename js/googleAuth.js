"use strict";

let firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");
let firebaseKey = require('./firebaseKey');

var provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().signInWithRedirect(provider); //redirect to the google signinpage - recommended for mobile apps

function runLogin() {
// put this inside of a function when the login button is clicked
firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // ...
    }
    // The signed-in user info.
    var user = result.user;
    console.log("user value", user);
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}

  module.exports = runLogin;