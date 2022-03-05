'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {}
    }

    User.init({
        firstName: {type: DataTypes.STRING},
        lastName: {type: DataTypes.STRING},
        password: {type: DataTypes.STRING},
        userStatus: {type: DataTypes.INTEGER},
        phone: {type: DataTypes.STRING},
        email: {type: DataTypes.STRING, unique: true},
        username: {type: DataTypes.STRING, unique: true},
        createdAt:{type: DataTypes.DATE},
        updatedAt:{type: DataTypes.DATE}
    },{
        hooks: {
            beforeCreate: async (user, options) => {
                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(user.password, salt);
                user.password = hash;
            },
            beforeUpdate: (record, options) => {},
            afterCreate: (record, options) => {},
            afterUpdate: (record, options) => {},
        },
        sequelize,
        modelName: 'users'
    });

    return User;
}