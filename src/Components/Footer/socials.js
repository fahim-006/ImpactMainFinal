import { Link } from 'react-router-dom'
import social1 from '../../images/socials1.png'
import social2 from '../../images/socials2.png'
import social3 from '../../images/socials3.png'
import social4 from '../../images/socials4.png'
import social5 from '../../images/socials5.png'
import social6 from '../../images/socials6.png'
import social7 from '../../images/socials7.png'
import social8 from '../../images/socials8.png'

import React, { useEffect } from "react";
// import { Dialog } from "@material-ui/core";
import { useState } from "react";
import { getAllSocial } from '../../api'

const Socials = () => {
    const [social, setSocial] = useState([]);
    var facebook;
    var youtube;
    var btok;
    var instagram;
    var telegram;
    var discord;
    var twitter;
    var reddit;

    useEffect(()=>{
        getAllSocial()
          .then(response => {
            setSocial(response.data)
          }
               
            )
          .catch(err => alert("Something went wrong!"))
      },[])
    return (
        <div className="partnerdiv">
           {social.map((item) =>{
              if(item.name==="facebook"){
                  facebook = item.details;
              }
              if(item.name==="youtube"){
                youtube = item.details;
            }
            if(item.name==="btok"){
                btok = item.details;
            }
            if(item.name==="instagram"){
                instagram = item.details;
            }
            if(item.name==="telegram"){
                telegram = item.details;
            }
            if(item.name==="twitter"){
                twitter = item.details;
            }
            if(item.name==="reddit"){
                reddit = item.details;
            }
            if(item.name==="discord"){
                discord = item.details;
            }
              
           })}

           <div className="container-fluid">
            <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="flex-container-socials">
                            <div className="flex-item-socials">
                                <Link className="footerLink" to="/termsandconditions"> Terms and conditions </Link>
                            </div>
                            <div className="flex-item-socials">
                                <Link className="footerLink" to="/privacy"> Pricavy and Cookies Policy </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 scol-sm-12" >
                        <div className="flex-container-socials1">
                            <div className="flex-item-socials1" style={{marginRight: "20px"}}>
                                <a href={telegram} target="_blank"> <img className="social-image1" src= {social1} alt="social1 Image"/> </a>
                            </div>
                            <div className="flex-item-socials1" style={{marginRight: "20px"}}>
                                <a href={twitter} target="_blank"> <img className="social-image1" src= {social2} alt="social2 Image"/></a>
                            </div>
                            <div className="flex-item-socials1" style={{marginRight: "20px"}}>
                                <a href={reddit} target="_blank"><img className="social-image1" src= {social3} alt="social3 Image"/></a>
                            </div>
                            <div className="flex-item-socials1" style={{marginRight: "20px"}}>
                                <a href={instagram} target="_blank"><img className="social-image1" src= {social4} alt="social4 Image"/></a>
                            </div>
                            <div className="flex-item-socials1" style={{marginRight: "20px"}}>
                                <a href={btok} target="_blank"><img className="social-image1" src= {social5} alt="social5 Image"/></a>
                            </div>
                            <div className="flex-item-socials1" style={{marginRight: "20px"}}>
                                <a href={discord} target="_blank"><img className="social-image1" src= {social6} alt="social6 Image"/></a>
                            </div>
                            <div className="flex-item-socials1" style={{marginRight: "20px"}}>
                                <a href={youtube} target="_blank"> <img className="social-image1" src= {social7} alt="social7 Image"/></a>
                            </div>
                            <div className="flex-item-socials1" style={{marginRight: "20px"}}>
                                <a href={facebook} target="_blank"><img className="social-image1" src= {social8} alt="social8 Image"/></a>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
           
          
            <br/><br/><br/>
        </div>
    )
}

export default Socials;