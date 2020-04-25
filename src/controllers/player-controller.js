/*
  This file contains all CRUD functionalities
*/

const Player = require('../models/player-model.js');

//This function creates a player as a request,
//and response with the player object created in MongoDB
const createPlayer = function(req, res){
  const player = new Player(req.body)
  player.save().then(function(){
    res.send(player);
  }).catch(function(error){
    return res.status(400).send(error);
  })
}

module.exports = {
  createPlayer: createPlayer,
};
