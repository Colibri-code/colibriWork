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

    //Contract Routes
    
    'POST /contractor/Create': { controller: "ContractorController", action: "create" },
    'GET /contractor/Read/:id': { controller: "ContractorController", action: "read" },
    'PATCH /contractor/Update/:id': { controller: "ContractorController", action: "update" },
    'DELETE /contractor/Delete': { controller: "ContractorController", action: "delete" },

};
