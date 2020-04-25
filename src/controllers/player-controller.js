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

//This function retrive all players from the database.
const getAllPlayers = function(req, res){
  Player.find({}, function(err, players){
    if(!players){
      return res.status(404).send()
    }
    return res.send(players)
  })
}

//Update name, club, nationality or points by of player id
const updatePlayer = function(req, res) {
  const _id = req.params.id
  const updates = Object.keys(req.body)
  const allowedUpdates = ['name', 'club', 'nationality', 'points']
  const isValidUpdate = updates.every((update) => allowedUpdates.includes(update))
  if (!isValidUpdate){
    return res.status(400).send({
      error: 'Invalid update, only allowed updates: ' + allowedUpdates
    })
  }
    Player.findByIdAndUpdate(_id, req.body, {new: true}).then(function(player) {
      if (!player){
        return res.status(404).send()
      }
      return res.send(player)
    }).catch(function(error) {
      res.status(500).send(error)
    })
}

//Delete a player by id
const deletePlayer = function(req, res){
  id = req.params.id
  Player.findOneAndRemove({ _id: id }).then(function(player){
    res.send({player: "deleted"});
  }).catch(function(error){
    res.status(500).send(error)
  })
}


module.exports = {
  createPlayer: createPlayer,
  getAllPlayers: getAllPlayers,
  updatePlayer: updatePlayer,
  deletePlayer: deletePlayer
};
