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
    z-index: 9000000000;
`

const NavItem = styled(NavLink)`
    height: 30px;
    font-size: 20px;
    text-align: center;
    width: 20%;
    vertical-align: middle;
    text-decoration: none;
    color: black;
    z-index: 9000;
`





// const NavBar = (props) => {

//     const redirectyaboy = (page) => {        
        
//         console.log("Test"
//         )
//     }

//         return (
//             <NavBox>
//                 <NavItem width={1/5} onClick={redirectyaboy()}> 
//                     Dashboard
//                 </NavItems>
//                 <NavItems width={1/5}>
//                     Income
//                 </NavItems>
//                 <NavItems width={1/5}>
//                     Spending
//                 </NavItems>
//                 <NavItems width={1/5}>
//                     Goals
//                 </NavItems>
//                 <NavItems width={1/5}>
//                     Profile
//                 </NavItems>
//             </NavBox>
//         )
// }



class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: ""
        }
    }


    render() {
        return (
            <NavBox>
                <NavItem 
                to="/user/Aron" 
                activeStyle={{
                    borderBottom: "solid",
                    borderBottomColor: "black"
                }}>
                    Dashboard
                </NavItem >
                <NavItem 
                to="/user/income"
                activeStyle={{
                    borderBottom: "solid",
                    borderBottomColor: "black"
                }}>
                    Income
                </NavItem>
                <NavItem  
                to="/user/spending"
                activeStyle={{
                    borderBottom: "solid",
                    borderBottomColor: "black"
                }}>
                    Spending
                </NavItem>
                <NavItem  
                to="/user/goals"
                activeStyle={{
                    borderBottom: "solid",
                    borderBottomColor: "black"
                }}>
                    Goals
                </NavItem>
                <NavItem 
                to="/user/profile"
                activeStyle={{
                    borderBottom: "solid",
                    borderBottomColor: "black"
                }}>
                    Profile
                </NavItem>
            </NavBox>
        )
    }
}

export default NavBar