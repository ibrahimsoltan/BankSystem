const Client = require('../models/client');
module.exports = async (req, res) => {
    try{
        console.log('inside transfer');
        const {fromAccount, toAccount, amount} = req.body;
        console.log(fromAccount);
        console.log(toAccount);
        console.log(amount);
        const fromClient = await Client.findById(fromAccount);
        const toClient = await Client.findById(toAccount);
        const amountNumber = Number(amount);

        console.log(fromClient.balance);
        console.log(amountNumber);
        console.log(toClient.balance);
        fromClient.balance -= amountNumber;
        toClient.balance += amountNumber;
        
        var num;
        num = amountNumber + 100;
        console.log(num);
        console.log(fromClient.balance);
        console.log(toClient.balance);

        await fromClient.save();
        await toClient.save();
        res.redirect('/')
        
    }
    catch(error){
        console.log(error);
    }
}