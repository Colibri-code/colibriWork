/**
 * Time.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
   
    startTime: {
      type: 'String',
      columnType: 'varchar(20)',
      columnName: 'startTime',
      required: false,
    },
    endTime: {
      type: 'String',
      columnType: 'varchar(20)',
      columnName: 'endTime',
      required: false,
    },
    screenshot: {
      type: 'String',
      columnType: 'varchar(20)',
      columnName: 'screenshot',
      required: false,
    },
    picture: {
      type: 'String',
      columnType: 'varchar(20)',
      columnName: 'picture',
      required: false,
    },
    taskDetail: {
      type: 'String',
      columnType: 'varchar(250)',
      columnName: 'taskDetail',
      required: false,
    },
    owner: {
      model: 'user',
    },

  },

};

