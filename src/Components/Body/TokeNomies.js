import mainCircle from '../../images/circleNew/mainCircle.png'
import burn from '../../images/circleNew/burn.png'
import investment from '../../images/circleNew/investment.png'
import aid from '../../images/circleNew/aid.png'
import marketing from '../../images/circleNew/marketing.png'
import presale from '../../images/circleNew/presale.png'
import publicPic from '../../images/circleNew/public.png'
import { useEffect, useState } from 'react'
import { getAllHomeHead } from '../../api'

const TokeNomies = ()=> {
    const [active, setActive] = useState('totalsupply')
    const [head, setHead] = useState([]);
    var headRename;

    useEffect(()=>{
        getAllHomeHead()
          .then(response => {
            setHead(response.data)
          })
          .catch(err => alert("Something went wrong!"))
      },[])

   
    return(    
          
        <div className="container-fluid">
            {/*unused Component*/} 
            <div className="row">
               
            {head.map((item) => {
                if(item.homeHead == "Tokenomies"){
                    headRename = item.homeHeadRename;
                }
            })}
        <div className="tokenomies">
            <p className="TokemoniesHead" onClick={()=>setActive('totalsupply')}>{headRename}</p>
            <div className="col-lg-7 col-md-12 col-sm-12" style={{float: "right"}}>
            {active === 'totalsupply' ?
                <div className="totalsupply">
                    <img className="totalsupplyimage" src={mainCircle} alt="totalsupply"/>
                </div>
                : ""
            }
             {active === 'Burn' ?
                <div className="totalsupply">
                    <img className="totalsupplyimage1" src={burn} alt="Burn"/>
                </div>
                : ""
            }

            {active === 'Marketing' ?
                <div className="totalsupply">
                    <img className="totalsupplyimage2" src={marketing} alt="marketing"/>
                </div>
                : ""
            }

            {active === 'Aid' ?
                <div className="totalsupply">
                    <img className="totalsupplyimage1" src={aid} alt="aid"/>
                </div>
                : ""
                }

                {active === 'Privet' ?
                <div className="totalsupply">
                    <img className="totalsupplyimage1" src={investment} alt="investor"/>
                </div>
                : ""
                }

            {active === 'Presale' ?
                <div className="totalsupply">
                    <img className="totalsupplyimage1" src={presale} alt="investor"/>
                </div>
                : ""
                }

            {active === 'Public' ?
                <div className="totalsupply">
                    <img className="totalsupplyimage" src={publicPic} alt="investor"/>
                </div>
                : ""
                }
          </div>
        
          <div className="col-lg-5 col-md-12 col-sm-12">
            <div className="flex-container-tokenomies">
                <div className="flex-item-tokenomies">
                    <button className="tokemMoniesButton" onClick={()=>setActive('Burn')} style={{ backgroundColor: "#BB2205"}}>Burn 150</button>
                </div>
                <div className="flex-item-tokenomies">
                    <button className="tokemMoniesButton" onClick={()=>setActive('Marketing')} style={{ backgroundColor: "#01937C"}}>Marketing 50</button>
                </div>
                <div className="flex-item-tokenomies">
                    <button className="tokemMoniesButton" onClick={()=>setActive('Aid')} style={{backgroundColor: "#01937C"}}>AiD 100</button>
                </div>
                <div className="flex-item-tokenomies">
                    <button className="tokemMoniesButton" onClick={()=>setActive('Privet')} style={{ backgroundColor: "#035397"}}>Privet Investor</button>
                </div>
                <div className="flex-item-tokenomies">
                    <button className="tokemMoniesButton" onClick={()=>setActive('Presale')} style={{backgroundColor: "#035397"}}>Presale: 200</button>
                </div>
                <div className="flex-item-tokenomies">
                    <button className="tokemMoniesButton" onClick={()=>setActive('Public')} style={{ backgroundColor: "#035397"}}>Public: 400</button>
                </div>
                </div>
                <div>
                    <p className="underbuttonstokemonies">NB. Private investment will be locked for a year</p>
                   
                </div>
               
            </div>
          
            <div>  
    
              
              
            </div>
            <div >
            
            </div>
           
            <br/><br/><br/><br/><br/>
            <div>
                
                <p style={{fontFamily: "'Poppins Light', 'sans-serif'", 
                color: "#000000", marginLeft: "25px"
                }}> All transactions will have following tax</p>
            <ul class="c">
                      
                        <li style={{marginLeft: "10px"}}>4% Aid Wallet</li>
                        <li>2% Liquidity</li>
                        <li style={{marginRight: "10px"}}>1% Holder</li>
                </ul>
                </div>
                <br/> <br/>
        </div>
        </div>
        </div>
    );
}

export default TokeNomies;