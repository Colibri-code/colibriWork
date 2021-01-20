/**
 * Company.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default',
  identity: 'company',
  tableName: 'companies',

  attributes: {

    id: {
      type: "number",
      columnName: "idcompany",
      columnType: "int",
      required: false,
      autoIncrement: true,
      unique: true,
    },

    userAcessAdmin: {
      type: "string",
      columnName: "userAcessAdmin",
      columnType: "varchar(20)",
      required: true,
    },

    nameCompany: {
      type: "string",
      columnName: "companyName",
      columnType: "varchar(50)",
      required: true,
      unique: true,
    },

    legalName: {
      type: "string",
      columnName: "legalName",
      columnType: "varchar(50)",
      required: true,
    },

    address: {
      type: "string",
      columnName: "address",
      columnType: "varchar(100)",
      required: true,
    },

    web: {
      type: "string",
      columnName: "webSite",
      columnType: "varchar(100)",
      required: true,
    },

    email: {
      type: "string",
      columnName: "companyEmail",
      columnType: "varchar(50)",
      required: true,
    },

    phoneNumber: {
      type: "string",
      columnName: "phoneNumber",
      columnType: "varchar(20)",
      required: false,
    },

    size: {
      type: "number",
      columnName: "size",
      columnType: "integer",
      required: false,
    },

    social: {
      type: "string",
      columnName: "social",
      columnType: "varchar(30)",
      required: false,
    },

    projects: {
      type: "string",
      columnName: "projects",
      columnType: "varchar(20)",
      required: false,
    },

    teams: {
      type: "string",
      columnName: "teams",
      columnType: "varchar(20)",
      required: false,
    },

    //Relationships
    users: {
      //an company can have multiple users but a user will only have one company to belong
      collection: "user",
      via: "company",
    },

  },

};

