module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Board",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      category_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATETIME,
        allowNull: false,
        defaultValue: today,
      },
      updated_at: {
        type: DataTypes.DATETIME,
        allowNull: false,
        defaultValue: today,
      },
    },
    { timestamps: true, underscored: true }
  );
};
