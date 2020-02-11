import React from 'react';
import DataTable from 'react-data-table-component';
import Data from '../SampleData2';
import AddTransaction from './AddTransaction';

const Income = (props) => {

    const columns = [
        {
            name: 'Name',
            selector: 'name',
            sortable: 'true',
            left: 'true',
        },
        {
            name: 'Amount',
            selector: 'amount',
            sortable: 'true',
            left: 'true',
        }
    ]

    return (
        <>
            <DataTable
                title= "Income"
                columns={columns}
                data={Data}
                style={{
                    backgroundColor: "red"
                }}
            />
            <AddTransaction/>
        </>
    )
}

export default Income