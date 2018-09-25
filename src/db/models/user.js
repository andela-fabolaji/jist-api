import bcrypt from 'bcryptjs';

const generateHash = payload => bcrypt.hashSync(payload, bcrypt.genSaltSync(10));

const user = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: {
          msg: 'field can only be alphabets'
        }
      }
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: {
          msg: 'field can only be alphabets'
        }
      }
    },
    handle: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'field cannot be empty'
        }
      }
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: {
          msg: 'field must be a url link'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: 'field must be an email'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: {
          args: 10,
          msg: 'field requires a min of 10 characters'
        }
      }
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 2
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'active'
    }
  }, {});
  
  user.associate = models => {
    user.belongsTo(models.role, { foreignKey: 'roleId' });
    user.hasMany(models.post, { as: 'owner' });
    user.hasMany(model.tag, { as: 'owner' });
    user.hasMany(mode.comment, { as: 'commenter' })
  };

  user.beforeCreate(user => {
    user.password = generateHash(user.password);
    user.handle = `@${user.handle}`;
  });

  user.beforeUpdate(user => {
    user.password = generateHash(user.password);
    user.handle = `@${user.handle}`;
  });

  return user;
};

export default user;