import React from 'react';
import styled from 'styled-components';
import {Box, Flex} from 'rebass';
import {color} from 'styled-system';
import {NavLink} from 'react-router-dom';
import { black, red } from 'color-name';

const NavBox = styled(Flex)`
    height: 30px;
    vertical-align: middle;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.18);
    z-index: 420;
    margin-bottom: 10px !important;
`
//used important here since I had no idea where the margin 0 was coming from

const NavItem = styled(NavLink)`
    height: 30px;
    font-size: 20px;
    text-align: center;
    width: 20%;
    vertical-align: middle;
    text-decoration: none;
    z-index: 9000;
    color: black;
    ${color}
    `

class NavBar extends React.Component {


    render() {
        return (
            <NavBox>
                <NavItem 
                to="/user/Aron" 
                activeStyle={{
                    borderBottom: "solid",
                    borderBottomColor: "#1890ff",
                    color: "#1890ff"
                }}>
                    Dashboard
                </NavItem >
                <NavItem 
                to="/user/income"
                activeStyle={{
                    borderBottom: "solid",
                    borderBottomColor: "#1890ff",
                    color: "#1890ff"
                }}>
                    Income
                </NavItem>
                <NavItem  
                to="/user/spending"
                activeStyle={{
                    borderBottom: "solid",
                    borderBottomColor: "#1890ff",
                    color: "#1890ff"
                }}>
                    Spending
                </NavItem>
                <NavItem  
                to="/user/goals"
                activeStyle={{
                    borderBottom: "solid",
                    borderBottomColor: "#1890ff",
                    color: "#1890ff"
                }}>
                    Goals
                </NavItem>
                <NavItem 
                to="/user/profile"
                activeStyle={{
                    borderBottom: "solid",
                    borderBottomColor: "#1890ff",
                    color: "#1890ff"
                }}>
                    Profile
                </NavItem>
            </NavBox>
        )
    }
}

export default NavBar