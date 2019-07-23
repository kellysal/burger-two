module.exports = function (sequelize, DataTypes) {

    const Burger = sequelize.define("Burger", {

        burger_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        id: {
            type: DataTypes.BOOLEAN,
            autoIncrement: true,
            primaryKey: true
        }
    });
    return Burger;
};