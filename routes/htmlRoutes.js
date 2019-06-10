var db = require("../models");
// const bcrypt = require("bcrypt");

module.exports = function(app) {
  // LOGIN PAGE: WORKING
  app.get("/", function(req, res) {
    res.render("login");
  });

  // SIGNUP PAGE: WORKING
  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  // NEW USER PAGE: WORKING
  app.get("/new-user", function(req, res) {
    res.render("newUser");
  });

  // NEW CHORE PAGE: WORKING
  app.get("/new-chore", function(req, res) {
    res.render("newChore");
  });

  // CHORES LIST PAGE: NOT WORKING!!
  app.get("/chores-list", function(req, res) {
    db.Chores.findAll({}).then(function(dbChores) {
      res.render("chores-list", {
        chores: dbChores
      });
    });
  });

  // ADMIN VIEW: WORKING
  app.get("/admin", function(req, res) {
    res.render("indexadmin");
  });

  // USER VIEW: WORKING
  app.get("/user", function(req, res) {
    res.render("indexuser");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

//   app.post("/", function(req, res) {
//     bcrypt.compare(req.body.password, hash, function(err, res) {
//       res.redirect().catch(function(err) {
//         console.error(err);
//         res.status(500).send(err);
//       });
//     });
//   });

//   // Load example page and pass in an example by id
//   app.post("/login", function(req, res) {
//     db.Users.findOne({ where: { username: req.body.username } }).then(function(
//       user
//     ) {
//       if (!user) {
//         res.redirect("/");
//       } else {
//       }
//     });
//   });
// };

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
