const express = require('express');

const app = express();

//Heroku's enviorment Port
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

app.listen(port);
