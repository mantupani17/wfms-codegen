/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { permissions } = require('../models/')

/**
* Create permission
* This can only be done by the superadmin user.
*
* permission Permission Created permission object
* no response value expected for this operation
* */
const createNewPermission = ({ permission }) => new Promise(
  async (resolve, reject) => {
    try {
      const per_res = await permissions.create(permission);
      resolve(Service.successResponse({
        per_res,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete role
* This can only be done by the superadmin.
*
* permissionid Integer The name that needs to be deleted
* no response value expected for this operation
* */
const deletePermission = ({ permissionid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        permissionid,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get permissions by query
* This will get all the permission details
*
* offset Integer The number of items to skip before starting to collect the result set (optional)
* limit Integer The numbers of items to return (optional)
* no response value expected for this operation
* */
const getAllPermissionDetail = ({ offset, limit }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        offset,
        limit,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get permission by id
*
* permissionid Integer The nanme that needs to be fetched.
* returns Permission
* */
const getPermissionById = ({ permissionid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        permissionid,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updated permission
* This can only be done by the superadmin.
*
* permissionid BigDecimal name that need to be updated
* permission Permission Updated permission details
* no response value expected for this operation
* */
const updatePermission = ({ permissionid, permission }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        permissionid,
        permission,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createNewPermission,
  deletePermission,
  getAllPermissionDetail,
  getPermissionById,
  updatePermission,
};
