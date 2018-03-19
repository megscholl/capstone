"use strict";

let $ = require('jquery'),
    firebase = require("./configure");

function getRestaurants(user) {
    return $.ajax({
      url: `${firebase.getFBsettings().databaseURL}/restaurants.json`,
      method: 'GET'
    }).done((restaurantData) => {
        console.log("getting restaurant data: ", restaurantData);
      return restaurantData;
    });
  }

  module.exports = {getRestaurants};