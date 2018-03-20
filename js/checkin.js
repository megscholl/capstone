"use strict";

let $ = require('../lib/node_modules/jquery'),
    indexContainer = document.getElementById("body-container"),
    restaurants = require('./restaurants');



    // console.log("checkin js is coming through");


    let renderCheckIn = document.getElementById("body-container");
    let showCheckIn;
    function renderCheckInForm() {

        showCheckIn = `
        
            <h4>Check in to your reservation</h4>
        
        `;

        renderCheckIn.innerHTML = showCheckIn;
    }



    $("#checkIn").click(function() {
        // console.log("load the DOM to check in - function (renderCheckInForm)");
        renderCheckInForm();
    });