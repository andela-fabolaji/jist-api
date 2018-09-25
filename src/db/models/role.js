const role = (sequelize, DataTypes) => {
  const role = sequelize.define('role', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: {
          msg: 'field can only contain alphabets'
        }
      }
    }
  }, {});

  role.associate = models => {
    role.hasMany(models.user, { as: 'roleId' });
  };

  return role;
};

export default role;