module.exports = function(sequelize, DataTypes) {
    var ParkingSpaces = sequelize.define("parking_spaces", {
        isHandicapped: { 
            type: DataTypes.BOOLEAN,
            default: false,
            allowNull: true,
        },
        compactCarOnly: {
            type: DataTypes.BOOLEAN,
            default: false,
            allowNull: true,
        },
        electric_charging: {
            type: DataTypes.BOOLEAN,
            default: false,
            allowNull: true,
        },
        motorcycle: {
            type: DataTypes.BOOLEAN,
            default: false,
            allowNull: true,
        },
        lot_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'parking_lots',
                key: 'id'
            }
        }
    });
    return ParkingSpaces;  
};