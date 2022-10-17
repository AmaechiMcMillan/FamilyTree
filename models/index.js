const User = require('./User');
const Tree = require("./Tree")

//User.belongsToMany(Tree, { as: 'Trees', foreignKey: 'owner_id', through: 'Tree' });
//Tree.hasOne(User, { as: 'User', foreignKey: 'owner_id', through: 'User' });




module.exports = { User, Tree};

