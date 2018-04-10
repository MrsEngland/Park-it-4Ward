module.exports = function(sequelize, DataTypes) {
    var availability= sequelize.define("Availability", {
        check_in_time: { 
            type: DataTypes.DATE,
            allowNull: false,
        },
        expiration_time: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
       
    });

    // Availability.associate = function(models) {
    //     Availability.belongsTo(models.spaces, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // }; 

    return availability;
    
    };