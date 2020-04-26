Players = []; //List of all players in DB

// All player will be display as default
//AJAX DB function calls
function getAllPlayers(){
  $.ajax({
    url: 'https://iwa-juancarlosvadillo-ca2.herokuapp.com/getAllPlayers',
    headers: {
        'Content-Type':'application/json'
    },
    method: 'GET',
    dataType: 'json',
    success: function(data){
      Players = data
      populateTable(Players)
    },
    error: function(error_msg) {
      console.log(error_msg);
      var err = (error_msg.responseText)
    }
  });
}

//Function to add a new players
function createPlayer(){
  json_to_send ={
    name: $("#createPlayerName").val(),
    club: $("#createPlayerClub").val(),
    nationality: $("#createPlayerNationality").val(),
    points: $("#createPlayerPoints").val()
  }

  //Body parsed as JSON
  json_to_send = JSON.stringify(json_to_send);

  //Request to create player
  $.ajax({
    url: 'https://iwa-juancarlosvadillo-ca2.herokuapp.com/createPlayer',
    headers: {
        'Content-Type':'application/json'
    },
    method: 'POST',
    dataType: 'json',
    data: json_to_send,
    success: function(data){
      //If API calls success
      //show changes in table
      getAllPlayers()
    },
    error: function(error_msg) {
      console.log(error_msg);
      var err = (error_msg.responseText)
    }
  });
}
//Fuction to update a players
function editPlayer(num){
  json_to_send ={
    name: $("#editPlayerName").val(),
    club: $("#editPlayerClub").val(),
    nationality: $("#editPlayerNationality").val(),
    points: $("#editPlayerPoints").val()
  }

  // Parse to JSON with new values
  json_to_send = JSON.stringify(json_to_send);
  id = Players[num]._id

  //Request to edit player
  $.ajax({
    url: 'https://iwa-juancarlosvadillo-ca2.herokuapp.com/player/edit/' + id,
    headers: {
        'Content-Type':'application/json'
    },
    method: 'PATCH',
    dataType: 'json',
    data: json_to_send,
    success: function(data){
      $('.is-active').removeClass('is-active')
      getAllPlayers()
    },
    error: function(error_msg) {
      console.log(error_msg);
      var err = (error_msg.responseText)
    }
  });
}
//function d delete a player
function deletePlayer(num){
  id = Players[num]._id
  //Request to delete a player
  $.ajax({
    url: 'https://iwa-juancarlosvadillo-ca2.herokuapp.com/player/delete/' + id,
    headers: {
        'Content-Type':'application/json'
    },
    method: 'DELETE',
    dataType: 'json',
    success: function(data){
      $('.is-active').removeClass('is-active')
      getAllPlayers()
    },
    error: function(error_msg) {
      console.log(error_msg);
      var err = (error_msg.responseText)
    }
  });
}

//Event handeler
$("#createPlayerModalButton").click(function() {
  $("#createPlayerModal").addClass("is-active");
});

$(".cancel").click(function(){
  $('.is-active').removeClass('is-active')
})

$("#createPlayerButton").click(function(){
  $('.is-active').removeClass('is-active')
  createPlayer();
});

//Show players in DB
//.empty is used to update and clean adter any change on the DB
function populateTable(data){
  $("#table-body").empty()
  for (i in data){
    num = parseInt(i)+1
    // Edit player by click on its row
    // And automatically we will know which
    // elemet of the DB to modify or display
    html = '<tr onclick="displayPlayerModal('+ i +')">'
    html += "<th>" + num + "</th>"
    html += "<td>" + data[i].name + "</td>"
    html += "<td>" + data[i].club + "</td>"
    html += "<td>" + data[i].nationality + "</td>"
    html += "<td>" + data[i].points + "</td>"
    html += "</tr>"
    $("#table-body").append(html);
  }
}

//Fuction to display player on modal
function displayPlayerModal(num){
  $("#displayPlayerName").html(Players[num].name)
  $("#displayPlayerClub").html(Players[num].club)
  $("#displayPlayerNationality").html(Players[num].nationality)
  $("#displayPlayerPoints").html(Players[num].points)
  $("#editPlayerButton").attr("onclick", "editPlayerModal("+ num + ")")
  $("#displayPlayerModal").addClass("is-active");
}

//Function to Edit a player on modal
function editPlayerModal(num){
  $('.is-active').removeClass('is-active')
  $('#editPlayerName').val(Players[num].name)
  $('#editPlayerClub').val(Players[num].club)
  $('#editPlayerNationality').val(Players[num].nationality)
  $('#editPlayerPoints').val(Players[num].points)
  $("#savePlayerButton").attr("onclick", "editPlayer(" + num + ")")
  $("#deletePlayerButton").attr("onclick", "deletePlayer(" + num + ")")
  $("#editPlayerModal").addClass("is-active");
}

//Main
getAllPlayers();
