module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define("user", {
        name: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return user;
};