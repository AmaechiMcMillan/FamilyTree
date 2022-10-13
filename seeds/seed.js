const sequelize = require('../config/connection');
const { User, Fam } = require('../models');

const userData = require('./userData.json');
const famData = require('./famData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const fam of famData) {
    await Fam.create({
      ...fam,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
