/**
 * ContractorControllerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    // create a contractor
    create: async function (req, res) {
        try {
          const newContractor = await contractor
            .create({ ...req.body, owner: req.user })
            .fetch();
          res.send({ contractor: newContractor });
        } catch (error) {
          res.serverError(error);
        }
    },

    read: async function (req, res) {
        try {
          const Contractor = await contractor.findOne(req.params.id).populate("owner");
          if (!Contractor) return res.notFound();
          res.send({ contractor: Contractor });
        } catch (error) {
          res.serverError(error);
        }
    },

    update: async function (req, res) {
        try {
          const contractorUpdated = await contractor
            .update({ id: req.params.id, owner: req.user })
            .set(req.body)
            .fetch();
          res.send({ contractor: contractorUpdated });
        } catch (error) {
          res.serverError();
        }
    },

    delete: async function (req, res) {
        if (req.params.id != undefined) {
          const deletedContractor = await contractor.destroyOne(req.params.id);
          return res.json(deletedContractor);
        } else {
          return res.send("invalid input");
        }
    },

};

