import * as React from 'react';
import './App.css';


import { Container } from 'reactstrap';

import {Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink} from 'reactstrap';

import {AppAsideToggler, AppHeader, AppHeaderDropdown, AppNavbarBrand,AppSidebarToggler} from '@coreui/react';
import * as loremIpsum from "lorem-ipsum";
import logo from './assets/img/brand/logo.svg'
import sygnet from './assets/img/brand/sygnet.svg'

// import avatar from "./assets/img/avatars/6.jpg"

class App extends React.Component {
    public text: string;

    constructor(props: any) {
        super(props);
        this.text = loremIpsum({count: 20, units: "paragraphs"})
    }

    public render() {
        return (
            <div className="app">
                <AppHeader fixed={true}>
                    <React.Fragment>
                        <AppSidebarToggler className="d-lg-none" display="md" mobile={true}/>
                        <AppNavbarBrand
                            full={{src: logo, width: 89, height: 25, alt: 'CoreUI Logo'}}
                            minimized={{src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo'}}
                        />


                        <Nav className="d-md-down-none" navbar={true}>
                            <NavItem className="px-3">
                                <NavLink href="/">Dashboard</NavLink>
                            </NavItem>
                            <NavItem className="px-3">
                                <NavLink href="#">Users</NavLink>
                            </NavItem>
                            <NavItem className="px-3">
                                <NavLink href="#">Settings</NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar={true}>
                            <NavItem className="d-md-down-none">
                                <NavLink href="#"><i className="icon-bell"/><Badge pill={true} color="danger">5</Badge></NavLink>
                            </NavItem>
                            <NavItem className="d-md-down-none">
                                <NavLink href="#"><i className="icon-list"/></NavLink>
                            </NavItem>
                            <NavItem className="d-md-down-none">
                                <NavLink href="#"><i className="icon-location-pin"/></NavLink>
                            </NavItem>
                            <AppHeaderDropdown direction="down">
                                <DropdownToggle nav={true}>
                                    <img src={'assets/img/avatars/6.jpg'} className="img-avatar"
                                         alt="admin@bootstrapmaster.com"/>
                                </DropdownToggle>
                                <DropdownMenu right={true} style={{right: 'auto'}}>
                                    <DropdownItem header={true} tag="div"
                                                  className="text-center"><strong>Account</strong></DropdownItem>
                                    <DropdownItem><i className="fa fa-bell-o"/> Updates<Badge
                                        color="info">42</Badge></DropdownItem>
                                    <DropdownItem><i className="fa fa-envelope-o"/> Messages<Badge
                                        color="success">42</Badge></DropdownItem>
                                    <DropdownItem><i className="fa fa-tasks"/> Tasks<Badge
                                        color="danger">42</Badge></DropdownItem>
                                    <DropdownItem><i className="fa fa-comments"/> Comments<Badge
                                        color="warning">42</Badge></DropdownItem>
                                    <DropdownItem header={true} tag="div"
                                                  className="text-center"><strong>Settings</strong></DropdownItem>
                                    <DropdownItem><i className="fa fa-user"/> Profile</DropdownItem>
                                    <DropdownItem><i className="fa fa-wrench"/> Settings</DropdownItem>
                                    <DropdownItem><i className="fa fa-usd"/> Payments<Badge color="secondary">42</Badge></DropdownItem>
                                    <DropdownItem><i className="fa fa-file"/> Projects<Badge color="primary">42</Badge></DropdownItem>
                                    <DropdownItem divider={true}/>
                                    <DropdownItem><i className="fa fa-shield"/> Lock Account</DropdownItem>
                                    <DropdownItem><i className="fa fa-lock"/> Logout</DropdownItem>
                                </DropdownMenu>
                            </AppHeaderDropdown>

                        </Nav>
                        <AppAsideToggler className="d-md-down-none"/>
                        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
                    </React.Fragment>
                </AppHeader>
                <div className="app-body">
                <main className="main">
                    <Container fluid={true}>
                        <div> Hallo Welt</div>
                        <div >{this.text}</div>
                    </Container>
                </main>
                </div>

            </div>
        );
    }
}

export default App;
