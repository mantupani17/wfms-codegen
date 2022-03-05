'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class UserRoles extends Model {
        static associate(models) {}
    }

    UserRoles.init({
        userid: {type: DataTypes.INTEGER},
        roleid: {type: DataTypes.INTEGER},
        createdAt: {type: DataTypes.DATE},
        updatedAt: {type: DataTypes.DATE}
    },{
        hooks: {
            beforeCreate: (record, options) => {},
            beforeUpdate: (record, options) => {},
            afterCreate: (record, options) => {},
            afterUpdate: (record, options) => {},
        },
        sequelize,
        modelName: 'user_roles'
    });

    return UserRoles;
}