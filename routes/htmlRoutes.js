var db = require("../models");

module.exports = function(app) {
  // LOGIN PAGE
  app.get("/login", function(req, res) {
    res.render("login");
  });

  // SIGNUP PAGE
  app.get("/signin", function(req, res) {
    res.render("signup");
  });

  // NEW USER PAGE
  app.get("/new-user", function(req, res) {
    res.render("newUser");
  });

  // NEW CHORE PAGE
  app.get("/new-chore", function(req, res) {
    res.render("newChore");
  });

  // CHORES LIST PAGE
  // Show all chores for family? Show all chores for certain user?
  // Who's chore is it?
  app.get("/chores-list", function(req, res) {
    db.Chores.findAll({}).then(function(dbChores) {
      res.render("chores-list", {
        chores: dbChores
      });
    });
  });

  // ADMIN VIEW
  app.get("/admin", function(req, res) {
    res.render("indexadmin");
  });

  // USER VIEW
  app.get("/user", function(req, res) {
    res.render("indexuser");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

// Load index page
// app.get("/", function (req, res) {
//   db.Example.findAll({}).then(function (dbExamples) {
//     res.render("index", {
//       msg: "Welcome!",
//       examples: dbExamples
//     });
//   });
// });

// Load example page and pass in an example by id
// app.get("/example/:id", function (req, res) {
//   db.Example.findOne({ where: { id: req.params.id } }).then(function (
//     dbExample
//   ) {
//     res.render("example", {
//       example: dbExample
//     });
//   });
// });
