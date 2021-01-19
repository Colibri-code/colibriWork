/**
 * ProjectManager.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datastore: 'default',
  attributes: {

    skills: {
      type: 'string',
      columnType: 'varchar(20)',
      columnName: 'skills',
      required: false,
    },

    experience: {
      type: 'string',
      columnType: 'varchar(45)',
      columnName: 'experience',
      required: false,
    },
    portfolio: {
      type: 'string',
      columnType: 'varchar(45)',
      columnName: 'portfolio',
      required: false,
    },
    availability: {
      type: 'number',
      columnName: 'availability',
      required: false,

    },
    education: {
      type: 'string',
      columnType: 'varchar(20)',
      columnName: 'education',
      required: false,
    },
    certifications: {
      type: 'string',
      columnType: 'varchar(45)',
      columnName: 'certifications',
      required: false,
    },
    employment: {
      type: 'string',
      columnType: 'varchar(20)',
      columnName: 'employment',
      required: false,
    },
    timeZone: {
      type: 'number',
      columnName: 'timeZone',
      required: false,
    },
    experience: {
      type: 'string',
      columnType: 'varchar(20)',
      columnName: 'experience',
      required: false,
    },
    ratePerHour: {
      type: 'number',
      columnName: 'Rate_per_Hour',
      required: false,
    },

    owner: {
      model: 'user',
    }

  },

};

