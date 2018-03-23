"use strict";

          ///////////////////////////////////////////////////
          //////////// THIS JS FILE IS COMPLETE /////////////
          ///////////////// REFERENCE ONLY //////////////////
          ///////////////////////////////////////////////////



let $ = require('jquery'),
    firebase = require("./configure");

let restaurantData = [];

function getRestaurants(user) {
    return $.ajax({
      url: `${firebase.getFBsettings().databaseURL}/restaurants.json`,
      method: 'GET'
    }).done((restaurantData) => {
        // console.log("getting restaurant data: ", restaurantData);
      return restaurantData;
    });
  }


  let rd;
  let showAll = "";
  // let selectOne;
  let showRestaurants = document.getElementById("restaurants");


function loopRestaurants() {
    getRestaurants().then((rd) => {
      // console.log("loop reso rd", rd, rd.length);
        for(var i = 0; i < rd.length; i++) {
            var restaurants = rd[i].restaurant;
            var image = rd[i].url;
            var id = rd[i].id;
            showAll += `
            <li>
            <div class="collapsible-header"><img src="${image}" width="100" height="80" style="float: left"><h5>${restaurants}</h5></div>
            <div class="collapsible-body"><span>Just let this happen. We just let this flow right out of our minds. Life is too short to be alone, too precious. Share it with a friend. Working it up and down, back and forth. We'll put all the little clouds in and let them dance around and have fun. Just relax and let it flow. That easy.</span><br><br><br></div>
            </li>`;
          }
              showRestaurants.innerHTML = showAll;
    });
}  



let selectOne;
let selectRestaurant = document.getElementById("select-restaurant");
function restaurantOptions() {
    getRestaurants().then((select) => {
    for(var j = 0; j < select.length; j++) {
      var selectRest = select[j].restaurant;
      var rID = select[j].id;
    //   console.log("selections for restaurants: ", selectRest, rID);
      selectOne += `<option id="${rID}" value="${selectRest}">${selectRest}</option>`;
    }
    selectRestaurant.innerHTML = selectOne;
  });
}
restaurantOptions();



  module.exports = {getRestaurants, loopRestaurants};
