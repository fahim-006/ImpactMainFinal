import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { getAllTerm } from "../api";
import Footer from "./Footer/Footer";

import Header from "./Header/Header";

const TermsandConditions = () => {
    const [term, setTerm] = useState([]);
    var x;
    useEffect(()=>{
        getAllTerm()
          .then(response => {
            setTerm(response.data)
          })
          .catch(err => alert("Something went wrong!"))
      },[])
    return(
       <div>
            <Header/><br/>
            {term.map((item) =>{
                x = item.details;
            })}
        <div className="container">  
        <div className="termsh6" style={{color: "#000000"}} dangerouslySetInnerHTML={{__html: x}}/>       
                
        </div> 
        <Footer/>
        </div>   
    )
}

export default TermsandConditions;