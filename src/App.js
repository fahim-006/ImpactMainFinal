import { BrowserRouter, Route,Switch } from 'react-router-dom';
import './App.css';
import Admin from './Components/admin';
import AdminCause from './Components/Body/AdminBody/AdminCause';
import ImpactAnimal from './Components/Body/AdminBody/CauseForms/ImpactAnimal';
import AdminDashboard from './Components/Body/AdminBody/AdminDashboard';
import AdminSocials from './Components/Body/AdminBody/AdminSocials';
import Buy from './Components/Buy';
import Cause from './Components/Cause';
import Donate from './Components/Donate';
import HomeComponent from './Components/HomeComponent';
import HowtoBuyComponents from './Components/HowtoBuyComponents';
import Privacy from './Components/Privacy';
import TermsandConditions from './Components/TermsAndConditions';
import ImpactOcean from './Components/Body/AdminBody/CauseForms/ImpactOcean';
import ImpactWomen from './Components/Body/AdminBody/CauseForms/ImpactWomen';
import ImpactSchool from './Components/Body/AdminBody/CauseForms/ImpactSchool';
import ImpactWater from './Components/Body/AdminBody/CauseForms/ImpactWater';
import ImpactWildLife from './Components/Body/AdminBody/CauseForms/ImpactWildlife';
import ProjectTuvalu from './Components/Body/AdminBody/CauseForms/ProjectTuvalu';
import EcoSummit from './Components/Body/AdminBody/CauseForms/EcoSummit';
import GreenPaper from './Components/Body/GreenPaper';
import Facebook from './Components/Body/AdminBody/SocialForms/Facebook'
import Youtube from './Components/Body/AdminBody/SocialForms/Youtube'
import Discord from './Components/Body/AdminBody/SocialForms/Discord'
import Btok from './Components/Body/AdminBody/SocialForms/Btok'
import Instagram from './Components/Body/AdminBody/SocialForms/Instagram'
import Reddit from './Components/Body/AdminBody/SocialForms/Reddit'
import Twitter from './Components/Body/AdminBody/SocialForms/Twitter'
import TeleGram from './Components/Body/AdminBody/SocialForms/Telegram';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Switch>
         <Route path='/adminimpactanimals' render={() => <ImpactAnimal />} />
         <Route path='/admincauseplant' render={() => <AdminCause />} />
         <Route path='/admincauseoceans' render={() => <ImpactOcean/>} />
         <Route path='/admincausewomen' render={() => <ImpactWomen/>} />
         <Route path='/admincauseschool' render={() => <ImpactSchool/>} />
         <Route path='/admincausewater' render={() => <ImpactWater/> } />
         <Route path='/admincausewild' render={() => <ImpactWildLife/> } />
         <Route path='/admincauseprjecttuvalu' render={() => <ProjectTuvalu/> } />
         <Route path='/admincauseeco' render={() => <EcoSummit/> } />

         <Route path='/facebook' render={() => <Facebook />} />
         <Route path='/youtube' render={() => <Youtube />} />
         <Route path='/discord' render={() => <Discord/>} />
         <Route path='/btok' render={() => <Btok/>} />
         <Route path='/instagram' render={() => <Instagram/>} />
         <Route path='/reddit' render={() => <Reddit/> } />
         <Route path='/twitter' render={() => <Twitter/> } />
         <Route path='/telegram' render={() => <TeleGram/> } />

         <Route path='/adminsocial' render={() => <AdminSocials/>} />
         <Route path='/admindashboardlogin' render={() => <Admin />} />
         <Route path='/admindashboard' render={() => <AdminDashboard />} />
         <Route path="/howtobuy" component={HowtoBuyComponents}></Route>
         <Route path="/termsandconditions" component={TermsandConditions}></Route>
         <Route path="/privacy" component={Privacy}></Route>
         <Route path="/donate" component={Donate} exact></Route>
         <Route path="/cause" component={Cause} ></Route>
         <Route path="/buy" component={Buy} ></Route>
         <Route path="/greenpaper" component={Buy} ></Route>
        
        <Route path="/" component={HomeComponent} exact></Route>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
