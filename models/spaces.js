module.exports = function(sequelize, DataTypes) {
    var ParkingSpaces = sequelize.define("ParkingSpaces", {
        isHandicapped: { 
            type: DataTypes.BOOLEAN,
            default: false,
            allowNull: false,
        },
        compactCarOnly: {
            type: DataTypes.BOOLEAN,
            default: false,
            allowNull: false,
        },
        isAvailable: {
            type: DataTypes.BOOLEAN,
            default: false,
            allowNull: false,
        },
        electric_charging: {
            type: DataTypes.BOOLEAN,
            default: false,
            allowNull: false,
        },
        motorcycle: {
            type: DataTypes.BOOLEAN,
            default: false,
            allowNull: false,
        },
        lot_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'ParkingLots',
                key: 'id'
            }
        }
    });
    
    return ParkingSpaces;  
};
