"use strict";
let $ = require('../lib/node_modules/jquery'),
    indexContainer = document.getElementById("body-container"),
    restaurants = require('./restaurants');

console.log("makeReservation file is coming through");



// var formData = {
//     "title": $('#title').val(),
//     "description": $('#description).val()
//   };



var seeReservation;
function reservationForm(rest, reso) {
    return new Promise(function (resolve, reject) {
    // console.log("form will show up in the body-container when this is clicked");

    let resoForm = {
        restaurant: rest ? rest.restaurant : "",
        date: rest ? rest.date : "",
        time: rest ? rest.time : "",
        number: rest ? rest.number : "",
        request : rest ? rest.request : "",
        occasion: rest ? rest.occasion : "",
        formTitle: rest ? `Make reservation` : "Make a new reservation",
        btnText: rest ? "Reserve my table" : "Reserve my table",
        btnId: rest ? "reserve-btn" : "make-new-reso"
    },

    seeReservation = `<form class="contain">
         
    <h4>${resoForm.formTitle}</h4>
    <div class="rounded mx-auto flex-container align-content">

            <div class="form-control">

                    <div class="input-group">
                    Select a Restaurant: <br><br>
                            <select class="form-control col-md-15" id="inputGroupSelect01">
                              <option selected></option>
                              <option id="rest1" value="barcelona">Barcelona Wine Bar Edgehill</option>
                              <option id="rest2" value="bricktops">BrickTop's West End</option>
                              <option id="rest3" value="caviarbananas">Caviar &amp; Bananas</option>
                              <option id="rest4" value="husk">Husk</option>
                              <option id="rest5" value="merchants">Merchants</option>
                              <option id="rest6" value="pm">PM</option>
                              <option id="rest7" value="sambuca">Sambuca</option>
                              <option id="rest8" value="smilingelephant">Smiling Elephant</option>
                              <option id="rest9" value="valentinos">Valentino's</option>
                              <option id="rest10" value="watermark">Watermark</option>
                            </select>
                          </div>
                <!-- <div class="container"> -->
                        <div class="row">
                            <div class="col-md-7">
                                Date: <input type="date" class="form-control">
                            </div>
                            <div class="col-md-5">
                                Time: <input type="time" class="form-control" id="myTime">
                            </div>
                        </div>
                        <br>
                        <div class="row">
                            <div class="col-md-10">
                                How many people in your party?: <input type="number" class="form-control" id="partyNumber">
                            </div>
                        </div>
                        <br>
                        <div class="row">
                            <div class="col-md-10">
                                Any requests?: <select class="custom-select" id="inputGroupSelect01">
                                        <option selected></option>
                                        <option id="req1" value="booth">Booth</option>
                                        <option id="req2" value="table">Table</option>
                                        <option id="req3" value="patio">Patio</option>
                                        <option id="req4" value="barbooth">Bar booth</option>
                                        <option id="req5" value="handicap">Wheel Chair Accessible</option>
                                      </select>
                            </div>
                        </div>
                        <br>
                        <div class="row">
                            <div class="col-md-10">
                                Occasion: <select class="custom-select" id="inputGroupSelect01">
                                        <option selected></option>
                                        <option id="occ1" value="birthday">Birthday</option>
                                        <option id="occ2" value="anniversary">Anniversary</option>
                                        <option id="occ3" value="business">Business meeting</option>
                                        <option id="occ4" value="other">Other special occassion</option>
                                      </select>
                            </div>
                        </div>
                    <!-- </div> -->
                    <br>
                      <button type="button" class="btn btn-primary" id="${resoForm.btnId}">${resoForm.btnText}</button>
            </div>
            <!-- </div> -->
          
         </div>
    </div>

</form>`;
    resolve(seeReservation);
    indexContainer.innerHTML = seeReservation;
});
}

// function that will render the '#body-container' with the reservation form
$("#makeReservation").click(function() {
    console.log("load the DOM with a reservation - function (renderReservationForm)");
    reservationForm();
});

// module.exports = {callRestaurants};