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
    let incomeArray = [];
    let spendingArray = [];
    //only works on first render
    SampleData[props.match.params.userName].transactions.map(transaction => {
      if (transaction.type === 1) {
          incomeArray.push(transaction);
      }
      else {
          spendingArray.push(transaction);
      }
    })

    let res = {
      Income: incomeArray,
      Spending: spendingArray
    }
    setTransactions(res)
  }, [])



//might not need this separate income/spending array
  const addTransaction =  (transaction) => {
    console.log(transaction)
    let newTransactions = {...transactions}
    if(transaction.type === "Income"){
        newTransactions.Income = [...newTransactions.Income , transaction]
    }
    else{
      newTransactions.Spending = [...newTransactions.Spending , transaction]
    }
    setTransactions(newTransactions)
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