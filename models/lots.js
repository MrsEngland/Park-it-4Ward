module.exports = function(sequelize, DataTypes) {
    var ParkingLots = sequelize.define("ParkingLots", {
        name: { 
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        address: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        city: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        state: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        zip: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        available_spaces: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        default_time: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    });

    // ParkingLots.associate = function(models) {
    //         ParkingLots.hasMany(models.Spaces, {
        
    //         });
    //     };
        
        return ParkingLots;
    };