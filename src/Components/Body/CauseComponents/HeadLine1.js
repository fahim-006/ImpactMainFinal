import causeh1 from '../../../images/causeh1.png'
import causeimage2 from '../../../images/causeimage2.png'
import causeImage3 from '../../../images/causeImage3.png'
import React, { useEffect } from "react";
// import { Dialog } from "@material-ui/core";
import { useState } from "react";
import { getAllCause } from '../../../api';

const Headline1 = () => {
    const [cause, setCause] = useState([]);
    var plant;
    var animal;
    var ocean;
    var Headline1;
    var Headline1Rename;

    var plantHead;
    var animalHead;
    var oceanHead;

    useEffect(()=>{
        getAllCause()
          .then(response => {
            setCause(response.data)
          })
          .catch(err => alert("Something went wrong!"))
      },[])
    return (
        <div>
            {cause.map((item) =>{
              if(item.name==="Impact.plant"){
                plant = item.details;
                plantHead = item.rename;
              }
              if(item.name==="Impact.animal"){
                animal = item.details;
                animalHead = item.rename;
            }
            if(item.name==="Impact.ocean"){
                ocean = item.details;
                oceanHead = item.rename;
            }

            if(item.name==="Headline1"){
                Headline1 = item.details;
                Headline1Rename = item.rename;
            }
              
           })}
            <br/><br/><br/>
            <h2 className="headlinesinCause">{Headline1Rename}</h2>

            <div className="cause2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <img className="img-thumbnail" 
                            style={{background: "transparent", border: "0",marginTop: "8.2vw"}} 
                            src={causeh1} alt="causeh1"/>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <h2 className="causeh1h">{plantHead}</h2>
                            <p className="causeh1p">{plant}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cause2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <img className="img-thumbnail" 
                            style={{background: "transparent", border: "0",marginTop: "8.2vw"}} 
                             src={causeimage2} alt="causeh1"/>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <h2 className="causeh1h">{animalHead}</h2>
                            <p className="causeh1p">{animal}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cause2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <img className="img-thumbnail" 
                            style={{background: "transparent", border: "0",marginTop: "8.2vw"}} 
                             src={causeImage3} alt="causeImage3"/>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <h2 className="causeh1h">{oceanHead}</h2>
                            <p className="causeh1p">{ocean}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Headline1;