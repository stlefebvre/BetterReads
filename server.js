var express = require("express");
var bodyParser = require("body-parser");

//Sets up Express app
var app = express();
var PORT = process.env.port || 8080;

//requiring models for syncing
var db = require ("./models");

//sets up express to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
//parse application/json
app.use(bodyParser.json());

//static directory
app.use(express.static("public"));

//Routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})