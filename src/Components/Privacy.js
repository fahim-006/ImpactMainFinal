import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { getAllPolicy } from "../api";
import Footer from "./Footer/Footer"
import Header from "./Header/Header"

const Privacy = () => {
    const [privacy, setPrivacy] = useState([]);
    var x;

    useEffect(()=>{
        getAllPolicy()
          .then(response => {
            setPrivacy(response.data)
          })
          .catch(err => alert("Something went wrong!"))
        //{phase.month} {phase.date}, {phase.year} {phase.hour}:{phase.minute}:{phase.second}
        
      },[]) 
    return(
        <div>
           
        <Header/><br/>
    <div className="container">
    {privacy.map((item) =>{
        x = item.details;
       
   })}
<div className="termsh6" style={{color: "#000000"}} dangerouslySetInnerHTML={{__html: x}}/>
            <br/>
            </div>
            <Footer/>
            </div>
    )
}

export default Privacy;
