import { Link } from "react-router-dom";

const AdminNav = () => {
    return(
        <div>
           
           <div className="sidebar">
               <Link to="/admindashboard"> Home</Link>
                <Link to="/admincauseplant">Cause Page</Link>
                
                {/*
                <div class="w3-dropdown-hover">
                    <button class="w3-button">Cause Page
                    <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="w3-dropdown-content w3-bar-block">
                    <Link to="/admincauseplant">Impact.Plant</Link>
                    <Link to="/adminimpactanimals">Impact.Animals</Link>
                    <Link to="/admincauseoceans">Impact.Ocean</Link>
                    <Link to="/admincausewomen">Impact.Women</Link>
                    <Link to="/admincauseschool">Impact.School</Link>

                    <Link to="/admincausewater">Impact.water</Link>
                    <Link to="/admincausewild">Impact.wild</Link>
                    <Link to="/admincauseprjecttuvalu">project-tuvalu</Link>
                    <Link to="/admincauseeco">Eco.Summit</Link>
                </div>
                </div> <br/>*/}

                <div class="w3-dropdown-hover">
                    <button class="w3-button">Social Pages
                    <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="w3-dropdown-content w3-bar-block">
                    <Link to="/facebook">Facebook</Link>
                    <Link to="/youtube">Youtube</Link>
                    <Link to="/discord">Discord</Link>
                    <Link to="/btok">Btok</Link>
                    <Link to="/instagram">Instagram</Link>

                    <Link to="/reddit">Reddit</Link>
                    <Link to="/twitter">Twitter</Link>
                    <Link to="/telegram">Telegram</Link>
                    </div>
                </div> <br/>

                <a href="#about">Privacy &amp; policy</a>
                <a href="#about">Terms &amp; Conditions</a>
            </div>

        
        </div>
    )
}

export default AdminNav;