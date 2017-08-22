var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 7000;

//access to public folder
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

//override with post having ?_method = DELETE
app.use(methodOverride("_method"));

//handlebars set up
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//import controller
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

app.listen(PORT);
