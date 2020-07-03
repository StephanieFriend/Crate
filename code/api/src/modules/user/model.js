// With strict mode, you can't use undeclared variables inside of a fucntion
// https://www.w3schools.com/js/js_strict.asp
'use strict'

// Attributes of a user and the datatype they are being stored as
// Will need to add a style-preference attribute to store a user's style preference
// Default to null?
module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define('users', {
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.TEXT
    },
    password: {
      type: DataTypes.TEXT
    },
    role: {
      type: DataTypes.TEXT
    }
  })

  // Defines User relationships; in this case, a user can have many subscriptions
  User.associate = function(models) {
    User.hasMany(models.Subscription)
  }

  // Delivers what has been defined above
  return User
}
