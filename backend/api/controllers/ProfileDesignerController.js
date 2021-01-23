/**
 * ProfileDesignerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {

/**
 * Create profile_designer into Database
 */

create: async function (req, res) {
  try {

    const new_Profile_designer = await Profile_designer.create(req.body).fetch();

    res.send({ profile_designer: new_Profile_designer });
  } catch (error) {

    res.serverError("Invalid Data");
    console.log(req.body);
  }
},

/**
* Get profile_designer info to Database with (id) parameter
*/
read: async function (req, res) {

  if (req.params.id) {
    const data = await Profile_designer.findOne({
      where: { id: req.params.id },
      select: ["createdAt","updatedAt","id","skills","experience","availability","timeZone","rate_per_hour","languages","invoices","payments_methods","tax_information", "payments_history","balances","cycle_payments","social"],
    });
    res.json({ user: data });
  } else {
    res.notFound();
  }
},

/**
* Update profile_designer info to Database with (id) parameter
*/
update: async function (req, res) {
  try {
    const data = await Profile_designer.update(req.params.id).set(req.body).fetch();
    res.send({ designer_data: data });
  } catch (error) {
    console.log(error);
    res.badRequest();
  }
},

/**
* Delete profile_designer info to Database with (id) parameter
*/
delete: async function (req, res) {
  try {
    await Profile_designer.destroyOne(req.params.id);
    res.send();
  } catch (error) {
    res.badRequest();
  }
},
};

