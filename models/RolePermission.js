'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class RolePermission extends Model {
        static associate(models) {}
    }

    RolePermission.init({
        roleid: {type: DataTypes.INTEGER},
        permissionid: {type: DataTypes.INTEGER},
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
        modelName: 'role_permissions'
    });

    return RolePermission;
}