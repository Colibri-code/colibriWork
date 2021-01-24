/**
 * Profile_designer.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datastore: 'default',
  attributes: {

    skills: {
      type: 'string',
      columnType: 'varchar(250)',
      columnName: 'skills',
      required: false,
    },

    experience: {
      type: 'string',
      columnType: 'varchar(150)',
      columnName: 'experience',
      required: false,
    },
    availability: {
      type: 'string',
      columnType: 'varchar(250)',
      columnName: 'availability',
      required: false,
    },
    timeZone: {
      type: 'string',
      columnType: 'varchar(250)',
      columnName: 'timeZone',
      required: false,
    },

    rate_per_hour: {
      type: 'string',
      columnType: 'varchar(250)',
      columnName: 'rate_per_hour',
      required: false,
    },
    languages: {
      type: 'string',
      columnType: 'varchar(50)',
      columnName: 'languages',
      required: false,
    },
    invoices: {
      type: 'number',
      columnType: 'float',
      columnName: 'invoices',
      required: false,
    },
    payments_methods: {
      type: 'string',
      columnType: 'varchar(50)',
      columnName: 'payments_methods',
      required: false,
    },
    tax_information: {
      type: 'string',
      columnType: 'varchar(250)',
      columnName: 'tax_information',
      required: false,
    },
    payments_history: {
      type: 'string',
      columnType: 'varchar(250)',
      columnName: 'payments_history',
      required: false,
    },
    balances: {
      type: 'number',
      columnType: 'float',
      columnName: 'balances',
      required: false,
    },
    cycle_payments: {
      type: 'string',
      columnType: 'varchar(50)',
      columnName: 'cycle_payments',
      required: false,
    },
    social: {
      type: 'string',
      columnType: 'varchar(50)',
      columnName: 'social',
      required: false,
    },
  },

};

