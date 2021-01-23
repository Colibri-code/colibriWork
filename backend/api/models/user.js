/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datastore: "default",
  identity: 'user',
  tableName: 'users',

  /**Fields BD */
  attributes: {

    firstName: {
      type: "string",
      required: false,
      columnName: "firstName",
      columnType: "varchar(50)"
    },

    secondName: {
      type: "string",
      required: false,
      columnName: "secondName",
      columnType: "varchar(45)"
    },

    password: {
      type: 'string',
      columnName: "password",
      columnType: "varchar(200)",
      encrypt: true
    },

    email: {
      type: "string",
      columnName: "userEmail",
      columnType: "varchar(50)",
      required: true,
      unique: true,
      isEmail: true
    },

    picture: {
      type: "string",
      columnName: "picture",
      columnType: "MEDIUMBLOB",
      required: false
    },

    headline: {
      type: "string",
      required: false,
      columnName: "headline",
      columnType: "varchar(200)",
    },

    profile: {
      type: "string",
      required: false,
      columnName: "profile",
      columnType: "varchar(200)"
    },
    
    location: {
      type: "string",
      required: false,
      columnName: "location",
      columnType: "varchar(20)",
    },
    
    phoneNumber: {
      type: "string",
      columnName: "phoneNumber",
      columnType: "varchar(20)",
      required: false,
    },
    
    message: {
      type: "string",
      columnName: "message",
      columnType: "varchar(150)",
      required: false,
    },
    
    alerts: {
      type: "string",
      columnName: "alerts",
      columnType: "varchar(150)",
      required: false,
    },
    
    //Relationships

    company: {
      //user will only have one company to belong
      model: "company",
    },

    contractor: {
      //user will only have one contractor to belong
      model: "contractor",
    },

    ProjectManager: {
      collection: 'ProjectManager',
      via: 'owner',
    },
    /*
    profiles:{
      collection:"profile",
      via:"owner"
    },
    */
  },

};
