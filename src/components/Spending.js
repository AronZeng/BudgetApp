import React from 'react';
import DataTable from 'react-data-table-component';
import Data from '../SampleData2';
import AddTransaction from './AddTransaction';

const Spending = (props) => {

    

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
                title= "Spending"
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

export default Spending