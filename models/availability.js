module.exports = function(sequelize, DataTypes) {
    var availability= sequelize.define("availability", {
        check_in_time: { 
            type: DataTypes.DATE,
            allowNull: false,
        },
        expiration_time: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        is_available: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
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