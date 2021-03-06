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

<<<<<<< HEAD
  'POST /user/login':{controller:'UserController', action:'login', cors: {
    allowOrigins: ['http://localhost:1337'],
    allowCredentials: false
  }},

  //Contractor Routes
  
  'POST /contractor/Create': { controller: "ContractorController", action: "create" },
  'GET /contractor/Read/:id': { controller: "ContractorController", action: "read" },
  'PATCH /contractor/Update/:id': { controller: "ContractorController", action: "update" },
  'DELETE /contractor/Delete': { controller: "ContractorController", action: "delete" },

=======
>>>>>>> f0b1bfdf2051ce1e5c85b9f24b3322b41b0cb8ec
  //ProjectManager Routes

  'POST /ProjectManager/Create': { controller: "ProjectManagerController", action: "create" },
  'GET /ProjectManager/Read/:id': { controller: "ProjectManagerController", action: "read" },
  'PATCH /ProjectManager/Update/:id': { controller: "ProjectManagerController", action: "update" },
  'DELETE /ProjectManager/Delete': { controller: "ProjectManagerController", action: "delete" },

//User Routes
<<<<<<< HEAD
  'POST /user/create':{controller:'UserController', action:'create'},
  'POST /user/login':{controller:'UserController', action: 'login'},
  'GET /user/read/:id':{controller:'UserController', action:'read'},
  'PATCH  /user/update/:id':{controller:'UserController', action:'update'},
  'DELETE /user/delete/:id': {controller: "UserController", action: "delete"},
=======
  'POST /user/Create':{controller:'UserController', action:'create'},
  'GET /user/Read/:id':{controller:'UserController', action:'read'},
  'PATCH  /user/Update/:id':{controller:'UserController', action:'update'},
  'DELETE /user/Delete/:id': {controller: "UserController", action: "delete"},
  'POST /user/Login':{controller: "UserController", action:"login"},
>>>>>>> f0b1bfdf2051ce1e5c85b9f24b3322b41b0cb8ec

//Team Routes
  'POST /team/Create':{controller:'TeamsController', action:'create'},
  'GET /team/Read/:id':{controller:'TeamsController', action:'read'},
  'PATCH  /team/Update/:id':{controller:'TeamsController', action:'update'},
  'DELETE /team/Delete/:id': {controller: "TeamsController", action: "delete"},

  //Company Routes

  'POST /company/Create': { controller: "CompanyController", action: "create" },
  'GET /company/Read/:id': { controller: "CompanyController", action: "read" },
  'PATCH /company/Update/:id': { controller: "CompanyController", action: "update" },
  'DELETE /company/Delete': { controller: "CompanyController", action: "delete" },

  //Project Routes

  'POST /project/Create': { controller: "ProjectController", action: "create" },
  'GET /project/Read/:id': { controller: "ProjectController", action: "read" },
  'PATCH /project/Update/:id': { controller: "ProjectController", action: "update" },
  'DELETE /project/Delete': { controller: "ProjectController", action: "delete" },

  //Designer Routes
  'POST /designer/Create': { controller: "ProfileDesignerController", action: "create" },
  'GET /designer/Read/:id': { controller: "ProfileDesignerController", action: "read" },
  'PATCH /designer/Update/:id': { controller: "ProfileDesignerController", action: "update" },
  'DELETE /designer/Delete/:id': { controller: "ProfileDesignerController", action: "delete" },

  //Contractor Routes

  'POST /contractor/Create': { controller: "ContractorController", action: "create" },
  'GET /contractor/Read/:id': { controller: "ContractorController", action: "read" },
  'PATCH /contractor/Update/:id': { controller: "ContractorController", action: "update" },
  'DELETE /contractor/Delete': { controller: "ContractorController", action: "delete" },

  //Time Routes
  'POST /time/Create': { controller: "TimeController", action: "create" },
  'GET /time/Read/:id': { controller: "TimeController", action: "read" },
  'PATCH /time/Update/:id': { controller: "TimeController", action: "update" },
  'DELETE /time/Delete/:id': { controller: "TimeController", action: "delete" },

};
