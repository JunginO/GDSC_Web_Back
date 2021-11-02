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
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      category: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      image_url: {
        type: DataTypes.STRING,
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
      comment_num: {
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
      is_hot: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    { timestamps: true, underscored: true }
  );
};
