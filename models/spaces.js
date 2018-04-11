module.exports = function(sequelize, DataTypes) {
    var ParkingSpaces = sequelize.define("parking_spaces", {
        isHandicapped: { 
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true,
        },
        compactCarOnly: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true,
        },
        electric_charging: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true,
        },
        motorcycle: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
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