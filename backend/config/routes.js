/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  //User Routers
  'POST /user/create':{controller:'UserController', action:'create', cors: {
    allowOrigins: ['http://localhost:1337'],
    allowCredentials: false
  }},

  //Contractor Routes
  
  'POST /contractor/Create': { controller: "ContractorController", action: "create" },
  'GET /contractor/Read/:id': { controller: "ContractorController", action: "read" },
  'PATCH /contractor/Update/:id': { controller: "ContractorController", action: "update" },
  'DELETE /contractor/Delete': { controller: "ContractorController", action: "delete" },

  //ProjectManager Routes

  'POST /ProjectManager/Create': { controller: "ProjectManagerController", action: "create" },
  'GET /ProjectManager/Read/:id': { controller: "ProjectManagerController", action: "read" },
  'PATCH /ProjectManager/Update/:id': { controller: "ProjectManagerController", action: "update" },
  'DELETE /ProjectManager/Delete': { controller: "ProjectManagerController", action: "delete" },

//User Routes
  'POST /user/create':{controller:'UserController', action:'create'},
  'GET /user/read/:id':{controller:'UserController', action:'read'},
  'PATCH  /user/update/:id':{controller:'UserController', action:'update'},
  'DELETE /user/delete/:id': {controller: "UserController", action: "delete"},

//Team Routes
  'POST /team/create':{controller:'TeamsController', action:'create'},
  'GET /team/read/:id':{controller:'TeamsController', action:'read'},
  'PATCH  /team/update/:id':{controller:'TeamsController', action:'update'},
  'DELETE /team/delete/:id': {controller: "TeamsController", action: "delete"},

  //Company Routes
  
  'POST /company/Create': { controller: "CompanyController", action: "create" },
  'GET /company/Read/:id': { controller: "CompanyController", action: "read" },
  'PATCH /company/Update/:id': { controller: "CompanyController", action: "update" },
  'DELETE /company/Delete': { controller: "CompanyController", action: "delete" },
};
