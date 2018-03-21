"use strict";

// requires - key, configuration, user, 
let $ = require('../lib/node_modules/jquery'),
    firebase = require('./configure'),
    interaction= require('./interaction'),
    user = require('./user');



//////////////////////////////
// BUILD A USER INTO FIREBASE
//////////////////////////////

// USER OBJECT FOR FIREBASE 
let buildUserObject = (userName, userId, userImage) => {
    let userObject = {
        Name: userName, 
        uid: userId,
        photo: userImage
    };
    return userObject;
};


// ADDS USER TO FIREBASE
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
/////////////////////////////////////////////////////





///////////////////////////////
// ADD RESERVATION TO FIREBASE
///////////////////////////////

//BUILDS RESERVATION OBJECT
  function buildResoObj() {
    let resoObj = {
    restaurant: $("#select-restaurant").val(),
    date: $("#select-date").val(),
    time: $("#select-time").val(),
    people: $("#select-people").val(),
    request: $("#select-request").val(),
    occasion: $("#select-occasion").val(),
    status: $("#status").val(),
    uid: user.getUser()
  };
  return resoObj;
 }

 // ADDS RESERVATION TO FIREBASE
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


//CLICK RESERVE BUTTON TO SEND RESERVATION TO FIREBASE
$("#Reserve-btn").click(function() {
  let resObj = buildResoObj();
    addReso(resObj).then((resoID) => {
      console.log("the reserve table has been clicked", resObj);

    });
});

///////////////////////////////////////////////////////




//////////////////////////////////
// SET CHECKIN STATUS IN FIREBASE
//////////////////////////////////

function setStatus(statusObject) {
        return $.ajax({
          url: `${firebase.getFBsettings().databaseURL}/reservations.json?orderBy="uid"&equalTo="${user.getUser()}"`,
          type: 'PATCH',
          data: JSON.stringify(statusObject),
          dataType: 'json'
        }).done((userID) => {
          return userID;
        });
      }

function checkStatus() {
  //change status of users' reservation to true
}

$("#checkIn").click(function() {
  console.log("CHECK IN BUTTON CLICKED");
  checkStatus();
});

///////////////////////////////////////////////////////




////////////////////////////////
//GET RESERVATION FROM FIREBASE
////////////////////////////////

var resoData = [];
function getReso(reso) {
  // console.log("AJAX", user.getUser());
  return $.ajax({
          url: `${firebase.getFBsettings().databaseURL}/reservations.json?orderBy="uid"&equalTo="${user.getUser()}"`,
        }).done((resoData) => {
          console.log("resoData", resoData);
          return resoData;
        }).fail((error) => {
          return error;
        });
      }
      
function showReso() {
  getReso(event).then(function(rData) {
    let keys = Object.keys(rData);
    let listReservations = [];
    keys.forEach(function(resos){
      // console.log("event: ", event.currentTarget.response);

      var listReservations = event.currentTarget.responseText;
      var userResos = listReservations.restaurant;
      console.log("list Reservation: ", userResos);
    });
    // for(var a = 0; a < rData.length; a++){
    //   console.log("RDATA SHOWING::: ", rData[a]);
    // }
  });
}


var seeResos;
let seeMore = document.getElementById("upcomingReservations");

$("#userResos").click(function() {
  console.log("merp");

    seeResos = `
      <h4>Upcoming reservations</h4>

      show Reso: ${showReso()};
      <br>
    
    `;
    seeMore.innerHTML = seeResos;
});

//////////////////////////////////////////////////////////////








///////////////////////////////
// EDIT RESERVATION IN FIREBASE
///////////////////////////////

  function editReso(resoFormObj, resoId) {
    return $.ajax({
      url: `${firebase.getFBsettings().databaseURL}/reservations.json?orderBy="uid"&equalTo="${user.getUser()}"`,
      type: 'PUT',
      data: JSON.stringify(resoFormObj)
    }).done((data) => {
      return data;
    });
  }
////////////////////////////////


////////////////////////////////////
// DELETE RESERVATION FROM FIREBASE
////////////////////////////////////
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

///////////////////////////////////////////////////////





  module.exports = {buildUserObject, addUser, addReso, deleteReso, showReso, editReso};