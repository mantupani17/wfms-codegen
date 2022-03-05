'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Permissions extends Model {
        static associate(models) {}
    }

    Permissions.init({
        title: { type: DataTypes.STRING},
        slug: {type: DataTypes.STRING},
        description: {type: DataTypes.STRING},
        active: {type: DataTypes.BOOLEAN},
        createdAt: {type: DataTypes.DATE},
        updatedAt: {type: DataTypes.DATE},
        content: {type: DataTypes.STRING}
    },{
        hooks: {
            beforeCreate: (record, options) => {},
            beforeUpdate: (record, options) => {},
            afterCreate: (record, options) => {},
            afterUpdate: (record, options) => {},
        },
        sequelize,
        modelName: 'permissions'
    });

    return Permissions;
}