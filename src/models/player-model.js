/*
  This file works as an
  schema which all players should follow
*/

const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

var playerSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  club:{
    type: String,
    required: true
  },
  nationality:{
    type: String,
    required: true
  },
  points:{
    type: Number,
    required: true
  }
})

//Player's constructor
const Player = mongoose.model('Player', playerSchema)

module.exports = Player
