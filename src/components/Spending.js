import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import Data from '../SampleData2';
import AddTransaction from './AddTransaction';
import {Alert} from 'antd';
import styled from 'styled-components';

const Spending = (props) => {

    const StyledAlert = styled(Alert)`
      display: ${() => displayAlert === true ? "" : "none"};
      z-index: 5000;
      margin: 10;
    `
    const [displayAlert , setDisplayAlert] = useState(false);
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
        setDisplayAlert(true);
        setTimeout(() => {
          setDisplayAlert(false)
        }, 5000)
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
            <StyledAlert
                message="Success"
                description="Successfully added a transaction"
                type="success"
                showIcon                
            />
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