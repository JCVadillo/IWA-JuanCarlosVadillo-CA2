# IWA-JuanCarlosVadillo-CA2
# Creation if a simple an API service  that supports full CRUD

## Description of the API
The idea of this API is to provide an interaction where Football players could be displayed on
screen, added, updated and deleted from our back end server (Heruko cloud) and database
(Mongo DB Atlas) through a front end client in a simple and friendly way By the default it will
display current elements and from there provides the user full CRUD functionalities.

## CRUD functionalities
- Create Player (Create functionality) – By clicking in the upload button, a modal will be
display with the required attributes to be filled, the by clicking save the player created
will be stored in the DB and the list with the new entry will be displayed. This action
also can be discarded by clicking on the cancel button
- Get Players (Read Functionality) – By default all players in the list, therefore, in de DB
base will be displayed to the user without the need of doing something, every time
that some modification could be done, an updated list will be automatically displayed
with the updated data.
- Update a Player (Update functionality) – The user will be able to click on any player
displayed, then a modal will be prompted with and “edit” button. When this button is
clicked a new modal will appear with the current attributes of the player selected giving
the choice to modify them. These changes will be storage by clicking save, and actions
can be discarded by clicking cancel
- Delete a player (Delete functionality) – The user will be able to delete a player, by selecting
with a click on the player a modal will be prompted the selecting edit a new
modal will be shown like in the “update functionality”. A delete button coloured in red
also will be displayed in this new modal giving the option of deleting the selected
player. Be aware this change cannot be undone
