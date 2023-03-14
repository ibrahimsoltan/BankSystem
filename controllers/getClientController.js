const Client = require('../models/client');
module.exports = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    
    const result = await Client.find();
    res.render('clientView', { selectedClient:client , clients:result, title: 'Client Page' });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};