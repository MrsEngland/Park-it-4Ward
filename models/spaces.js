module.exports = function(sequelize, DataTypes) {
    var ParkingSpaces = sequelize.define("ParkingSpaces", {
        isHandicapped: { 
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        compactCarOnly: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        isAvailable: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        electric_charging: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        motorcycle: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        lot_id: {
            type: DataTypes.INTEGER,
            references: 'ParkingLots',
            referencesKey: 'id'
        }
    });

    // ParkingSpaces.associate = function(models) {
    //     ParkingSpaces.belongsTo(models.Lots, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // }; 
    
    return ParkingSpaces;
    
};
