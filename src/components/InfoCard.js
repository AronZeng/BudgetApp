import React from 'react';
import {Box , Flex} from 'rebass/styled-components';

const InfoCard = (props) => {
    const {money, transactions} = props.value;
    return (
        <>
            <Box>
                <h1>Info</h1>
                    {money}
            </Box>
            <Box>
                {transactions[0].name}
            </Box>
        </>
    )
}

export default InfoCard