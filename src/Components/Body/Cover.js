import { Link } from "react-router-dom";
import btn from './btn.scss'

const Cover = () => {
    return(
       
            <div className="cover">
               <p className="text-dark fw-light font-title mb-4">Join the
			<span className="fw-normal"> New Era of Sustainable AiD</span></p>
		<h2 className=" fw-normal1 mt-4 mx-auto text-center text-dark  fs-4 mb-5" style={{maxWidth: "730px"}}>
        Our focus is to make an impact on our planet by creating sustainable and eco-friendly projects!
		</h2>
       
                    <div className="coverBtns">
                  
                        <div class="button-container-1">
                            <span class="mas">Buy</span>
                            <Link to="/buy"><button id='work' type="button" name="Hover">Buy</button></Link>
                        </div>

                        <div class="button-container-2">
                            <span class="mas">Donate</span>
                            <Link to="/donate"><button type="button" name="Hover">Donate</button></Link>
                        </div>

                        <div class="button-container-3">
                        <span class="mas">Presale</span>
                        <Link className="coverLink" to="/buy"><button type="button" name="Hover">Presale</button></Link>
                        </div>
                    </div>            
            </div>
    )
}

export default Cover;