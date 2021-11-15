import AidProject from "./AidProject";
import AidProjectMain from "./AidProjectMain";
import Cover from "./Cover";
//import RecentImpact from "./RecentImpact";
import RecentMain from "./RecentImpactMain";
import Roadmap from "./Roadman";
import TokeNomiesMain from "./TokeNomiesMain";

const Body = () => {
    return(
        <>
            <Cover/>
            <AidProjectMain/>
            <RecentMain/>
            <TokeNomiesMain/>   
            <Roadmap/>
        </>
    )
}

export default Body;