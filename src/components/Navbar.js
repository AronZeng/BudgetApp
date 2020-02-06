import React from 'react';
import styled from 'styled-components';
import {Box, Flex} from 'rebass';
import {color} from 'styled-system'

const NavBox = styled(Box)`
    box-shadow: 2 5 0 0 #888888;
    border-bottom-color: black;
    border-bottom-style: solid;
    height: 70px;
`
class NavBar extends React.Component {
    render() {
        return (
            <NavBox>
                NavBar
            </NavBox>
        )
    }
}

export default NavBar