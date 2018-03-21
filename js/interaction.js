"use strict";

// requires - key, configuration, user, 
let $ = require('../lib/node_modules/jquery'),
    firebase = require('./configure'),
    interaction= require('./interaction'),
    user = require('./user'),
    dbRef = firebase.database().ref().child('reservations');



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
var seeResos = "";
let seeMore = document.getElementById("showcase");

// var rStatus;


function getReso(reso) {
  // console.log("AJAX", user.getUser());
  return $.ajax({
          url: `${firebase.getFBsettings().databaseURL}/reservations.json?orderBy="uid"&equalTo="${user.getUser()}"`,
        }).done((resoData) => {
          // console.log("resoData", resoData);
          return resoData;
        }).fail((error) => {
          return error;
        });
      }
      


let keys;
var a;
let listReservations;

function showReso() {
  getReso(event).then(function(rData) {
    // console.log("rData", rData);
    listResos(rData);

   
  });
}

function listResos(rData) {
  keys = Object.entries(rData).map(e => Object.assign(e[1], { key: e[0] }));    // THIS CODE CONVERTs THE FB RESERVATION OBJECT INTO THEIR OWN ARRAYS
  // console.log("keys: ", keys);

  for(a = 0; a < 3; a++){
    // console.log("restaurants selected in firebase reservations: ", keys[a].restaurant);

      let rPlace = keys[a].restaurant;
      let rDate = keys[a].date;
      let rTime = keys[a].time;
      let rNum = keys[a].people;
      let rOcc = keys[a].occasion;
  // var rStatus = keys[a].status;
// console.log("User's reservation: ", "place: ", rPlace, "date: ", rDate, "time: ", rTime, "party of ", rNum, "occasion: ", rOcc);


seeResos += `


  <div class="card horizontal small">
    <div class="card-image">
      <img src="images/food1.jpg">
    </div>
    <div class="card-stacked">
      <div class="card-content">
        <h5>${rPlace}</h5>
        <ul>
          <li>Reservation</li>
          <li>Date: ${rDate}</li>
          <li>Time: ${rTime}</li>
          <li>Party of ${rNum}</li>
          <li>Occasion: ${rOcc}</li>
        </ul>
      </div>
      <div class="card-action">
        <a id="checkIn">Check in</a> &#124; &nbsp;&nbsp;&nbsp;&nbsp; <a id="editReso">Edit</a> &#124; &nbsp;&nbsp;&nbsp;&nbsp; <a id="cancel">Cancel</a>
      </div>
    </div>
  </div>

  `;
  }
  seeMore.innerHTML = seeResos;
}

$("#userResos").click(function() {
  console.log("merp");
  showReso();
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