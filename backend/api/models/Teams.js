/**
 * Teams.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: "default",

  attributes: {

    NameTeam: {

      type: 'string',
      columnName: 'NameTeam',
      columnType: 'varchar(50)',
      required: true
    }
  }

};

