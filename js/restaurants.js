"use strict";

let $ = require('jquery'),
    firebase = require("./configure"),
    reservations = require('./makeReservation');

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
  let showAll;
  // let selectOne;
  let showRestaurants = document.getElementById("restaurants");


  function loopRestaurants() {
    getRestaurants().then((rd) => {
        for(var i = 0; i < rd.length; i++) {
            var restaurants = rd[i].restaurant;
            var image = rd[i].url;
            var id = rd[i].id;
            showAll += `<li class="restList"><img src="${image}" width="200" height="140" style="float: left"><h3>${restaurants}</h3>hours hours hours<br><a href="#">Make a reservation now</a></li><br><br><br><br>`;

          }
              showRestaurants.innerHTML = showAll;

    });
}  
loopRestaurants();

  module.exports = {getRestaurants, loopRestaurants};
