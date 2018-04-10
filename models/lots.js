module.exports = function(sequelize, DataTypes) {
    var ParkingLots = sequelize.define("ParkingLots", {
        name: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        zip: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        latitude: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        longitude: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        available_spaces: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        default_time: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
<<<<<<< HEAD
});

    // ParkingLots.associate = function(models) {
    //     ParkingLots.hasMany(models.Spaces, {
    
    //     });
    // };
=======
    });
>>>>>>> fdec8f5c54f16e589001b4204c254c2f948097a0
        
    return ParkingLots;
};