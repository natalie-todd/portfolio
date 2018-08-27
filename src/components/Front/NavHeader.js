import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const NavHeader = (props) => {
    return (
        <div className='divNav'>
            <Nav>
                <NavItem>
                    <NavLink href="#">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Projects</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">About</NavLink>
                </NavItem>
            </Nav>
        </div>
    );
}

export default NavHeader