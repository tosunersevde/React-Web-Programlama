import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  //NavbarText,
} from 'reactstrap';
import CartSummary from './CartSummary';
import { Link } from 'react-router-dom';

export default class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle(){
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Nortwind App</NavbarBrand>
          <NavbarToggler onClick={this.toggle}/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                {/* <NavLink href="/components/">Components</NavLink> */}
                <NavLink>
                  <Link to="form1">Form Demo 1</Link>
                </NavLink>
                {/* <Link to="form1">Form Demo 1</Link> */}
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="form2">Form Demo 2</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options - {this.props.cart.length}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider/>
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
              <CartSummary removeFromCart={this.props.removeFromCart} cart={this.props.cart}/>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

//import React, { useState } from 'react';

// function Navi(args) {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <div>
//       <Navbar {...args}>
//         <NavbarBrand href="/">Nortwind App</NavbarBrand>
//         <NavbarToggler onClick={toggle} />
//         <Collapse isOpen={isOpen} navbar>
//           <Nav className="me-auto" navbar>
//             <NavItem>
//               <NavLink href="/components/">Components</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="https://github.com/reactstrap/reactstrap">
//                 GitHub
//               </NavLink>
//             </NavItem>
//             <UncontrolledDropdown nav inNavbar>
//               <DropdownToggle nav caret>
//                 Options
//               </DropdownToggle>
//               <DropdownMenu right>
//                 <DropdownItem>Option 1</DropdownItem>
//                 <DropdownItem>Option 2</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem>Reset</DropdownItem>
//               </DropdownMenu>
//             </UncontrolledDropdown>
//           </Nav>
//           <NavbarText>Simple Text</NavbarText>
//         </Collapse>
//       </Navbar>
//     </div>
//   );
// }

// export default Navi;


// import React, { Component } from 'react'

// export default class Navi extends Component {
//   render() {
//     return (
//       <div>
//             <h2>Navi Component</h2>
//        </div>
//     )
//   }
// }
