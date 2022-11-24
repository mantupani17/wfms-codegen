/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Create role
* This can only be done by the superadmin user.
*
* role Role Created role object
* no response value expected for this operation
* */
const createRole = ({ role }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        role,
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
* roleid Integer The name that needs to be deleted
* no response value expected for this operation
* */
const deleteRole = ({ roleid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        roleid,
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
* Get role by role id
*
* roleid Integer The id that needs to be fetched.
* returns Role
* */
const getRoleById = ({ roleid }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        roleid,
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
* Updated role
* This can only be done by the superadmin.
*
* roleid BigDecimal name that need to be updated
* role Role Updated role details
* no response value expected for this operation
* */
const updateRole = ({ roleid, role }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        roleid,
        role,
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
  createRole,
  deleteRole,
  getRoleById,
  updateRole,
};
