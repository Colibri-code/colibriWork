const ProjectManager = require("./ProjectManager");

module.export = {
  datastore: "default",
  /**Fields BD */
  attributes: {

    email: {

      type: 'string',
      columnName: 'id',
      columType: 'int',
      autoIncrement: true,
      unique: true,
      require: true
    },

    password: {

      type: 'string',
      columnName: "password",
      columnType: "varchar(200)",
      encrypt: true
    },

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
    ProjectManager: {
      collection: 'ProjectManager',
      via: 'owner',
    },


  },
};
