import React from 'react';
import Nav from 'react-bootstrap/Nav'
import { SidebarData} from './SideBarData'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import { Link } from 'react-router-dom'
import './NavBar.css'




function NavBar3 () {

    
  

    
    return(
        <Navbar bg="light" expand="lg">
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
           
            <NavDropdown title="Options" id="basic-nav-dropdown">
               {SidebarData.map((item, index) => {
                   return(
                    <NavDropdown.Item>
                        
                        
                             <Link to={item.path} className="cssTest">
                             {item.title}
                              </Link>
                      
                      
                    </NavDropdown.Item>
                   )
               })} 
             
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavBar3