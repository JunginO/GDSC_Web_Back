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

      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      is_secret: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      like_num: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
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
