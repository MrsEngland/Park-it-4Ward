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
        available_spaces: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        default_time: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });

    // ParkingLots.associate = function(models) {
    //     ParkingLots.hasMany(models.Spaces, {
    
    //     });
    // };
        
    return ParkingLots;
};