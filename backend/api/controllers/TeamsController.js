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
    const data = await user.findOne({
      where: { id: req.params.id },
      select: ["createdAt","updatedAt","id"],
    });
    res.json({ user: data });
  } else {
    res.notFound();
  }
},
};

