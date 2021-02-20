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
      res.send(error);
      res.serverError("Invalid Data");
    }
  },

  /**
 * Get user info to Database with (id) parameter
 */
  read: async function (req, res) {

    if (req.params.id) {
      const data = await user.findOne({
        where: { id: req.params.id },
        select: ["createdAt", "updatedAt", "id", "email", "password", "firstName", "secondName", "picture", "headline", "profile", "location", "phoneNumber", "message", "alerts"],
      });
      res.json({ user: data });
    } else {
      res.notFound();
    }
  },

  /**
 * Update user info to Database with (id) parameter
 */
  update: async function (req, res) {
    try {
      const data = await user.update(req.params.id).set(req.body).fetch();
      res.send({ user: data });
    } catch (error) {
      console.log(error);
      res.badRequest();
    }
  },

  /**
 * Delete user info to Database with (id) parameter
 */
  delete: async function (req, res) {
    try {
      await user.destroyOne(req.params.id);
      res.send();
    } catch (error) {
      res.badRequest();
    }
  },

<<<<<<< HEAD
  /**
 * Login user: Validate User email and password
 */
=======
>>>>>>> f0b1bfdf2051ce1e5c85b9f24b3322b41b0cb8ec
  login: async function (req, res) {
    try {
      const loggedUser = await user
        .findOne({ email: req.body.email })
        .decrypt();
<<<<<<< HEAD
      if (!loggedUser) return res.notFound();
      if (loggedUser.password !== req.body.password) return res.notFound();
     
      const token = await sails.helpers.generateAuthToken(loggedUser.id);
      res.send({ user: loggedUser, token });
    } catch (error) {
      res.serverError("Invalid Data");
    }
  },
=======

      if (!loggedUser)

      return res.notFound();
      if (loggedUser.password !== req.body.password)

      return res.notFound();
      res.send({ user: loggedUser });

    } catch (error) {

      res.serverError("Invalid Data");
    }
  },


>>>>>>> f0b1bfdf2051ce1e5c85b9f24b3322b41b0cb8ec

};

