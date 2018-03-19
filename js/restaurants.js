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


  let rd;
  let showAll;
  let showRestaurants = document.getElementById("restaurants");

  function loopRestaurants() {
    getRestaurants().then((rd) => {
        for(var i = 0; i < rd.length; i++) {
            console.log("hey restaurants are showing here: ", rd[i].id, rd[i].restaurant, rd[i].url);
            var restaurants = rd[i].restaurant;
            var image = rd[i].url;
            showAll += `<article><img src="${image}" width="200" height="140"><h3>${restaurants}</h3></article>`;
        }
                    showRestaurants.innerHTML = showAll;

    });
}  
loopRestaurants();

  module.exports = {getRestaurants, loopRestaurants};