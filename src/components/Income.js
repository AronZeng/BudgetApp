import React from 'react';
import Transaction from './Transaction'

const Income = (props) => {
    return (
        <Box>
            <h2> Income</h2>
            {props.income.map(income => 
                <Transaction>
                </Transaction>
            )}
        </Box>
    )
}

export default Income