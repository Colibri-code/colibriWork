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

    'GET /api/controllers':'OrganizationController.get',
    'POST /api/controllers': 'OrganizationController.create',
    'PUT /api/controllers/:id': 'OrganizationController.update',
    'DELETE /api/controllers/:id': 'OrganizationController.delete'   
  
};
