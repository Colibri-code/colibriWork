/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

/**
 * Create User into Database
 */

  create: async function (req, res) {
    try {
      if (!req.body.password)
      return res.serverError("Invalid Data");
      const newUser = await user.create(req.body).fetch();

      res.send({ user: newUser });
    } catch (error) {

      res.serverError("Invalid Data");
    }
  },

};

