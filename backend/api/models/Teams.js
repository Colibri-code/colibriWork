/**
 * Teams.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.export = {
  datastore: "default",

  attributes: {

    TeamName: {

      type: 'string',
      columnName: 'TeamName',
      columnType: 'varchar(50)',
      required: true
    },
  },

};

