const Client = require('../models/client');
module.exports = async(req, res) => {
    try {
        console.log('inside get all clients');
        const result = await Client.find();
        console.log(result);
        res.render('allClients', { clients: result ,title : 'All Clients'});
      
        
    } catch (error) {
        console.log(error);
    }
};