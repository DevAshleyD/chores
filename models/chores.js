module.exports = function (sequelize, DataTypes) {
  var Chores = sequelize.define("Chores", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    value: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    due: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
<<<<<<< HEAD
    // created: {
    //   // TIMESTAMP: https://github.com/sequelize/sequelize/issues/9363
    //   type: "TIMESTAMP",
    //   allowNull: false
    // },
    due: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
=======
>>>>>>> 5f82a882eaed100efc40ed9e0ed2bbac0e2ec4ee
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  Chores.associate = function (models) {
    Chores.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false,
        defaultValue: 1
      }
    });
  };

  return Chores;
};
