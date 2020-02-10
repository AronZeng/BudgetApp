import React, { useEffect } from 'react';
import SampleData from '../SampleData'
import InfoCard from './InfoCard';
import {Box , Flex} from 'rebass';
import Transaction from './Transaction';
import styled from 'styled-components';
import AddTransaction from './AddTransaction';
import { HotKeys, GlobalHotKeys} from 'react-hotkeys';


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
        if(transaction.type === "Income"){
            transaction.type = 1;
            this.setState((prevState) => ({
                income: [...prevState.income , transaction]
            }))
        }
        else{
            transaction.type = 0;
            this.setState((prevState) => ({
                spending:[...prevState.spending , transaction]
            }))
        }
    }



    render(){
        return(
            <React.Fragment>
                <GlobalHotKeys keyMap={this.NAV_SHORTCUTS} handlers={this.TOGGLE_JUMP}>
                <h1>{this.state.name}</h1>
                <h2>Balance</h2>
                <p>${this.state.money}</p>
                <Flex>
                    <CenteredBox width={1/2} px={16}>
                    <h2>Income</h2>
                        {(this.state.income).map(transaction => 
                            <Transaction details={transaction} >
                            </Transaction>)}
                    </CenteredBox>
                    <CenteredBox width={1/2} px={16}>
                        <h2>Spending</h2>
                        {(this.state.spending).map(transaction =>
                            <Transaction details={transaction} >                                
                            </Transaction>)}
                    </CenteredBox>
                </Flex>

                <h2>
                    Add Transaction
                </h2>
                <AddTransaction  addTransaction={this.addTransaction}/>
                </GlobalHotKeys>
            </React.Fragment>
        )
    }
}

export default User;