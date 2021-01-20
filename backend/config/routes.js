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

    //ProjectManager Routes

    'POST /ProjectManager/Create': { controller: "ProjectManagerController", action: "create" },
    'GET /ProjectManager/Read/:id': { controller: "ProjectManagerController", action: "read" },
    'PATCH /ProjectManager/Update/:id': { controller: "ProjectManagerController", action: "update" },
    'DELETE /ProjectManager/Delete': { controller: "ProjectManagerController", action: "delete" },    

    //Company Routes
    
    'POST /company/Create': { controller: "CompanyController", action: "create" },
    'GET /company/Read/:id': { controller: "CompanyController", action: "read" },
    'PATCH /company/Update/:id': { controller: "CompanyController", action: "update" },
    'DELETE /company/Delete': { controller: "CompanyController", action: "delete" },

    'POST /ProjectManager/Create': { controller: "ProjectManagerController", action: "create" },
    'GET /ProjectManager/Read/:id': { controller: "ProjectManagerController", action: "read" },
    'PATCH /ProjectManager/Update/:id': { controller: "ProjectManagerController", action: "update" },
    'DELETE /ProjectManager/Delete': { controller: "ProjectManagerController", action: "delete" },    
  
};
