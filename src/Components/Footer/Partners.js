import { useEffect, useState } from 'react'
import { getAllHomeHead, getAllPartner } from '../../api'

const Partner = () => {
    const [head, setHead] = useState([]);
    var headRename;
    const [PartnerImg, setPartnerImg] = useState([]);

    useEffect(()=>{
        getAllHomeHead()
          .then(response => {
            setHead(response.data)
          })
          .catch(err => alert("Something went wrong!"))

          getAllPartner()
          .then(response => {
            setPartnerImg(response.data)
          })
          .catch(err => alert("Something went wrong!"))
      },[])
 
    return(
        <div className="partnerdiv">
            <br/><br/><br/>
            {head.map((item) => {
                if(item.homeHead == "Our Partners"){
                    headRename = item.homeHeadRename;
                }
            })}
            <p className="partnerHead">{headRename}</p>

            <div className="flex-container">
               
           
                {PartnerImg.map((ptImg)=> {
                    return(
                        <div className="flex-item-partner-image">
                         <img className="partner-image" src= {`https://backendimage1.impacts.finance/${ptImg.path}`} alt="Partner Image"/>
                         </div>
                    )
                })}
               
            </div>
            <br/><br/><br/>
        </div>
    )
}

export default Partner;