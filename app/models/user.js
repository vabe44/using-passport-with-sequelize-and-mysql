module.exports = function (sequelize, Sequelize) {

    return sequelize.define('User', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        username: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        reset_password_token : {
            type: Sequelize.STRING
        },
        reset_password_expires : {
            type: Sequelize.DATE
        },
        last_login: {
            type: Sequelize.DATE
        },
        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        },
        role: {
            type: Sequelize.ENUM('user', 'admin'),
            allowNull: false,
            defaultValue: 'user',
        },
    }, {
        underscored: true
    });

}