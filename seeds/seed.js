const sequelize = require('../config/connection');
const { User, Fam } = require('../models');

const userData = require('./userData.json');
const famData = require('./famData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
};

const seedFambase = async () => {
  await sequelize.sync({ force: true });

  await Fam.bulkCreate(famData, {
    individualHooks: false,
    returning: true,
  });

  process.exit(0);
};

seedFambase();
