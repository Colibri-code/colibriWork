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
    
    'GET /ProfileDesigner/get':{controller:"OrganizationController", action: "get"},
    'POST /ProfileDesigner/create': {controller:"OrganizationController",action"create"},
    'PUT /ProfileDesigner/update/:id':{controller: "OrganizationController",action:"update"},
    'DELETE /ProfileDesigner/delete/:id':{controller" OrganizationController",action:"delete"} 
      


      
};
