import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { getAllBuyPhase } from "../../../api";


const HeaderBottom = () =>{
    const [phase, setPhase] = useState([]);
    var countDown;
    var now = new Date().getTime();
    var distance;
    var days;
    var hours;
    var seconds;
    var minutes;
    var countDownString;
    
    const scrollHandler = () => {
        window.scrollTo(0, 1150)
    }

    useEffect(()=>{
        getAllBuyPhase()
          .then(response => {
            setPhase(response.data)
          })
          .catch(err => alert("Something went wrong!"))
        //{phase.month} {phase.date}, {phase.year} {phase.hour}:{phase.minute}:{phase.second}
        
      },[]) 
      
      phase.map((phase)=> (
          countDownString = phase.month+" "+parseInt(phase.day)+", "+parseInt(phase.year)+" "+parseInt(phase.hour) +":" +parseInt(phase.min)+":"+parseInt(phase.sec),
        countDown = new Date(countDownString).getTime(),
           //alert(phase.month," ", parseInt(phase.day),",", parseInt(phase.year)," ",parseInt(phase.hour),":",parseInt(phase.min),":",parseInt(phase.sec)),
           //alert(phase.day),
           distance = countDown - now,
       // Time calculations for days, hours, minutes and seconds
        days = Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds = Math.floor((distance % (1000 * 60)) / 1000)
    ))
      
    return(
      
     <div>
       
            <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12"  style={{ padding:"10px"}}>
                            {phase.map((item) => (
                                    item.phaseNo === "1" ? 
                                    (
                                        <>
                                            <div className="buyCovercol1">
                                            <h6 className="buycol1h6">PHASE {item.phaseNo}</h6>
            
                                            <p className="buycol1p1">Token Amount: {item.tokenNo}
                                            <br/> Price: {item.price}
                                            <br/>Tax: {item.tax}
                                            <br/>Min Buy: {item.min_buy} &nbsp;&nbsp;&nbsp;&nbsp; Max Buy:{item.max_buy}</p>
                                        </div>
                                     </>
                                    ): (
                                        
                                        <div className="buyCovercol1">
                                        <h6 className="buycol1h6">PHASE 1</h6>
        
                                        <p className="buycol1p1">Token Amount
                                        <br/> Price
                                        <br/>Tax
                                        <br/>Min Buy &nbsp;&nbsp;&nbsp;&nbsp; Max Buy:</p>
                                    </div>
                                    )
                            )) 
                            }
                           
                            <br/><br/><br/>
                            {phase.map((item) => (
                                    item.phaseNo === "2" ? 
                                    (
                                        <>
                                            <div className="buyCovercol1">
                                            <h6 className="buycol1h6">PHASE {item.phaseNo}</h6>
            
                                            <p className="buycol1p1">Token Amount: {item.tokenNo}
                                            <br/> Price: {item.price}
                                            <br/>Tax: {item.tax}
                                            <br/>Min Buy: {item.min_buy} &nbsp;&nbsp;&nbsp;&nbsp; Max Buy:{item.max_buy}</p>
                                        </div>
                                     </>
                                    ): (
                                        
                                        <div className="buyCovercol1">
                                            <h6 className="buycol1h6">PHASE 2</h6>

                                            <p className="buycol1p1">Token Amount
                                            <br/> Price
                                            <br/>Tax
                                            <br/>Min Buy &nbsp;&nbsp;&nbsp;&nbsp; Max Buy:</p>
                                        </div>
                                    )
                            )) 
                            }
                           
                            <br/><br/><br/>
                            {phase.map((item) => (
                                    item.phaseNo === "3" ? 
                                    (
                                        <>
                                            <div className="buyCovercol1">
                                            <h6 className="buycol1h6">PHASE {item.phaseNo}</h6>
            
                                            <p className="buycol1p1">Token Amount: {item.tokenNo}
                                            <br/> Price: {item.price}
                                            <br/>Tax: {item.tax}
                                            <br/>Min Buy: {item.min_buy} &nbsp;&nbsp;&nbsp;&nbsp; Max Buy:{item.max_buy}</p>
                                        </div>
                                     </>
                                    ): (
                                        
                                        <div className="buyCovercol1">
                                            <h6 className="buycol1h6">PHASE 3</h6>

                                            <p className="buycol1p1">Token Amount
                                            <br/> Price
                                            <br/>Tax
                                            <br/>Min Buy &nbsp;&nbsp;&nbsp;&nbsp; Max Buy:</p>
                                        </div>
                                    )
                            )) 
                            }
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="buyCovercol2">
                            {phase.map((item) => (
                                <>
                                <h6 className="buycol2h6">Presale Phase {item.phaseNo} live in</h6>
                                <br/><br/>
                                <span className="spanbuy">{days}</span>&nbsp;&nbsp;&nbsp;
                                <span className="spanbuy">{hours}</span>&nbsp;&nbsp;&nbsp;
                                <span className="spanbuy">{minutes}</span>&nbsp;&nbsp;&nbsp;
                                <span className="spanbuy">{seconds}</span><br/><br/><br/><br/>
                                <button onClick={scrollHandler} className="btn btn-light" id="joinhere">Join Here</button>
                                </>
                            ))}
                            </div>
                            
                        </div>
                    </div>
                </div>
     </div>   
    )
}

export default HeaderBottom;