import React, { useEffect } from 'react';
import SampleData from '../SampleData'
import InfoCard from './InfoCard';
import {Box , Flex} from 'rebass';
import Transaction from './Transaction';
import styled from 'styled-components';
import AddTransaction from './AddTransaction';
import { transformAsync } from '@babel/core';


const CenteredBox = styled(Box)`

`


class User extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            money: '',
            income: [],
            spending: []
        }
    }

    componentDidMount() {
        const userName = this.props.match.params.userName
        this.setState({
            name: userName,
            money: SampleData[userName].money,
        });
        let income = []
        let spending = []
        SampleData[userName].transactions.map(transaction => {
            if (transaction.type === 1) {
                income.push(transaction);
            }
            else {
                spending.push(transaction);
            }
        })
        this.setState({
            income: income,
            spending : spending
        })
    }


    addTransaction = (transaction) => {
        let transactions = []
        console.log(transaction.type)
        if(transaction.type === "Income"){
            transactions = [...this.state.income];
            transactions.push(transaction);
            this.setState({income : transactions});
        }
        else{
            transactions = [...this.state.spending];
            transactions.push(transaction);
            this.setState({spending : transactions});
        }
    }

    render(){
        return(
            <React.Fragment>
                <h1>{this.state.name}</h1>
                <h2>Balance</h2>
                <p>${this.state.money}</p>
                <Flex>
                    <CenteredBox width={1/2} px={16}>
                    <h2>Income</h2>
                        {(this.state.income).map(transaction => 
                            <Transaction details={transaction} bg={transaction.type === 0 ? 'Red' : 'Green'}>
                            </Transaction>)}
                    </CenteredBox>
                    <CenteredBox width={1/2} px={16}>
                        <h2>Spending</h2>
                        {(this.state.spending).map(transaction =>
                            <Transaction details={transaction} bg={transaction.type ===0 ? 'Red' : 'Green'}>                                
                            </Transaction>)}
                    </CenteredBox>
                </Flex>

                <h2>
                    Add Transaction
                </h2>
                <AddTransaction  addTransaction={this.addTransaction}/>
            </React.Fragment>
        )
    }
}

export default User;