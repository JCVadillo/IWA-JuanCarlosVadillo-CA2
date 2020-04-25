/*This file will deal with user's requets
calling functionalities in player-controller*/

const express = require('express')
const router = express.Router()
const cors = require('cors')

const player = require("./controllers/player-controller.js")

router.all('*', cors())
//router.<CRUD>('/url', <function_to_call>)
router.post('/createPlayer', player.createPlayer); //create a Player
router.get('/getAllPlayers', player.getAllPlayers); // Get all players fromm DB
router.patch('/player/edit/:id', player.updatePlayer); //Edit user information by id
router.delete('/player/delete/:id', player.deletePlayer); //Delete player by id


//If the user calls a not existing url, this error will be displayed.
router.get('*', function(req, res) {
  res.send({
    error: 'This route does not exist... But at least you have internet conecction!'
  })
})

module.exports = router
