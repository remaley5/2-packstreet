'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      autoIncrement: true,
      primaryKey: true
      },
    url: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Photo.associate = function(models) {
    Photo.belongsTo(models.User, ({foreignKey: 'userId'}));
  };
  return Photo;
};
