import HeaderBottom from "./Body/BuyComponents/HeaderBottom";
import RedPortion from "./Body/BuyComponents/RedPortion";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Form1 from './Body/BuyComponents/Form'

const Buy = () => {
    return(
        <div>
            <div style={{backgroundColor: "#78C9BE"}}>
                <Header/>
                <br/><br/><br/>
                <HeaderBottom/>
                <RedPortion/>
                <Form1/>
            </div>
                <Footer/>
        </div>
    )
}

export default Buy;