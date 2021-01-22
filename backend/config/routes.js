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
    
    'GET /api/controllers':'OrganizationController.get',
    'POST /api/controllers': 'OrganizationController.create',
    'PUT /api/controllers/:id': 'OrganizationController.update',
    'DELETE /api/controllers/:id': 'OrganizationController.delete'   
  
};
