import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import Data from '../SampleData2';
import AddTransaction from './AddTransaction';

const Spending = (props) => {

    const [data , setData] = useState([]);

    useEffect(() => {
        Data === [] ?  setData([]) : setData([...Data]) //in the future Data would be from an API call
    }, [])


    const addTransaction = (transaction) => {
        let newTransaction = {
            name: transaction.name,
            amount: transaction.amount,
            date: transaction.date,
            type: transaction.type
        }
        data === [] ? setData([newTransaction]) : setData([ ...data, newTransaction])
        
    }

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
        },
        {
            name: 'Date',
            selector: 'date',
            sortable: 'true',
            left: 'true',
        },
        {
            name: 'Type',
            selector: 'type',
            sortable: 'true',
            left: 'true',
        }
    ]

    return (
        <>
            <DataTable
                title= "Spending"
                columns={columns}
                data={data}
            />
            <AddTransaction dropdownvalues={["Food" , "Luxury", "Utilities"]} addTransaction={addTransaction} />
        </>
    )
}

export default Spending