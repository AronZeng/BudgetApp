import React from 'react';
import styled from 'styled-components';
import {Box, Flex} from 'rebass';
import {color} from 'styled-system';
import {NavLink} from 'react-router-dom';
const NavBox = styled(Flex)`
    box-shadow: 2 5 0 0 #888888;
    border-bottom-color: black;
    border-bottom-style: solid;
    height: 70px;
`

const NavItem = styled(Box)`
    height: 70px;
    font-size: 20px;
    text-align: center;
    padding-top: 20px;
    border-color: black;
    border-style: solid;
    border-width: thin;
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
                <NavItem width={[ 1/4 , 1/5]}>
                    Dashboard
                </NavItem >
                <NavItem width={[ 1/4 , 1/5]}>
                    Income
                </NavItem>
                <NavItem width={[ 1/4 , 1/5]}>
                    Spending
                </NavItem>
                <NavItem width={[ 1/4 , 1/5]}>
                    Goals
                </NavItem>
                {/* <NavItem width={[ 1/4 , 1/5]}>
                    Profile
                </NavItem> */}
            </NavBox>
        )
    }
}

export default NavBar