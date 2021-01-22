/**
 * ProfileDesigner.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "skills",
  attributes: {
    id:{
      type: "number",
      columnName: "idName",
      columnType: "int",
      required: false,
      autoIncrement: true,
      unique: true,
    },
    portfolio:{
      type: "string",
      columnName:"PortInfo",
      columnType: "varchar(20)",
    },

    education: {
      type: "string",
      columnName:"EduInfo",
      columnType: "varchar(20)",
    },     

    certifications: {
      type: "string",
      columnName:"CertInfo",
      columnType: "varchar(20)",      
    },

    employment:{
      type:"string",
      columnName:"Employment",
      columnType: "varchar(20)",
    },

    experience:{
      type:"string",
      columnName:"Experience",
      columnType: "varchar(20)",
    },

    times:{
      type: "string",
    },

    languages: {
      type: "json",
      columnName: "languages",
      defaultsTo: null,
      columnType: "JSON",
    },
         
    owner:{
      model: "user",
      
    },
   },

};

