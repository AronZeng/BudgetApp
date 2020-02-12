import React, { useEffect, useState } from 'react';
import SampleData from '../SampleData'
import InfoCard from './InfoCard';
import {Box , Flex} from 'rebass';
import {Card} from 'antd';
import Transaction from './Transaction';
import styled from 'styled-components';
import AddTransaction from './AddTransaction';
import { HotKeys, GlobalHotKeys} from 'react-hotkeys';


const tabList = [
  {
    key: 'Income',
    tab: 'Income'
  },
  {
    key: 'Spending',
    tab: 'Spending'
  },
]

const User = (props) => {


  const [name, setName] = useState("");
  const [transactions, setTransactions] = useState({});
  const [income, setIncome] = useState([]);
  const [spending, setSpending] = useState([]);
  const [key, setKey] = useState("Income");
    

  useEffect(() => {
    setName(props.match.params.userName);
    let income = [];
    let spending = [];
    SampleData[props.match.params.userName].transactions.map(transaction => {
        if (transaction.type === 1) {
            income.push(transaction);
        }
        else {
            spending.push(transaction);
        }
    })
    console.log(income)
    console.log(spending)
    let res = {
      Income: income,
      Spending: spending
    }
    console.log(res)
    setTransactions(res)
    console.log(transactions)
  }, [])




  const addTransaction = (transaction) => {
        if(transaction.type === "Income"){
            setIncome([...income , transaction])  
        }
        else{
            setSpending([...spending, transaction])
        }
    }

  const onTabChange = (key) => {
      setKey(key);
    };

    return(
      <>
            <Card 
              title="Transactions"
              style={{
              width: "50%",
              margin: 10,
              }}
              tabList={tabList}
              onTabChange={key => {
              onTabChange(key);
              }}
            >
            {transactions[key] === undefined ? "Loading ..." : 
              transactions[key].map(item => 
                <Card>
                  <Flex>
                    <Box width={1/2}>
                      <p>{item.name}</p>
                    </Box>
                    <Box width={1/2} style={{
                      textAlign: "right"
                    }}>
                      <p>${item.amount}</p>
                    </Box>
                  </Flex>
                </Card>
                )  
            }
            </Card>
            <AddTransaction  addTransaction={addTransaction} dropdownvalues={["Income", "Spending"]}/>
        </>
      )
}

export default User;