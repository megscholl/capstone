"use strict";
let $ = require('../lib/node_modules/jquery'),
    indexContainer = document.getElementById("body-container");

console.log("makeReservation file is coming through");


var seeReservation;
function reservationForm() {
    console.log("form will show up in the body-container when this is clicked");
    seeReservation = `<form>
         
    <h4>Make a reservation</h4>
    <div class="rounded mx-auto flex-container align-content">

            <div class="form-control">

                    <div class="input-group mb-4">
                            <select class="centered custom-select" id="inputGroupSelect01">
                              <option selected>Select a Nashville Restaurant</option>
                              <option id="1" value="barcelona">Barcelona Wine Bar Edgehill</option>
                              <option id="2" value="bricktops">BrickTop's West End</option>
                              <option id="3" value="caviarbananas">Caviar &amp; Bananas</option>
                              <option id="4" value="husk">Husk</option>
                              <option id="5" value="merchants">Merchants</option>
                              <option id="6" value="pm">PM</option>
                              <option id="7" value="sambuca">Sambuca</option>
                              <option id="8" value="smilingelephant">Smiling Elephant</option>
                              <option id="9" value="valentinos">Valentino's</option>
                              <option id="10" value="watermark">Watermark</option>
                            </select>
                          </div>
                <!-- <div class="container"> -->
                        <div class="row">
                            <div class="col-md-7">
                                Date: <input type="date" class="form-control">
                            </div>
                            <div class="col-md-5">
                                Time: <input type="time" class="form-control" id="myTime"> <!--document.getElementById("myTime").defaultValue = "18:00";-->
                            </div>
                        </div>
                        <br>
                        <div class="row">
                            <div class="col-md-10">
                                How many people in your party?: <input type="number"class="form-control">
                            </div>
                        </div>
                        <br>
                        <div class="row">
                            <div class="col-md-10">
                                Any requests?: <select class="custom-select" id="inputGroupSelect01">
                                        <option selected></option>
                                        <option id="1" value="booth">Booth</option>
                                        <option id="2" value="table">Table</option>
                                        <option id="3" value="patio">Patio</option>
                                        <option id="4" value="barbooth">Bar booth</option>
                                        <option id="5" value="handicap">Wheel Chair Accessible</option>
                                      </select>
                            </div>
                        </div>
                        <br>
                        <div class="row">
                            <div class="col-md-10">
                                Occassion: <select class="custom-select" id="inputGroupSelect01">
                                        <option selected></option>
                                        <option id="1" value="birthday">Birthday</option>
                                        <option id="2" value="anniversary">Anniversary</option>
                                        <option id="3" value="business">Business meeting</option>
                                        <option id="4" value="other">Other special occassion</option>
                                      </select>
                            </div>
                        </div>
                    <!-- </div> -->
                    <br>
                      <button type="button" class="btn btn-primary" id="reserve-btn">Reserve my table</button>
            </div>
            <!-- </div> -->
          
         </div>
    </div>

</form>`;
    indexContainer.innerHTML = seeReservation;
}


// function that will render the '#body-container' with the reservation form
$("#makeReservation").click(function() {
    console.log("load the DOM with a reservation - function (renderReservationForm)");
    reservationForm();
});