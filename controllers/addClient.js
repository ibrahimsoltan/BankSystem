const Client = require('../models/client');

module.exports = async (req, res) => {
  const { name, balance } = req.body;
  console.log(name, balance);
  const client = new Client(req.body);
  console.log(client);
  try {
    await client.save();
    console.log('client saved');
    res.redirect('/');
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};