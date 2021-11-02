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

        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        hp: {
          type: DataTypes.STRING(20),
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
        major: {
          type: DataTypes.STRING(10),
          allowNull: false,
        },
        profile_pic: {
          type: DataTypes.STRING(10),
        },
        is_auth: {
          type: DataTypes.BOOLEAN,
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
  });
