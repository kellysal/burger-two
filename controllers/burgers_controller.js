// Dependencies
var express = require("express");
// Import the model to use its db functions for burger.js
var db = require("../models/");

// Create the router for the app, and export the router at the end of your file.
var router = express.Router();
// Create routes and set up logic where required.
router.get("/", function (req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
    db.Burger.findAll()
        .then(function (dbBurger) {
            console.log(dbBurger);

            var hdsObject = { burger: dbBurger };
            return res.render("index", hbsObject);
        });
});

// Add new burger to the db.
router.post("/burgers/create", function (req, res) {
    db.Burger.create({
        burger_name: req.body.burger_name
    })
        .then(function (dbBurger) {
            console.log(dbBurger);
            res.redirect("/");
        });
});
// Set burger devoured status to true.
router.put("/burgers/update/:id", function (req, res) {
    db.Burger.update({
        devoured: true
    }, {
            where: {
                id: req.pararms.id
            }
        }).then(function (dbBurger) {
            res.json("/");

        });
});

module.exports = router;