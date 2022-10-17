
import './App.css';
import Ca from './components/Ca';
import Eoa from './components/Eoa';
import Transacation from './components/Transaction';
import React, { useState } from "react";
import axios from "axios";
import { Button } from 'react-bootstrap';


function Main() {
    const [address, setAddress] = useState(0);
    const [caData, setCaData] = useState(0);
    const [eoaData, setEoaData] = useState(0);
    const [txnData, setTxnData] = useState(undefined);
    const [etherData, setEtherData] = useState(0);

    async function checkEtherButton() {
        await axios.get('http://localhost:8080/').then((result) => {
            setEtherData(result.data.data)
        })

    }
    function handleAddress(e) {

        setAddress(e.target.value);

    }

    async function handleAddressButton() {


        if (address.length === 42) {
            await axios.get(`http://localhost:8080/account/${address}`).then((result) => {
                if (result.data.ca) {
                    setCaData(result.data.ca);
                    console.log(result.data.ca)
                }
                else {
                    setEoaData(result.data.eoa);
                    console.log(result.data.eoa)

                }
            })
        }
        else {

            await axios.get(`http://localhost:8080/transaction/${address}`).then((result) => {
                setTxnData(result.data)
                console.log(result.data)

            })


        }
    }
    return (
        <div>
            <div className='etherscan'>
                <h2>NeitherScan<img className='ethLogo' src={'/logo/logo-etherscan.png'} alt='' /></h2>
                <div className='etherscan2'>

                    {etherData.toLocaleString()}KRW
                    <Button variant="secondary" onClick={checkEtherButton}>
                        <img className='eth' src={'/logo/ethereum-icon.png'} alt='' />
                    </Button>
                    <p></p>
                </div >
                <div>
                    <input
                        className='input'
                        type="text"
                        style={{ textAlign: 'center', width: '200px', height: '28px', letterSpacing: '1px' }}
                        onChange={handleAddress}
                        placeholder="Search by EOA,CA,TXN"></input>
                    <button onClick={handleAddressButton}>Search</button>
                </div>
            </div>
            <p></p>
            <div >
                <h3 className='info'>
                    Information
                </h3>
            </div>
            {txnData == undefined ?
                (caData.length == undefined ?
                    (eoaData.length == undefined ?
                        null : <Eoa eoaData={eoaData} etherdata={etherData} address={address} />) :
                    <Ca caData={caData} />) : <Transacation txnData={txnData} />}

        </div >

    );
};

export default Main;