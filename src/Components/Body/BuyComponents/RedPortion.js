import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { getAllToken } from "../../../api";

const RedPortion = () => {
    const [token, setToken] = useState([]);


    useEffect(()=>{
        getAllToken()
          .then(response => {
            setToken(response.data)
          })
          .catch(err => alert("Something went wrong!"))
        //{phase.month} {phase.date}, {phase.year} {phase.hour}:{phase.minute}:{phase.second}
        
      },[]) 
    return(
        <div className="redportionDivBuy" >
            <div>
                <p className="redportionp1"><b>Distributed Wallet Address</b>
                {token.map(item => (
                    item.tokenPage == "buy"?
                    <>
                    <input type="text" className="redpotionBuyinput" value={item.tokenNo}/>
                    <button onClick={() => {navigator.clipboard.writeText(item.tokenNo)}} id="copybtnRedPotionBuy" className="btn btn-light">copy</button>
                    </>
                    :""
                ))}
                
               {/*&nbsp;&nbsp;0xe4DF421286fDD2cE2eF9E766e2E0Bc6D3217082a&nbsp;&nbsp;&nbsp;&nbsp;*/}  
                
                </p>

                <p className="redportionp1">
                In order to participate in the presale, 
                you would need to <b>send</b> your BNB/BUSD 
                to the <b>Distribution</b> wallet and make sure to use the 
                same address to claim your <b>Impact token</b>.

                </p>
            </div>
        </div>
    );
}
export default RedPortion;