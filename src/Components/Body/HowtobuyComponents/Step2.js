import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import { getAllToken } from '../../../api';
import step2 from '../../../images/step2HTB.png'

const Step2 = () => {
    const [token, setToken] = useState([]);


    useEffect(()=>{
        getAllToken()
          .then(response => {
            setToken(response.data)
          })
          .catch(err => alert("Something went wrong!"))
        //{phase.month} {phase.date}, {phase.year} {phase.hour}:{phase.minute}:{phase.second}
        
      },[]) 
    return (
        <div class="container">
            <div class="row" >
                <div className="col-lg-6 col-md-12 col-sm-12">
                <p style={{color: "#000000", textAlign: "start"}}><b>Step 2: Add Impact Token to the Wallet </b></p>
                <p style={{color: "#000000", textAlign: "start"}}>Tap the icon in the top-right and search for <b>"Impact Token"</b> If it's not there, tap <b>"Add Custom Token".</b> Change the Network to <b>"Smart Chain"</b> Copy below Impact Token contract address and paste it in the Contract Address box. Next, put <b>"Impact Token"</b> as the name, and the symbol as <b>‘’IMP’’</b>. Decimals will be 9. Click <b>"Done"</b> at the top and you should now have Impact Token added to your wallet!</p>

                <div class="input-group mb-3">
                {token.map(item => (
                    item.tokenPage == "howtobuy"?
                    <>
                <b className="HTBaddress">Address</b><input type="text" value={item.tokenNo} class="form-control" placeholder="0xe4DF421286fDD2cE2eF9E766e2E0Bc6D3217082a" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <div class="input-group-append">
                    <button onClick={() => {navigator.clipboard.writeText(item.tokenNo)}} class="btn btn-info" id="copybtn" type="button">Copy</button>
                </div>
                    </>
                    :""
                ))}
                
                </div>

                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                <img className="step1HTB" src={step2} alt="step 1"/>
                </div>
            </div>
        </div>
    )
}

export default Step2;