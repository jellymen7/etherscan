import axios from 'axios'
import { useState } from 'react'



function Ca({ caData }) {
    //const [block, setBlock] = useState(0);





    return (
        <div>
            <span className="info3">This account is CA : <p></p>

                Contract creator :  {caData[0].from}<p></p>
                Number of Transaction : {caData.length}



            </span>
            <div style={{ marginLeft: '3em' }}>
                TXN:<p></p>
                {caData.map((a) => { return <span key={a.hash}>hash:{a.hash}<p></p>Address from:{a.from}<p></p></span> })}
            </div>
        </div>)

}

export default Ca;