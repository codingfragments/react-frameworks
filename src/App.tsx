import * as React from 'react';
import './App.css';

/* tslint:disable:no-console */


// import * as FontAwesome from "react-fontawesome";
import * as FontAwesome from "react-fontawesome";
import {Collapse,DropdownItem,DropdownMenu,DropdownToggle,Nav,Navbar,NavbarBrand,NavbarToggler,NavItem,NavLink,UncontrolledDropdown} from "reactstrap";


interface IAppProps {
    name:string
}

interface IAppState {
    isOpen: boolean;
}


class App extends React.Component<IAppProps,IAppState> {
    constructor(props: any) {
        super(props);

       this.state = {
           isOpen:true
       }
    }

  public render() {
    return (
        <div>
            <Navbar color="light" light={true} expand="md" >
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar={true} >
                    <Nav  navbar={true}>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav={true} inNavbar={true}>
                            <DropdownToggle nav={true} caret={true}>
                                Options
                            </DropdownToggle>
                            <DropdownMenu right={true}>
                                <DropdownItem>
                                    Option 1
                                </DropdownItem>
                                <DropdownItem>
                                    Option 2
                                </DropdownItem>
                                <DropdownItem divider={true} />
                                <DropdownItem>
                                    Reset
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
                <FontAwesome name="users"   />

            </Navbar>
            
        </div>


    );
  }

  private toggle = () => {
          this.setState({
              isOpen: !this.state.isOpen});

  }



}

export default App;
