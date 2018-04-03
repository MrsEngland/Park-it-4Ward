module.exports = function(sequelize, DataTypes) {
    var ParkingSpaces = sequelize.define("ParkingSpaces", {

    });

    ParkingSpaces.associate = function(models) {
        ParkingSpaces.belongsTo(models.Lots, {
            foreignKey: {
                allowNull: false
            }
        });
    }; 
    
    return ParkingSpaces;
    
    };