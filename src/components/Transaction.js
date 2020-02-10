import React from 'react';
import {Flex, Box} from 'rebass';
import styled from 'styled-components';
import {color} from 'styled-system';

const StyledBox = styled(Box)`
    ${color}
`

const Transaction = (props) => {
    const {name, type, amount} = props.details;
    return (
        <StyledBox type={props.details.type} bg={props.details.type === 1 ? "income" : "spending"}>
            <p>{name}</p>
            <p>${amount}</p>
            <p>{type}</p>
        </StyledBox>
    )
}

export default Transaction