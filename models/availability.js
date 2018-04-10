module.exports = function(sequelize, DataTypes) {
    var availability= sequelize.define("availability", {
        check_in_time: { 
            type: DataTypes.DATE,
            allowNull: false,
        },
        expiration_time: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        is_available: {
            type: DataTypes.BOOLEAN,
            default: true,
            allowNull: false,
        },
        lot_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        space_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });
    return availability;    
};