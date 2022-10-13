const User = require('./User');
const Fam = require('./Fam');

User.hasMany(Fam, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Fam.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Fam };
