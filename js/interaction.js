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
    status: false,
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

function setStatus(resoID) {
        return $.ajax({
          url: `${firebase.getFBsettings().databaseURL}/reservations/${resoID}.json`,
          type: 'PATCH',
          data: JSON.stringify(resoID),
          dataType: 'json'
        }).done((userID) => {
          return userID;
        });
      }

function checkStatus() {
  console.log("checking in checkstatus function");
}


$(document).on("click", ".check-in", function() {
  let checkintoReso = $(this).attr("id");
  console.log("check in", checkintoReso);
  setStatus(checkintoReso)
  .then(() => {
    checkStatus();
    console.log("CHECK IN BUTTON CLICKED");
  });
});

///////////////////////////////////////////////////////




////////////////////////////////
//GET RESERVATION FROM FIREBASE
////////////////////////////////

var resoData = [];
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
let listReservations;

function showReso() {
  getReso(event).then(function(rData) {
    // console.log("rData", rData);
    listResos(rData);

   
  });
}
   // THIS CODE CONVERTs THE FB RESERVATION OBJECT INTO THEIR OWN ARRAYS
function listResos(rData) {
  console.log("rData: ", rData);
  // keys = Object.entries(rData).map(e => Object.assign(e[1], { key: e[0] }));
  // console.log("keys: ", keys);


  let seeResos = "";

  for(let reservation in rData){
    // console.log("restaurants selected in firebase reservations: ", keys[a].restaurant);

      let rPlace = rData[reservation].restaurant;
      let rDate = rData[reservation].date;
      let rTime = rData[reservation].time;
      let rNum = rData[reservation].people;
      let rOcc = rData[reservation].occasion;
      let uglyID = reservation;

// console.log("User's reservation: ", "place: ", rPlace, "date: ", rDate, "time: ", rTime, "party of ", rNum, "occasion: ", rOcc);


seeResos += `

<div class="col s4">
  <div class="card small">
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
        <a id="${uglyID}" class="check-in">Check in</a><a id="${uglyID}">Edit</a> <a class="delete-reso" id="${uglyID}">Cancel</a>
      </div>
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
      url: `${firebase.getFBsettings().databaseURL}/reservations/${resoFormObj}.json`,
      type: 'PUT',
      data: JSON.stringify(resoFormObj)
    }).done((data) => {
      return data;
    });
  }

  $("#showcase").on("click", "#editEso", function() {
    console.log("EDIT BUTTON CLICKED");
    // checkStatus();
  });
////////////////////////////////



////////////////////////////////////
// DELETE RESERVATION FROM FIREBASE
////////////////////////////////////
function deleteReso(resoID) {
  return $.ajax({
    url: `${firebase.getFBsettings().databaseURL}/reservations/${resoID}.json`,
    type: 'DELETE',
    data: JSON.stringify(resoID),
    dataType: 'json'
  }).done((data) => {
    return data;
  });
}

// $(document).on("click", "#cancel", function () {
//   let resoID = $(this).data("cancel");
//   deleteReso(resoID)
//   .then(() => {
//     showReso();
//   });
// });

$(document).on("click", ".delete-reso", function() {
  let cancelReso = $(this).attr("id");
  console.log("cancel", cancelReso);
  deleteReso(cancelReso)
  .then(() => {
    showReso();
    console.log("CANCEL IN BUTTON CLICKED");
  });
});

///////////////////////////////////////////////////////





  module.exports = {buildUserObject, addUser, addReso, deleteReso, showReso, editReso};