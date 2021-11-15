import React, { useEffect, useState } from "react";
import { getAllGreenpaper } from "../../api";
import {Document, Page, pdfjs} from 'react-pdf'
import { Link } from "react-router-dom";
// /import abc from '../../Components/media/img'
const GreenPaper = () => {
    const [GreenPaper, setGreenPaper] = useState([]);
    var Mainpfd;
    useEffect(()=>{
        getAllGreenpaper()
          .then(response => {
            setGreenPaper(response.data)
          })
          .catch(err => alert("Something went wrong!"))
           
      },[])

      GreenPaper.map((item) => {
        Mainpfd = item.path;
      })  
     
     //pdf= import(Mainpfd);
    return(
        <>
        
              <a href="https://backenddemo.impacts.finance/media/img/Greenpaper.pdf" target="_blank">Download</a>
            
            <img src="https://backenddemo.impacts.finance/media/img/donate.png" alt="img"/>
        
                  
        </>
    )
}

export default GreenPaper;