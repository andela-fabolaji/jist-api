const comment = (sequelize, DataTypes) => {
  const comment = sequelize.define('comment', {
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'comment cannot be empty'
        }
      }
    },
    commenterId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});

  comment.associate = models => {
    comment.belongsTo(models.user, { foreignKey: 'commenterId' });
    comment.belongsTo(models.post, { through: 'post_comment', foreignKey: 'commentId', otherKey: 'postId' });
  };

  return comment;
};

export default comment;