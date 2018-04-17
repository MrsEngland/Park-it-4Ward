module.exports = function(sequelize, DataTypes) {
    var ParkingLots = sequelize.define("parking_lots", {
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
        total_spaces: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        default_time: {
            type: DataTypes.INTEGER,
            defaultValue: 12,
            allowNull: false,
        }
    });
    return ParkingLots;
};