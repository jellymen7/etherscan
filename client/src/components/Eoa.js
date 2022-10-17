
function Eoa({ eoaData, etherData }) {


    console.log(eoaData)
    console.log(etherData)
    return (
        <div>
            <span className="info3">This account is EOA
                <p></p>
            </span>
            <div className="info2">
                <span>
                    Balance : {eoaData}<p></p>

                </span>
            </div>
        </div>)
}

export default Eoa;