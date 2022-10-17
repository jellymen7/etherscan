const dotenv = require('dotenv')
const express = require('express')
const app = express();
const port = 8080;
const cors = require('cors')
dotenv.config();

const Accountrouter = require('./controller/Accountrouter');
const Mainrouter = require('./controller/Mainrouter')
const TransactionHash = require('./controller/TransactionHash');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "OPTIONS"]
}))
app.get('/', Mainrouter);
app.get('/account/:id', Accountrouter);  //CA계정 조회
app.get('/transaction/:id', TransactionHash)// Transaction 조회

app.listen(port, () => {
    console.log('Server is running')
})
module.exports = app;