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
    
    'POST /company/Create': { controller: "CompanyController", action: "create" },
    'GET /company/Read/:id': { controller: "CompanyController", action: "read" },
    'PATCH /company/Update/:id': { controller: "CompanyController", action: "update" },
    'DELETE /company/Delete': { controller: "CompanyController", action: "delete" },

    'POST /ProjectManager/Create': { controller: "ProjectManagerController", action: "create" },
    'GET /ProjectManager/Read/:id': { controller: "ProjectManagerController", action: "read" },
    'PATCH /ProjectManager/Update/:id': { controller: "ProjectManagerController", action: "update" },
    'DELETE /ProjectManager/Delete': { controller: "ProjectManagerController", action: "delete" }, 

    'GET /ProfileDesigner/get':{controller:"OrganizationController", action: "get"},
    'POST /ProfileDesigner/create': {controller:"OrganizationController",action"create"},
    'PUT /ProfileDesigner/update/:id':{controller: "OrganizationController",action:"update"},
    'DELETE /ProfileDesigner/delete/:id':{controller" OrganizationController",action:"delete"},
     
    'POST /user/Create': { controller: "UserController", action: "create" },
    'GET /user/Read/:id': { controller: "UserController", action: "read" },
    'PATCH /user/Update/:id': { controller: "UserController", action: "update" },
    'DELETE /user/Delete/:id': { controller: "UserController", action: "delete" }, 

  
};
