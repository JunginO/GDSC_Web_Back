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
        content: {
          type: DataTypes.TEXT,
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
  });
