"use strict";

let $ = require('jquery'),
    firebase = require("./configure");

let restaurantData = [];

function getRestaurants(user) {
    return $.ajax({
      url: `${firebase.getFBsettings().databaseURL}/restaurants.json`,
      method: 'GET'
    }).done((restaurantData) => {
        console.log("getting restaurant data: ", restaurantData);
      return restaurantData;
    });
  }

  function loopRestaurants() {
    getRestaurants().then((rd) => {
        for(var i = 0; i < rd.length; i++) {
            console.log("hey restaurants are showing here: ", rd[i].id, rd[i].restaurant);
        }
    });
}
loopRestaurants();

  module.exports = {getRestaurants, loopRestaurants};