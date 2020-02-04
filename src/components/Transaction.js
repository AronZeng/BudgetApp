import React from 'react';
import {Flex, Box} from 'rebass';
import styled from 'styled-components';

const StyledBox = styled(Box)`
    background-color: ${props => (props.type === 0) ? "Red" : "Green"};
`

const Transaction = (props) => {



    const {name, type, amount} = props.details;
    return (
        <StyledBox type={props.details.type}>
            <p>{name}</p>
            <p>{type}</p>
            <p>${amount}</p>
        </StyledBox>
    )
}

export default Transaction