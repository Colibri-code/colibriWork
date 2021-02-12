/**
 * Project.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default',
  identity: 'project',
  tableName: 'projects',

  attributes: {

    projectName: {
      type: 'string',
      columnName: 'projectName',
      required: true,
      columnType: 'varchar(40)'
    },

    users: {
      type: 'string',
      columnName: 'users',
      required: false,
      columnType: 'varchar(10)'
      },

    userStatus: {
      type: 'string',
      columnName: 'userStatus',
      required: false,
      columnType: 'varchar(10)'
    },

    teams: {
      type: 'string',
      columnName: 'teams',
      required: false,
      columnType: 'varchar(10)'
    },

    timeLogin: {
      type: 'string',
      columnName: 'timeLogin',
      required: true,
      columnType: 'varchar(10)'
    },

    files: {
      type: 'string',
      columnName: 'files',
      required: false,
      columnType: 'varchar(100)'
    },

    webPage: {
      type: 'string',
      columnName: 'webPage',
      required: false,
      columnType: 'varchar(100)'
    },

    email: {
      type: "string",
      columnName: "email",
      columnType: "varchar(60)",
      required: true,
      isEmail: true
    },

    brief: {
      type: "string",
      columnName: "brief",
      columnType: "varchar(10)",
      required: false
    },

    startDate: {
      type: "ref",
      columnName: "startDate",
      columnType: "dateTime",
      required: false
    },

    endDate: {
      type: "ref",
      columnName: "endDate",
      columnType: "dateTime",
      required: false
    },

  },

};

