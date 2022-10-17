const axios = require('axios');
const dotenv = require('dotenv')
dotenv.config();

module.exports = async (req, res) => {
    const { id } = req.params;
    await axios
        .get(
            ` https://api-goerli.etherscan.io/api?module=transaction&action=getstatus&txhash=${id}&apikey=${process.env.APIKEY}`)
        .then((result) => {
            res.status(200).send(result.data.result)
            console.log(result.data.result)
        })
}

