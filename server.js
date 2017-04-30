var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// var port = process.env.PORT || 3030;


var app = express();
app.set('port', (process.env.PORT || 5000));
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_Controller.js");

app.use("/", routes);

// app.listen(port);
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});