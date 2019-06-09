var db = require("../models");

module.exports = function(app) {
  // GET all Users
  app.get("/api/users", function(req, res) {
    db.Users.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // GET all Users in Household
  app.get("/api/users/:id", function(req, res) {
    db.Users.findAll({
      where: {
        HouseholdId: req.params.HouseholdId
      }
    }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // USER LOGIN
  app.post("/api/user/login", function(req, res) {
    db.Users.findOne({
      where: { email: req.body.email }
    }).then(function(dbUsers) {
      res.json(dbUsers);
      if (dbUsers.email === req.body.email) {
        if (dbUsers.password === req.body.password) {
          console.log("PASSWORD MATCH!");
          res.render("/indexadmin");
        }
        console.log("EMAIL MATCH!");
      }
    });
  });

  // CREATE new Users
  app.post("/api/users/create", function(req, res) {
    db.Users.create(req.body).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // UPDATE Users password
  app.put("/api/users/update/:id", function(req, res) {
    db.Users.update(
      {
        password: req.body.password
      },
      {
        where: {
          id: req.params.id
        }
      }
    ).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // DELETE Users
  app.delete("/api/users/destroy/:id", function(req, res) {
    db.Users.destroy({ where: { id: req.params.id } }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });
};
