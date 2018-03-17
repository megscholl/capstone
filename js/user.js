"use strict";
let firebase = require("./configure"),
	provider = new firebase.auth.GoogleAuthProvider(),
	currentUser = null;


function logInGoogle() {
    return firebase.auth().signInWithPopup(provider);
}

function logOut(){
    return firebase.auth().signOut();
}

function setUser(val){
	currentUser = val;
}

function getUser(){
    return currentUser;
}

firebase.auth().onAuthStateChanged(function(user){
	console.log("onAuthStateChanged", user);
	if (user){
        currentUser = user.uid;
        console.log("User has logged into Reso");
	}else{
		currentUser = null;
		console.log("No usered logged into Reso");
	}
});

module.exports = {logInGoogle, logOut, setUser, getUser};