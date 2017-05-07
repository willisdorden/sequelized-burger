
module.exports = function(sequelize, DataTypes) {
    var burgers = sequelize.define("burgers", {
        burger_name: {
            type: DataTypes.STRING,
            notNull: true,
            validate: {
                len: [1, 140]

            }
        },
        devoured:{ type: DataTypes.BOOLEAN,
            defaultValue:false
        },
        date:{
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW }

    });
    return burgers;
};
