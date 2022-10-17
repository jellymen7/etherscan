const axios = require('axios');
const dotenv = require('dotenv')
const ethers = require('ethers')
dotenv.config();

module.exports = async (req, res) => {
    const { id } = req.params;
    try {
        Promise.all([getTxn(), getBalance()]).then(function (result) {
            console.log(result[0].data.result)
            if (result[0].data.result[0].to === '') {
                // console.log(result[0].data)
                res.status(200).send({ ca: result[0].data.result }) //transaction 모음
            } else {
                const balance = ethers.utils.formatEther(result[1].data.result)
                // console.log(balance)
                res.status(200).send({ eoa: balance })
            }
        })
    } catch (err) {
        console.log(err)
    }
    function getTxn() {

        return axios.get(`https://api-goerli.etherscan.io/api?module=account&action=txlist&address=${id}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey${process.env.APIKEY}`);

    }
    function getBalance() {

        return axios.get(`https://api-goerli.etherscan.io/api?module=account&action=balance&address=${id}&tag=latest&apikey=${process.env.APIKEY}`)
    }

}

