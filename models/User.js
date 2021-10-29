module,
  (exports = (sequelize, DataTypes) => {
    return sequelize.define(
      "User",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        user_id: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        nickname: {
          type: DataTypes.STRING(10),
          allowNull: false,
        },
      },
      { timestamps: true, underscored: true }
    );
  });
