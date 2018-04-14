module.exports = function(sequelize, DataTypes) {

    var user = sequelize.define("user", {
        username: { 
            type: DataTypes.STRING.TEXT,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            validate: {isEmail:true},
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: Sequelize.ENUM('active','inactive'),
            defaultValue:'active',
        },
    });

    return user;
};


