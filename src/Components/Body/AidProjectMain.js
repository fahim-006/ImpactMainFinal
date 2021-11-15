import { useEffect, useState } from 'react'
import switch1 from '../../images/switch1.png'
import switch2 from '../../images/switch2.png'
import switch3 from '../../images/switch3.png'
import switch4 from '../../images/switch4.png'
import aidBack from '../../images/aidBack.png'
import imageAid1 from '../../images/img1AID.png'
import imageAid2 from '../../images/img2AID.png'
import imageAid3 from '../../images/img3AID.png'
import { getAllHomeHead, getAllHomeHeadCards } from '../../api'

const AidProjectMain = () => {
    const [active, setActive] = useState('Community');
    const [head, setHead] = useState([]);
    const [headcard, setHeadcard] = useState([]);
    var headRename;
    var headlineCard1, subHeadlineCard1, details1;
    var headlineCard2, subHeadlineCard2, details2;
    var headlineCard3, subHeadlineCard3, details3;
    var headlineCard4, subHeadlineCard4, details4;
    var headlineCard5, subHeadlineCard5, details5;
    var headlineCard6, subHeadlineCard6, details6;
    var headlineCard7, subHeadlineCard7, details7;

    useEffect(()=>{
        getAllHomeHead()
          .then(response => {
            setHead(response.data)
          })
          .catch(err => alert("Something went wrong!"))

          getAllHomeHeadCards()
          .then(response => {
            setHeadcard(response.data)
          })
          .catch(err => alert("Something went wrong!"))
      },[])


    return (
         <div  className="AidMainDiv">
                  <div className="container-fluid">
                  {head.map((item) => {
                if(item.homeHead == "Impact AiD Projects"){
                    headRename = item.homeHeadRename;
                }
             })}
                <div style={{minHeight:"320px"}}>  
                    <div>
                        <p className="pinkPortionLeftParagraph">{headRename}</p>
                        <p className="pinkPortionRightParagraph">"A donation makes you feel great, a sustainable donation makes you remembered to millions"<br/>
                            <span className="founder">-Founder, Impact Finance</span></p>
                            </div>
                            <div>
                         
                </div>

                
                </div>
              
              <div className="container">
              {headcard.map((item) => {
                if(item.headline == "Impact.plant"){
                  headlineCard1 = item.headlineRename;
                  subHeadlineCard1 = item.subHead;
                  details1 = item.details;
                }

                if(item.headline == "Impact.animal"){
                  headlineCard2 = item.headlineRename;
                  subHeadlineCard2 = item.subHead;
                  details2 = item.details;
                }

                if(item.headline == "Impact.ocean"){
                  headlineCard3 = item.headlineRename;
                  subHeadlineCard3 = item.subHead;
                  details3 = item.details;
                }

                if(item.headline == "Community Driven"){
                  headlineCard4 = item.headlineRename;
                  details4 = item.details;
                }

                if(item.headline == "Automictic LP"){
                  headlineCard5 = item.headlineRename;
                  details5 = item.details;
                }

                if(item.headline == "Passive income"){
                  headlineCard6 = item.headlineRename;
                  details6 = item.details;
                }

                if(item.headline == "Audited"){
                  headlineCard7 = item.headlineRename;
                  details7 = item.details;
                }
             })}
                <div className="flex-containerofaid">
                <div className="flex-item-aid" >
                    <div className="flex-itemofaid">
                        <p className="headofCardhomeAid">{headlineCard1}</p>
                        <p className="headofCardhomeAid2">{subHeadlineCard1} </p>
                        <p className="CardhomeAidpara">{details1}</p>
                        <img src={imageAid1} alt="Avatar" className="imgofAIDcard"/>
                    </div>
                </div>
                    <div className="flex-item-aid" style={{marginTop: "55px"}}>
                    <div className="flex-itemofaid" >
                        <p className="headofCardhomeAid">{headlineCard2}</p>
                        <p className="headofCardhomeAid2">{subHeadlineCard2} </p>
                        <p className="CardhomeAidpara">{details2} </p>
                        <img src={imageAid2} alt="Avatar" className="imgofAIDcard"/>
                    </div>
                    </div>
                    <div className="flex-item-aid" style={{marginTop: "110px"}}>
                    <div className="flex-itemofaid" >
                        <p className="headofCardhomeAid">{headlineCard3}</p>
                        <p className="headofCardhomeAid2">{subHeadlineCard3} </p>
                        <p className="CardhomeAidpara">{details3}</p>
                        <img src={imageAid3} alt="Avatar" className="imgofAIDcard"/>
                    </div>
                    </div>
                </div>
              </div>

              
            </div>
                    
                        <div id="" className="container-fluid" >
                          <br/> <br/> <br/> <br/>
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                {active === "Community" ?
                                  <div className="divofSwichindpic" style={{backgroundColor: "#6C787E", borderRadius: "7px", padding: "4px"}}>
                                    <p className="headOf2ndAidDiv" style={{color: "#ffffff"}}>{headlineCard4}</p>
                                    <p className="paraOf2ndAidDiv" style={{color: "#ffffff"}}>{details4}</p>
                                    </div> :
                              <div className="divofSwichindpic" onClick={()=>setActive("Community")}>
                                 <p className="headOf2ndAidDiv">{headlineCard4}</p>
                                <p className="paraOf2ndAidDiv">{details4}</p>
                             </div>

                            }
                                  {/* <div className="divofSwichindpic" style={{backgroundColor: "#6C787E", borderRadius: "7px", padding: "4px"}}>
                                       <p className="headOf2ndAidDiv" style={{color: "#ffffff"}}>Community Driven</p>
                                       <p className="paraOf2ndAidDiv" style={{color: "#ffffff"}}>In first phase we will plant 2 million trees in Philippines after<br/> achieving 10 million in market cap.</p>
                                    </div>*/} 

                                
                                   {active === "Automatic" ?
                                   <div className="divofSwichindpic" style={{backgroundColor: "#6C787E", borderRadius: "7px", padding: "4px"}}>
                                   <p className="headOf2ndAidDiv" style={{color: "#ffffff"}}>{headlineCard5}</p>
                                 <p className="paraOf2ndAidDiv" style={{color: "#ffffff"}}>{details5}</p>
                                   </div> :
                                <div className="divofSwichindpic" onClick={()=>setActive("Automatic")}>
                                    <p className="headOf2ndAidDiv">{headlineCard5}</p>
                                    <p className="paraOf2ndAidDiv">{details5}</p>
                                </div>
                                    }

                                {active === "Passive" ?
                                   <div className="divofSwichindpic" style={{backgroundColor: "#6C787E", borderRadius: "7px", padding: "4px"}}>
                                   <p className="headOf2ndAidDiv" style={{color: "#ffffff"}}>{headlineCard6}</p>
                                 <p className="paraOf2ndAidDiv" style={{color: "#ffffff"}}>{details6}</p>
                                   </div> :
                                <div className="divofSwichindpic" onClick={()=>setActive("Passive")}>
                                    <p className="headOf2ndAidDiv">{headlineCard6}</p>
                                    <p className="paraOf2ndAidDiv">{details6}</p>
                                </div>
                                    }

                                {active === "Audited" ?
                                   <div className="divofSwichindpic" style={{backgroundColor: "#6C787E", borderRadius: "7px", padding: "4px"}}>
                                   <p className="headOf2ndAidDiv" style={{color: "#ffffff"}}>{headlineCard7}</p>
                                 <p className="paraOf2ndAidDiv" style={{color: "#ffffff"}}>{details7}</p>
                                   </div> :
                                <div className="divofSwichindpic" onClick={()=>setActive("Audited")}>
                                    <p className="headOf2ndAidDiv">{headlineCard7}</p>
                                    <p className="paraOf2ndAidDiv">{details7}</p>
                                </div>
                                    }
                                </div>

                                <div className="col-lg-6 col-md-12 col-sm-12">
                                {active === "Community" ?
                                        <img className="switchImage" src={switch1} alt="switch1"/>
                                : "" }

                                {active === "Automatic" ?
                                        <img className="switchImage" src={switch2} alt="switch1"/>
                                : "" }
                                {active === "Passive" ?
                                        <img className="switchImage" src={switch3} alt="switch1"/>
                                : "" }  
                                {active === "Audited" ?
                                        <img className="switchImage" src={switch4} alt="switch1"/>
                                : "" }    
                                </div>
                            </div>
                        <br/><br/><br/><br/><br/>
                        </div>
                </div> 
    );
}



export default AidProjectMain;