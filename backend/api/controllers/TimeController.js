/**
 * TimeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: async function (req, res) {
        try {
            const newTime = await Time
                .create({ ...req.body, owner: req.user })
                .fetch();
            res.send({ Time: newTime });

        } catch (error) {
            res.serverError(error);
            console.log(error);
        }


    },


    update: async function (req, res) {
        try {
            const timeUpdated = await Time
                .update({ id: req.param.id, owner: req.user })
                .set(req.body)
                .fetch();
            res.send({ time: timeUpdated });
        } catch (error) {
            res.serverError();
        }

    },
    delete: async function (req, res) {
        if (req.params.id != undefined) {
            const deletedTime = await Time.destroyOne(req.params.id);
            return res.json(deletedTime);
        } else {
            return res.send("invalid input");
        }
    },
    read: async function (req, res) {
        if (req.params.id != undefined) {
            const readTime = await Time.findOne(req.params.id);
            return res.json(readTime);
        } else {
            return res.send("invalid input");
        }

    },

};

