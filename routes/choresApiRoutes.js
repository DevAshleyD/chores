var db = require("../models");

module.exports = function(app) {
  // GET all Chores
  app.get("/api/chores", function(req, res) {
    db.Chores.findAll({}).then(function(dbChores) {
      res.json(dbChores);
    });
  });

  // GET ALL specific Chores of certain User
  app.get("/api/chores-all/:id", function(req, res) {
    db.Chores.findAll({
      where: {
        UserId: req.params.id
      }
    }).then(function(dbChores) {
      res.json(dbChores);
    });
  });

  // GET ONE specific Chore
  app.get("/api/chores-one/:id", function(req, res) {
    db.Chores.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbChores) {
      res.json(dbChores);
    });
  });

  // GET ALL completed Chores
  app.get("/api/chores/completed", function(req, res) {
    db.Chores.findAll({
      where: {
        completed: true
      }
    }).then(function(dbChores) {
      res.json(dbChores);
    });
  });

  // CREATE new Chores
  app.post("/api/chores/create", function(req, res) {
    db.Chores.create({
      name: req.body.name,
      value: req.body.value,
      photot: req.body.photo
    }).then(function(dbChores) {
      res.json(dbChores);
    });
  });

  // UPDATE Chores
  app.put("/api/chores/update", function(req, res) {
    db.Chores.update(req.body.completed, {
      where: {
        id: req.body.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // DELETE Chores
  app.delete("/api/chores/destroy/:id", function(req, res) {
    db.Chores.destroy({ where: { id: req.params.id } }).then(function(
      dbChores
    ) {
      res.json(dbChores);
    });
  });
};
