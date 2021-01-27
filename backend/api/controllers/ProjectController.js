/**
 * ProjectController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    // create a project
    create: async function (req, res) {
        try {
          const newProject = await project
            .create({ ...req.body, owner: req.user })
            .fetch();
          res.send({ project: newProject });
        } catch (error) {
          res.serverError(error);
        }
    },

    read: async function (req, res) {
        try {
          const Project = await project.findOne(req.params.id).populate("owner");
          if (!Project) return res.notFound();
          res.send({ project: Project });
        } catch (error) {
          res.serverError(error);
        }
    },

    update: async function (req, res) {
        try {
          const projectUpdated = await project
            .update({ id: req.params.id, owner: req.user })
            .set(req.body)
            .fetch();
          res.send({ project: projectUpdated });
        } catch (error) {
          res.serverError();
        }
    },

    delete: async function (req, res) {
        if (req.params.id != undefined) {
          const deletedProject = await project.destroyOne(req.params.id);
          return res.json(deletedProject);
        } else {
          return res.send("invalid input");
        }
    },

};

