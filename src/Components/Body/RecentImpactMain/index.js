import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import Item from "./item";
import impact1 from '../../../images/impact1.png'
import impact2 from '../../../images/impact2.png'
import impact3 from '../../../images/impact3.png'
import { getAllCarousel, getAllHomeHead } from "../../../api";
 
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 650, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
 
];
 
const RecentMain = ()  => {
    const [head, setHead] = useState([]);
    var headRename;
    const [Carousel1, setCarousel1] = useState([]);

useEffect(()=>{
    getAllHomeHead()
      .then(response => {
        setHead(response.data)
      })
      .catch(err => alert("Something went wrong!"))

      getAllCarousel()
      .then(response => {
        setCarousel1(response.data)
      })
      .catch(err => alert("Something went wrong!"))
  },[])
  return (
      <>
    <div>
    {head.map((item) => {
                if(item.homeHead == "Recent Impacts"){
                    headRename = item.homeHeadRename;
                }
            })}
       <p className="RecentImpactHead">{headRename}</p>
        <Carousel breakPoints={breakPoints}>
          {Carousel1.map ((item1) => 
            <>
              <Item><img className="caroselImg" alt="img-carosel" src={`https://backendimage1.impacts.finance/${item1.path}`}/></Item>

            </>
          )}
          
         
        </Carousel>
      </div>
    </>
  );
}

export default RecentMain;