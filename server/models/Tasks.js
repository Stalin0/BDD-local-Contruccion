'use strict';

module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: true },
    completed: { type: DataTypes.BOOLEAN, defaultValue: false },
    username: { type: DataTypes.STRING, allowNull: false } 
  });

  return Task;
};
