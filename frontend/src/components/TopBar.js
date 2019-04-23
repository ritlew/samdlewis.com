import React, { Component } from 'react';
import { GoMarkGithub } from 'react-icons/go';
import { IconContext } from 'react-icons';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem 
} from 'reactstrap';

class TopBar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Samuel Lewis</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="#about">About Me</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#resume">Resume</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#contact">Contact</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                        Projects
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem href="#">
                                            Video Streaming
                                    </DropdownItem>
                                    <DropdownItem href="#">
                                            Portfolio Website
                                    </DropdownItem>
                                    <DropdownItem href="#">
                                            Network Monitor
                                    </DropdownItem>
                                    <DropdownItem href="#">
                                            Django Photo Gallery
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <NavLink href="https://github.com/ritlew">
                                    <IconContext.Provider value={{ size: "1.5em" }}>
                                        <GoMarkGithub />
                                    </IconContext.Provider>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default TopBar;
