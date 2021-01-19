/**
 * ProjectManagerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const ProjectManager = require("../models/ProjectManager");


module.exports = {
   
    create: async function (req, res) {
        try {
            const newProjectManager = await ProjectManager
                .create({ ...req.body, owner: req.user })
                .fetch();
            res.send({ ProjectManager: newProjectManager });

        } catch (error) {
            res.serverError(error);
            console.log(error);
        }


    },


    update: async function (req, res) {
        try {
            const projectManagerUpdated = await ProjectManager
                .update({ id: req.param.id, owner: req.user })
                .set(req.body)
                .fetch();
            res.send({ ProjectManager: projectManagerUpdated });
        } catch (error) {
            res.serverError();
        }

    },
    delete: async function (req, res) {
        if (req.params.id != undefined) {
            const deletedProjectManager = await ProjectManager.destroyOne(req.params.id);
            return res.json(deletedProjectManager);
        } else {
            return res.send("invalid input");
        }
    },
    read: async function (req, res) {
        if (req.params.id != undefined) {
            const readProjectManager = await ProjectManager.findOne(req.params.id);
            return res.json(readProjectManager);
          } else {
            return res.send("invalid input");
          }

    },
    

}


