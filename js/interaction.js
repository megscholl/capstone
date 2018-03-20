"use strict";

// requires - key, configuration, user, 
let $ = require('../lib/node_modules/jquery'),
    firebase = require('./configure'),
    interaction= require('./interaction'),
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


  function buildResoObj() {
    let resoObj = {
    restaurant: $("#select-restaurant").val(),
    date: $("#select-date").val(),
    time: $("#select-time").val(),
    people: $("#select-people").val(),
    request: $("#select-request").val(),
    occasion: $("#select-occasion").val(),
    uid: user.getUser()
  };
  return resoObj;
 }

 
 function addReso(resoFormObj) {
  return $.ajax({
    url: `${firebase.getFBsettings().databaseURL}/reservations.json`,
    type: 'POST',
    data: JSON.stringify(resoFormObj),
    dataType: 'json'
  }).done((resoID) => {
    return resoID;
  });
}

 let main = document.getElementById("body-container");

 $(document).on("click", "#Reserve-btn", function() {
     let resoObj = buildResoObj();
     addReso(resoObj)
     .then((resoID) =>{
       console.log("the reserve table has been clicked", resoObj);
     //   loadSongsToDOM();
     });
    });


    function deleteReso(resoID) {
    return $.ajax({
      url: `${firebase.getFBsettings().databaseURL}/reservations.json`,
      type: 'DELETE',
      data: JSON.stringify(resoID),
      dataType: 'json'
    }).done((data) => {
      return data;
    });
  }

  $(document).on("click", "delete-reso", function() {
    let resoObj = buildResoObj();
    deleteReso(resoObj)
    .then((resoID) =>{
      console.log("reso has been deleted", resoObj);
      // 
    });
  });

  module.exports = {buildUserObject, addUser, addReso, deleteReso};