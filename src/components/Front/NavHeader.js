import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const NavHeader = (props) => {
    return (
        <div>
            <Nav>
                <NavItem>
                    <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Another Link</NavLink>
                </NavItem>
            </Nav>
        </div>
    );
}

export default NavHeader