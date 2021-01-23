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

  //User Routes
    'POST /user/Create':{controller:'UserController', action:'create'},
    'GET /user/Read/:id':{controller:'UserController', action:'read'},
    'PATCH  /user/Update/:id':{controller:'UserController', action:'update'},
    'DELETE /user/Delete/:id': {controller: "UserController", action: "delete"},

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

    //Designer Routes
    'POST /designer/Create': { controller: "ProfileDesignerController", action: "create" },
    'GET /designer/Read/:id': { controller: "ProfileDesignerController", action: "read" },
    'PATCH /designer/Update/:id': { controller: "ProfileDesignerController", action: "update" },
    'DELETE /designer/Delete/:id': { controller: "ProfileDesignerController", action: "delete" },

};
