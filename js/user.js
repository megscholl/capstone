"use strict";


          ///////////////////////////////////////////////////
          //////////// THIS JS FILE IS COMPLETE /////////////
          ///////////////// REFERENCE ONLY //////////////////
		  ///////////////////////////////////////////////////
		  

		  
let firebase = require("./configure"),
	provider = new firebase.auth.GoogleAuthProvider(),
	currentUser = null;


	firebase.auth().onAuthStateChanged(function(user){
		// console.log("onAuthStateChanged", user);
		if (user){
			currentUser = user.uid;
			// console.log("User has logged into Reso");
		}else{
			currentUser = null;
			// console.log("No usered logged into Reso");
		}
	});

function logInGoogle() {
	// console.log("log in, ", firebase.auth());
	return firebase.auth().signInWithPopup(provider);
}

function logOut(){
    return firebase.auth().signOut();
}

function setUser(val){
	currentUser = val;
}

function getUser(){
	// console.log("current user: ", currentUser);
    return currentUser;
}


module.exports = {logInGoogle, logOut, setUser, getUser};