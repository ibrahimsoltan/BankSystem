const Client = require('../models/client');

module.exports = async (req, res) => {
    try {
        console.log('inside transfer');
        let { fromAccount, toAccount, amount } = req.body;
        let fromClient = await Client.findById(fromAccount);
        let toClient = await Client.findById(toAccount);
        fromClient.balance = parseInt(fromClient.balance);
        amount = parseInt(amount);
        toClient.balance = parseInt(toClient.balance);
        console.log(fromClient.balance);
        console.log(amount);
        console.log(toClient.balance);

        
        fromClient.balance -= amount;
        toClient.balance += amount;

        await fromClient.save();
        await toClient.save();
        res.redirect('/');

    } catch (error) {
        console.log(error);
    }
}
