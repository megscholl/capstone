"use strict";

// requires - key, configuration, user, 
let $ = require('../lib/node_modules/jquery'),
    firebase = require('./configure'),
    user = require('./user');


let buildUserObject = (userName, userId, userImage) => {
    let userObject = {
        Name: userName, 
        uid: userId,
        photo: userImage
    };
    return userObject;
};

function addUser(userObject) {
    return $.ajax({
      url: `${firebase.getFBsettings().databaseURL}/users.json`,
      type: 'POST',
      data: JSON.stringify(userObject),
      dataType: 'json'
    }).done((userID) => {
      return userID;
    });
  }
  // POST - Submits data to be processed to a specified resource. Takes one parameter.

  module.exports = {buildUserObject, addUser};