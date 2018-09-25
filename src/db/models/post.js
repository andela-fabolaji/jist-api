const post = (sequelize, DataTypes) => {
  const post = sequelize.define('post', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'field cannot be empty'
        }
      }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'field cannot be empty'
        }
      }
    },
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});

  post.associate = models => {
    post.belongsTo(models.user, { foreignKey: 'ownerId' });
    post.hasMany(models.tag, { through: 'post_tag', as: 'postId' });
    post.hasMany(models.comment, { through: 'post_comment', as: 'postId' })
  };

  return post;
};

export default post;