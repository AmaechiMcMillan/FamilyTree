const Fam = require('./Fam');


// var Task = sequelize.define('Task', {
//  name: Sequelize.STRING
//});

Fam.belongsToMany(Fam, { as: 'children', foreignKey: 'Fam_id', through: 'ParentHasChild' });
Fam.belongsToMany(Fam, { as: 'parents', foreignKey: 'Fam_id', through: 'ParentHasChild' });

module.exports = { Fam };
