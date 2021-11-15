import { useEffect, useState } from 'react';
import { getAllHomeHead, getAllPhaseList } from '../../api';
import Roadmappic from '../../images/roadmapMain.png';

const Roadmap = () => {
    const [head, setHead] = useState([]);
    const [phaseList, setphaseList] = useState([]);
    var headRename;

    var phaseList1 = [];
    var phaseList2 = [];
    var phaseList3 = [];


    useEffect(()=>{
        getAllHomeHead()
          .then(response => {
            setHead(response.data)
          })
          .catch(err => alert("Something went wrong!"))

          getAllPhaseList()
            .then(response => {
                setphaseList(response.data)
            })
            .catch(err => alert("Something went wrong!"))
      },[])


    return(
        <div>
        {head.map((item) => {
                if(item.homeHead == "Roadmap"){
                    headRename = item.homeHeadRename;
                }
            })}

        {phaseList.map((itemList) => {
            if(itemList.phaseName == "1"){
                phaseList1.push(itemList.listItem);
            }

            if(itemList.phaseName == "2"){
                phaseList2.push(itemList.listItem);
            }

            if(itemList.phaseName == "3"){
                phaseList3.push(itemList.listItem);
            }
        })}
            <br/><br/><br/>
            <p className="RoadmanHead">{headRename}</p>
                <div className="RoadmapMainDiv">
                    <div className="flex-RoadmanContainer">
                        <div className="flex-RoadmanItem1">
                            
                                {phaseList1.map((phase1List)=> {
                                    return(
                                        <>
                                        {phase1List} <br/>
                                        </>
                                    );
                                })}
                            
                        </div>

                        <div className="flex-RoadmanItem2">
                            
                                {phaseList2.map((phase2List)=> {
                                    return(
                                        <>
                                        {phase2List} <br/>
                                        </>
                                    );
                                })}
                            
                        </div>

                        <div className="flex-RoadmanItem3">
                          
                                {phaseList3.map((phase3List)=> {
                                    return(
                                        <>
                                        {phase3List} <br/>
                                        </>
                                    );
                                })}
                            
                        </div>
                    </div>

                    
                </div>
            <br/><br/><br/>
        </div>
    )
}

export default Roadmap;