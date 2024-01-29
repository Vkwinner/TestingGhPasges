// import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// const Navbar = () =>{
//     return(
//         <div className="navbar-div">
//             <ul className='list'>
//             <li>Home</li>
//             <li>About</li>
//             <li>Services</li>
//             </ul>
//         </div>
//     )
// };

import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function Example(args) {
  return (
    
      <Navbar {...args}>
        <NavbarBrand href="/">Calculator</NavbarBrand>
          <Nav fill pills tabs justified>
            <NavItem> 
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    
  );
}

export default Example;

// export default Navbar;