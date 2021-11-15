import { useEffect, useState } from 'react'
import { getAllHomeHeadCards } from '../../api'
import aid1 from '../../images/aid1.png'
import aid2 from '../../images/aid2.png'
import switch1 from '../../images/switch1.png'
import switch2 from '../../images/switch2.png'
import switch3 from '../../images/switch3.png'
import switch4 from '../../images/switch4.png'

const AidProject = () => {
    const [active, setActive] = useState('Community');
    const [headcard, setHeadcard] = useState([]);
    var headRename;
    var headlineCard1, details1;
    var headlineCard2, details2;
    var headlineCard3, details3;
    var headlineCard4, details4;

    useEffect(()=>{

          getAllHomeHeadCards()
          .then(response => {
            setHeadcard(response.data)
          })
          .catch(err => alert("Something went wrong!"))
      },[])
    return (
         <div className="AidMainDiv">
           {headcard.map((item) => {
                if(item.headline == "Community Driven"){
                  headlineCard1 = item.headlineRename;
                  details1 = item.details;
                }

                if(item.headline == "Automictic LP"){
                  headlineCard2 = item.headlineRename;
                  details2 = item.details;
                }

                if(item.headline == "Passive income"){
                  headlineCard3 = item.headlineRename;
                  details3 = item.details;
                }

                if(item.headline == "Audited"){
                  headlineCard4 = item.headlineRename;
                  details4 = item.details;
                }
             })}
                <img className="Roadmappic" src={aid1} alt="Roadmappic" />
                    
                        <div className="container-fluid" id="aid2div">
                          <br/> <br/> <br/> <br/>
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                {active === "Community" ?
                                  <div className="divofSwichindpic" style={{backgroundColor: "#6C787E", borderRadius: "7px", padding: "4px"}}>
                                    <p className="headOf2ndAidDiv" style={{color: "#ffffff"}}>{headlineCard1}</p>
                                  <p className="paraOf2ndAidDiv" style={{color: "#ffffff"}}>{}</p>
                                    </div> :
                              <div className="divofSwichindpic" onClick={()=>setActive("Community")}>
                                 <p className="headOf2ndAidDiv">{headlineCard1}</p>
                                <p className="paraOf2ndAidDiv">{}</p>
                             </div>

                            }
                                  {/* <div className="divofSwichindpic" style={{backgroundColor: "#6C787E", borderRadius: "7px", padding: "4px"}}>
                                       <p className="headOf2ndAidDiv" style={{color: "#ffffff"}}>Community Driven</p>
                                       <p className="paraOf2ndAidDiv" style={{color: "#ffffff"}}>In first phase we will plant 2 million trees in Philippines after<br/> achieving 10 million in market cap.</p>
                                    </div>*/} 

                                
                                   {active === "Automatic" ?
                                   <div className="divofSwichindpic" style={{backgroundColor: "#6C787E", borderRadius: "7px", padding: "4px"}}>
                                   <p className="headOf2ndAidDiv" style={{color: "#ffffff"}}>Automictic LP</p>
                                 <p className="paraOf2ndAidDiv" style={{color: "#ffffff"}}>In first phase we will plant 2 million trees in Philippines after<br/> achieving 10 million in market cap.</p>
                                   </div> :
                                <div className="divofSwichindpic" onClick={()=>setActive("Automatic")}>
                                    <p className="headOf2ndAidDiv">Automictic LP</p>
                                    <p className="paraOf2ndAidDiv">In first phase we will plant 2 million trees in Philippines after<br/>  achieving 10 million in market cap.</p>
                                </div>
                                    }

                                {active === "Passive" ?
                                   <div className="divofSwichindpic" style={{backgroundColor: "#6C787E", borderRadius: "7px", padding: "4px"}}>
                                   <p className="headOf2ndAidDiv" style={{color: "#ffffff"}}>Passive income</p>
                                 <p className="paraOf2ndAidDiv" style={{color: "#ffffff"}}>In first phase we will plant 2 million trees in Philippines after<br/> achieving 10 million in market cap.</p>
                                   </div> :
                                <div className="divofSwichindpic" onClick={()=>setActive("Passive")}>
                                    <p className="headOf2ndAidDiv">Passive income</p>
                                    <p className="paraOf2ndAidDiv">In first phase we will plant 2 million trees in Philippines after<br/>  achieving 10 million in market cap.</p>
                                </div>
                                    }

                                {active === "Audited" ?
                                   <div className="divofSwichindpic" style={{backgroundColor: "#6C787E", borderRadius: "7px", padding: "4px"}}>
                                   <p className="headOf2ndAidDiv" style={{color: "#ffffff"}}>Audited</p>
                                 <p className="paraOf2ndAidDiv" style={{color: "#ffffff"}}>In first phase we will plant 2 million trees in Philippines after<br/> achieving 10 million in market cap.</p>
                                   </div> :
                                <div className="divofSwichindpic" onClick={()=>setActive("Audited")}>
                                    <p className="headOf2ndAidDiv">Audited</p>
                                    <p className="paraOf2ndAidDiv">In first phase we will plant 2 million trees in Philippines after<br/>  achieving 10 million in market cap.</p>
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

{/*
                <div className="container-fluid">
                
                <div style={{minHeight:"380px"}}>  
                    <div>
                        <p className="pinkPortionLeftParagraph"><b>Impact <br/>AiD Projects</b></p>
                        <p className="pinkPortionRightParagraph">‘’A donation makes you feel great, a sustainable donation makes you remembered to millions’’<br/>
                            <span className="founder">-Founder, Impact Finance</span></p>
                            </div>
                            <div>
                         
                </div>

                
                </div>
              
              <div className="container">
                <div className="flex-containerofaid">
                    <div className="flex-itemofaid">
                        <p className="headofCardhomeAid">Impact.plant</p>
                        <p>Target Market cap $25M </p>
                        <p>In first phase we will plant 2 million trees in Philippines after achieving 10 million in market cap. </p>
                        <img src={aid1} alt="Avatar" className="imgofAIDcard"/>
                    </div>
                    <div className="flex-item-aid">
                    flex item1
                    </div>
                    <div className="flex-item-aid">
                    flex item1
                    </div>
                </div>
              </div>

                <div className="aid2">   
              
                </div>
            </div>
*/}

export default AidProject;