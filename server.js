// Require the following npm packages inside of the server.js file:
    // express
    // method-override
    // body-parser
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var nodemon = require("nodemon");

var PORT = process.env.PORT || 3000;

var app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

    //throws err TypeError('Router.use() requires middlewawre function but got a ' + gettype(fn)) //but got a object
app.use("/", routes);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });