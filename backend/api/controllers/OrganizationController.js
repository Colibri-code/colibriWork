/**
 * OrganizationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  	get: function(req,res){
  		Organization.find()
  		.then(function(skills){
  			if(!skills || skills.length ==0){
  				return res.send({
  					'success': false,
  					'message': 'No records found'
  				})
  			}
  			return res.send({
  				'success': true,
  				'message': 'Records fetched',
  				'data': skills
  			})

  		})
  		.catch(function(err){
  			sails.log.debug(err)
  			return res.send({
  				'success': false,
  				'message': 'Unable to fetch records'
  			})
  		})
    }
    create: function(req,res){
    	sails.log.debug(req.allParams())
    	Organization.create(req.allParams())
    		.then(function(Organization){
    			return res.send({
    				'success': true,
    				'message': 'Record created successfully'
    			})
    		})
    		.catch(function(errr)){
    			sails.log.debug(err)
    			return res.send({
    				'success': false,
    				'message': 'Unable to create record'
    			})
    		}
    }
    update: function(req,res){
    	sails.log.debug(req.param('id'))
    	Organization.update(req.param('id'), req.allParams())
    		.then(function(Organization){
    			return res.send({
    				'success': true,
    				'message': 'Record Update',
    				'data': Organization
    			})
    		})
    		.catch(function(err){
    			sails.log.debug(err)
    			return res.send({
    				'success': false,
    				'message': 'Unable to update record'
    			})
    		})

    }
    delete: function(req,res){
    	Organization.destroy(req.param('id'))
    		.then(function(Organization){
    			return res.send({
    				'success':true,
    				'message':'Record deleted successfully',
    				'data': Organization
    			})
    		})
    		.catch(function(err){
    			sails.log.debug(err)
    			return res.send({
    				'success': false,
    				'message': 'Unable to delete record'
    			})
    		})
    }

};

