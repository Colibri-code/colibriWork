/**
 * contractor.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: 'default',
  identity: 'contractor',
  tableName: 'contractors',

  attributes: {

    billingMethod: {
      type: 'string',
      columnName: 'billingMethod',
      required: false,
      columnType: 'varchar(20)'
    },

    notificacionSetting: {
      type: 'string',
      columnName: 'notificationSetting',
      required: false,
      columnType: 'varchar(10)'
    },
  
    social: {
      type: 'string',
      columnName: 'social',
      required: false,
      columnType: 'varchar(15)'
    },
/*
    //Relationships
    users: {
      //an contractor can have multiple users but a user will only have one contractor to belong
      collection: "user",
      via: "contractor",
    },

    companies: {
      //an contractor can have multiple companies but a companies will only have one contractor to belong
      collection: "company",
      via: "contractor",
    },

    supports: {
      //an contractor can have multiple companies but a companies will only have one contractor to belong
      collection: "support",
      via: "contractor",
    },
*/
  }

};

