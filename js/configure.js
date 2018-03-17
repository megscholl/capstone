"use strict";

let firebase = require("firebase/app"),
    fb = require("./firebaseKey"),
    fbData = fb(); //running the fb file, containing what's inside fb-key

require("firebase/auth");
require("firebase/database");

var config = {
  apiKey: fbData.apiKey,
  authDomain: fbData.authDomain,
  databaseURL: fbData.databaseURL
};


firebase.getFBsettings = function(){
	 console.log("getFBsettings", config);
	 return config;
};

firebase.initializeApp(config);
module.exports = firebase;
