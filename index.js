const express = require('express');
const app = express();  
const PORT = process.env.PORT || 3030;


const mongoose  = require('mongoose')
app.use(express.json())
app.use(express.static('public'));

// app.listen(PORT, () => {
//     console.log(`server started on port ${PORT}`);
//   });

// const { MongoClient, ServerApiVersion } = require('mongodb');
const addClient = require('./controllers/addClient');
const addClientControllerToView = require('./controllers/addClientControllerToView');
const getAllClients = require('./controllers/getAllClients');
const getClientController = require('./controllers/getClientController');
const transferController = require('./controllers/transfer');
const homeController = require('./controllers/homeController');


const DbURI = 'mongodb+srv://ibrahim:ibrahim1234@student.lmygtpz.mongodb.net/BankDB?retryWrites=true&w=majority'
mongoose.connect(DbURI,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => app.listen(PORT, () => {
        console.log(`server started on port ${PORT}`);
      }))
    .catch(err => console.log(err)
)





app.use(express.static('public') )
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}));

app.get("/addClient", addClientControllerToView);

app.post("/addClient", addClient);
app.get('/',getAllClients);
app.get('/clients/:id',getClientController);

app.post('/transfer', transferController);

app.get('/home', homeController);  