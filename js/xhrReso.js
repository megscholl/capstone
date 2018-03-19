"use strict";

/* 
BELOW ARE THE XHR FUNCTIONS TO REFERENCE FOR:
            POST RESO TO FB
            DELETE RESO FROM FB
            GET RESOS FROM FB
            EDIT RESOS                         */


// function addSong(songFormObj) {
//     return $.ajax({
//       url: `${firebase.getFBsettings().databaseURL}/songs.json`,
//       type: 'POST',
//       data: JSON.stringify(songFormObj),
//       dataType: 'json'
//     }).done((songID) => {
//       return songID;
//     });
//   }
//   // POST - Submits data to be processed to a specified resource. Takes one parameter.
  
//   function deleteSong(songId) {
//     return $.ajax({
//       url: `${firebase.getFBsettings().databaseURL}/songs.json`,
//       type: 'DELETE',
//       data: JSON.stringify(songId),
//       dataType: 'json'
//     }).done((data) => {
//       return data;
//     });
//   }
  
//   function getSong(songId) {
//     return $.ajax({
//       url: `${firebase.getFBsettings().databaseURL}/songs.json`
//     }).done((songData) => {
//       return songData;
//     }).fail((error) => {
//       return error;
//     });
//   }
  
//   // GET - Requests/read data from a specified resource
//   // PUT - Update data to a specified resource. Takes two parameters.
//   function editSong(songFormObj, songId) {
//     return $.ajax({
//       url: `${firebase.getFBsettings().databaseURL}/songs.json`,
//       type: 'PUT',
//       data: JSON.stringify(songFormObj)
//     }).done((data) => {
//       return data;
//     });
//   }
  
//   module.exports = {
//     addSong,
//     getSong,
//     deleteSong,
//     editSong
//   };