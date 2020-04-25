const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

//DB Player Schema
var playerSchema = new mongoose.Schema({
  name :{
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
  points: {
    type: Number,
    required: true
  };
});

// All players should follow the schema
const Player = mongoose.model('Player', playerSchema);

//Allows use Player in other files
module.export = Player;
