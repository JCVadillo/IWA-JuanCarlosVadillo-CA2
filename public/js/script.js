Players = [];

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

function createPlayer(){
  json_to_send ={
    name: $("#createPlayerName").val(),
    club: $("#createPlayerClub").val(),
    nationality: $("#createPlayerNationality").val(),
    points: $("#createPlayerPoints").val()
  }

  json_to_send = JSON.stringify(json_to_send);

  $.ajax({
    url: 'https://iwa-juancarlosvadillo-ca2.herokuapp.com/createPlayer',
    headers: {
        'Content-Type':'application/json'
    },
    method: 'POST',
    dataType: 'json',
    data: json_to_send,
    success: function(data){
      getAllPlayers()
    },
    error: function(error_msg) {
      console.log(error_msg);
      var err = (error_msg.responseText)
    }
  });
}

function editPlayer(num){
  json_to_send ={
    name: $("#editPlayerName").val(),
    club: $("#editPlayerClub").val(),
    nationality: $("#editPlayerNationality").val(),
    points: $("#editPlayerPoints").val()
  }

  json_to_send = JSON.stringify(json_to_send);
  id = Players[num]._id

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

function deletePlayer(num){
  id = Players[num]._id

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

function populateTable(data){
  $("#table-body").empty()
  for (i in data){
    num = parseInt(i)+1
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

function displayPlayerModal(num){
  $("#displayPlayerName").html(Players[num].name)
  $("#displayPlayerClub").html(Players[num].club)
  $("#displayPlayerNationality").html(Players[num].nationality)
  $("#displayPlayerPoints").html(Players[num].points)
  $("#editPlayerButton").attr("onclick", "editPlayerModal("+ num + ")")
  $("#displayPlayerModal").addClass("is-active");
}

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
