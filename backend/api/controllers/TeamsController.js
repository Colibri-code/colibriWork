/**
 * TeamsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  /**
 * Create teams into Database
 */

  create: async function (req, res) {
    try {
      if (!req.body.NameTeam)

        return res.serverError("Invalid Data");

      const newTeam = await Teams.create(req.body).fetch();
      res.send({ team: newTeam });

      console.log(req.body.NameTeam);

    } catch (error) {

      res.serverError("Invalid Data");
    }
  },

  /**
 * Get teams info to Database
 */
  read: async function (req, res) {

    if (req.params.id) {
      const data = await Teams.findOne({
        where: { id: req.params.id },
        select: ["createdAt", "updatedAt", "id", 'NameTeam'],
      });
      res.json({ teams: data });
    } else {
      res.notFound();
    }
  },

  /**
  * Update teams info to Database with (id) parameter
  */
  update: async function (req, res) {
    try {
      if (!req.params.id) {
        return res.send("Invalid Data");
      } else {
        const data = await Teams.findOne({
          where: { id: req.params.id },
          select: ["createdAt", "updatedAt", "id", 'NameTeam'],
        });
        if(req.params.id != data.id){
          return res.send("Id not found");
        }else{
          const data = await Teams.update(req.params.id).set(req.body).fetch();
          res.send({ team: data });
        }
      }

    } catch (error) {
      res.badRequest();
    }
  },

  /**
 * Delete user info to Database with (id) parameter
 */
  delete: async function (req, res) {
    try {
      if (!req.params.id)

        return res.serverError("Invalid Data");
      else {

        await Teams.destroyOne(req.params.id);

        res.send({ message: 'User are deleted' });
      }

    } catch (error) {
      res.badRequest();
    }
  },
};

