// Controller setup

// Inside your burger directory, create a folder named controllers.
// In controllers, create the burgers_controller.js file.
// Inside the burgers_controller.js file, import the following:
// Express
// burger.js
// Create the router for the app, and export the router at the end of your file.

var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create the router for the app, and export the router at the end of your file.
//get - respond with data from api to webpage
router.get("/",function(req,res) {
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        // console.log(hbsObject);
        
        res.render("index",hbsObject)
    })
});
//post - post data from webpage to server
router.post("/", function(req,res) {
    // console.log(req.body.devoured);
    burger.create([
        "burger_name","devoured"
    ],[req.body.burger, false
    ], function() {
        res.redirect("/");
    });
});
//put - change data based on user input
router.put("/:id", function(req,res) {
    var condition = "id = " + req.params.id;

    // console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function() {
        res.redirect("/");
    });
});
//delete - remove data
router.delete("/:id", function(req,res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function () {
        res.redirect("/");
    });
});

//export routes for server.js to use
module.exports = router;

