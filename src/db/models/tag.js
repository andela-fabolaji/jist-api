const tag = (sequelize, DataTypes) => {
  const tag = sequelize.define('tag', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
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
  
  tag.associate = models => {
    tag.belongsTo(models.user, { foreignKey: 'ownerId' });
    tag.belongsToMany(models.post, { through: 'post_tag', foreignKey: 'tagId', otherKey: 'postId' });
  };

  return tag;
};

export default tag;