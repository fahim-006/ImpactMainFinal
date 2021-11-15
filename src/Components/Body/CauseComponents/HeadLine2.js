import causeh2image1 from '../../../images/causeh2image1.png'
import causeh2image2 from '../../../images/causeh2image2.png'
import causeh2image3 from '../../../images/causeh2image3.png'
import causeh2image4 from '../../../images/causeh2image4.png'
import causeh2image5 from '../../../images/causeh2image5.png'
import causeh2image6 from '../../../images/causeh2image6.png'
import React, { useEffect } from "react";
// import { Dialog } from "@material-ui/core";
import { useState } from "react";
import { getAllCause } from '../../../api';

const Headline2 = () => {
    const [cause, setCause] = useState([]);
    var women;
    var womenHead;
    var womenH1;
    var school;
    var schoolHead;
    var schoolH1;
    var water;
    var waterHead;
    var waterH1;
    var wildlife;
    var wildlifeHead;
    var wildlifeH1;
    var Project;
    var ProjectHead;
    var ProjectH1;
    var Eco;
    var EcoHead;
    var EcoH1;

    var Headline2;
    var Headline1Rename2;

    useEffect(()=>{
        getAllCause()
          .then(response => {
            setCause(response.data)
          })
          .catch(err => alert("Something went wrong!"))
      },[])
    return (
        <div className="headdivCauseHeadline2">
             {cause.map((item) =>{
              if(item.name==="Impact.women"){
                women = item.details;
                womenHead = item.rename;
                womenH1 = item.name1;
              }
              if(item.name==="Impact.school"){
                school = item.details;
                schoolHead = item.rename;
                schoolH1 = item.name1;
            }
                if(item.name==="Impact.water"){
                    water = item.details;
                    waterHead = item.rename;
                    waterH1 = item.name1;
                }

                if(item.name==="Impact.wildlife"){
                    wildlife = item.details;
                    wildlifeHead = item.rename;
                    wildlifeH1 = item.name1;
                  }
                  if(item.name==="Project-Tuvalu"){
                    Project = item.details;
                    ProjectHead = item.rename;
                    ProjectH1 = item.name1;
                }
                if(item.name==="Eco-summit"){
                    Eco = item.details;
                    EcoHead = item.rename;
                    EcoH1 = item.name1;
                }
                if(item.name==="Headline2"){
                    Headline2 = item.details;
                    Headline1Rename2 = item.rename;
                }
              
           })}
            <br/><br/>
            <h2 className="headlinesinCause">{Headline1Rename2}</h2>
            <br/><br/><br/>
           
                <div className="container">
                    <div className="row">
                   
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="cause3">
                        <h2 className="causeh1h1">{womenHead}</h2>
                            <p className="causeh1p1">{womenH1}</p>
                            <p className="causeh1p1">{women}</p>
                            <img className="img-thumbnail" 
                            style={{background: "transparent", border: "0"}}  src={causeh2image1} alt="causeh2image1"/>
                        </div>
                        </div>

                        <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="cause3">
                        <h2 className="causeh1h1">{schoolHead}</h2>
                            <p className="causeh1p1">{schoolH1}</p>
                            <p className="causeh1p1">{school}
                            </p>
                            <img className="img-thumbnail" 
                            style={{background: "transparent", border: "0"}} src={causeh2image2} alt="causeh2image1"/>
                        </div>
                        </div>

                        <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="cause3">
                        <h2 className="causeh1h1">{waterHead}</h2>
                            <p className="causeh1p1">{waterH1}</p>
                            <p className="causeh1p1">{water}
                        </p>
                        <img className="img-thumbnail" 
                            style={{background: "transparent", border: "0"}} src={causeh2image3} alt="causeh2image1"/>
                        </div>
                        </div>
                    </div>

                    <br/><br/><br/>

                    <div className="row">
                   
                    <div className="col-lg-4 col-md-12 col-sm-12">
                       <div className="cause3">
                       <h2 className="causeh1h1">{wildlifeHead}</h2>
                            <p className="causeh1p1">{wildlifeH1}</p>
                           <p className="causeh1p1">{wildlife}
                        </p>
                        <img className="img-thumbnail" 
                            style={{background: "transparent", border: "0"}} src={causeh2image4} alt="causeh2image1"/>
                       </div>
                       </div>

                       <div className="col-lg-4 col-md-12 col-sm-12">
                       <div className="cause3">
                       <h2 className="causeh1h1">{ProjectHead}</h2>
                            <p className="causeh1p1">{ProjectH1}</p>
                           <p className="causeh1p1">{Project}
                        </p>
                        <img className="img-thumbnail" 
                            style={{background: "transparent", border: "0"}} src={causeh2image5} alt="causeh2image1"/>
                       </div>
                       </div>

                       <div className="col-lg-4 col-md-4 col-sm-4">
                       <div className="cause3">
                       <h2 className="causeh1h1">{EcoHead}</h2>
                            <p className="causeh1p1">{EcoH1}</p>
                           <p className="causeh1p1">{Eco}
                        </p>
                        <img className="img-thumbnail" 
                            style={{background: "transparent", border: "0"}} src={causeh2image6} alt="causeh2image1"/>
                       </div>
                       </div>
                   </div>
                </div>
             

        </div>
    )
}

export default Headline2;