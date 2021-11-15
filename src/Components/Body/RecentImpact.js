import { useEffect, useState } from 'react';
import { getAllHomeHead } from '../../api';
import impact1 from '../../images/impact1.png'
import impact2 from '../../images/impact2.png'
import impact3 from '../../images/impact3.png'

const RecentImpact = () => {
    const [head, setHead] = useState([]);
    var headRename;

    useEffect(()=>{
        getAllHomeHead()
          .then(response => {
            setHead(response.data)
          })
          .catch(err => alert("Something went wrong!"))
      },[])
    return(
        <div className="divofrecentimpacts">
        {head.map((item) => {
                if(item.homeHead == "Recent Impacts"){
                    headRename = item.homeHeadRename;
                }
            })}
            <p className="RecentImpactHead">{headRename}</p>

            <div className="flex-container">
                <div className="flex-item">
                    <img className="impact-image" src= {impact1} alt="Recent Impact"/>
                </div>
                <div className="flex-item">
                    <img className="impact-image" src= {impact2} alt="Recent Impact"/>
                </div>
                <div className="flex-item">
                    <img className="impact-image" src= {impact3} alt="Recent Impact"/>
                </div>
            </div>
        </div>
    )
}

export default RecentImpact;