module.exports = function(sequelize, DataTypes) {
    var ParkingLots = sequelize.define("ParkingLots", {
        
    });

    ParkingLots.associate = function(models) {
            ParkingLots.hasMany(models.Spaces, {
        
            });
        };
        
        return ParkingLots;
    };