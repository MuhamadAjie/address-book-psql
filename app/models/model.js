module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("Contacts", {
    first_name: {
      type: Sequelize.STRING,
    },
    last_name: {
      type: Sequelize.STRING,
    },
    phone_number: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
  });

  return Tutorial;
};
