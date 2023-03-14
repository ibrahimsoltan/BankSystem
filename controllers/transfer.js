const Client = require('../models/client');
module.exports = async (req, res) => {
    try{
        console.log('inside transfer');
        const {fromAccount, toAccount, amount} = req.body;
        console.log(fromAccount);
        console.log(toAccount);
        console.log(amount);
        fromClient = await Client.findById(fromAccount);
        toClient = await Client.findById(toAccount);
        Number(fromClient.balance);
        Number(amount);
        Number(toClient.balance);
        console.log(fromClient.balance);
        console.log(amount);
        console.log(toClient.balance);
        fromClient.balance -= amount;
        toClient.balance += amount;
        var num ;
        Number(num) = amount + 100;
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

