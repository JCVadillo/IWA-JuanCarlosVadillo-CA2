Players = [];

//AJAX DB function calls
function getAllPlayers(){
  $.ajax({
    url: 'http://localhost:3000/getAllPlayers',
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
    url: 'http://localhost:3000/createPlayer',
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

function displayPlayer(num){
  $("#displayPlayerName").html(Players[num].name)
  $("#displayPlayerClub").html(Players[num].club)
  $("#displayPlayerNationality").html(Players[num].nationality)
  $("#displayPlayerPoints").html(Players[num].points)
  $("#displayPlayerModal").addClass("is-active");
}

function populateTable(data){
  $("#table-body").empty()
  for (i in data){
    num = parseInt(i)+1
    html = '<tr onclick="displayPlayer('+ i +')">'
    html += "<th>" + num + "</th>"
    html += "<td>" + data[i].name + "</td>"
    html += "<td>" + data[i].club + "</td>"
    html += "<td>" + data[i].nationality + "</td>"
    html += "<td>" + data[i].points + "</td>"
    html += "</tr>"
    $("#table-body").append(html);
  }
}

//Main
getAllPlayers();
