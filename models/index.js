const User = require('./User');
const Tree = require("./Tree")

//User.belongsToMany(Tree, { as: 'Trees', foreignKey: 'owner_id', through: 'Tree' });
Tree.belongsTo(User, {
      foreign_key: 'creator_id',
});

User.hasMany(Tree, {
      foreignKey: 'creator_id',
})




module.exports = { User, Tree};

