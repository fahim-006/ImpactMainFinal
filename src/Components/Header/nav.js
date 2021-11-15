import { useEffect, useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
import { getAllGreenpaper } from '../../api';
import logo from '../../images/logo.png'

const Navigation  = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const [GreenPaper, setGreenPaper] = useState([]);
    var Mainpfd;
    useEffect(()=>{
        getAllGreenpaper()
          .then(response => {
            setGreenPaper(response.data)
          })
          .catch(err => alert("Something went wrong!"))
           
      },[])
  
    return(
        <div className="container">
          {GreenPaper.map((item) => {
              Mainpfd = `https://backendimage1.impacts.finance/${item.path}`;
          })  
        }
        <Navbar color="#ffffff" light expand="md" style={{fontFamily: "poppins-medium"}}>
          <NavbarBrand href="/">
          <img src={logo} alt="impacts.finance" className="logo"/>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse  isOpen={isOpen} navbar >
            <Nav className="justify-content-end" style={{width: "100%"}}>
              <NavItem>
                <NavLink style={{color: "#000000"}} href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{color: "#000000"}} href={Mainpfd} target="_blank">Greenpaper</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{color: "#000000"}} href="/cause">Cause</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{color: "#000000"}} href="/howtobuy">How to buy</NavLink>
              </NavItem>
              
            </Nav>
           
          </Collapse>
        </Navbar>
      </div>
    );
}

export default Navigation;