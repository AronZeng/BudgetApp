import React, { useEffect } from 'react';
import SampleData from '../SampleData'
import InfoCard from './InfoCard';
import {Box} from 'rebass';
import Transaction from './Transaction';
import styled from 'styled-components';
import AddTransaction from './AddTransaction';


const StyledTransaction = styled(Transaction)` 
    background-color: ${props => props.bg};
`

class User extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            money: '',
            transactions: []
        }
    }

    componentDidMount() {
        const userName = this.props.match.params.userName
        this.setState({
            name: userName,
            money: SampleData[userName].money,
            transactions: SampleData[userName].transactions
        })
    }


    addTransaction = (transaction) => {
        // const transactions = {...this.state.transactions};
        // transactions.push(transaction);
        this.setState({transactions : [...this.state.transactions , transaction]});
    }

    render(){
        return(
            <React.Fragment>
                <h1>{this.state.name}</h1>
                <h2>Total money</h2>
                <p>{this.state.money}</p>
                <h2>Transactions</h2>
                <ul>
                    {(this.state.transactions).map(transaction => 
                        <StyledTransaction details={transaction} bg={transaction.type === 0 ? 'Red' : 'Green'}>
                        </StyledTransaction>)}
                </ul>
                <h2>
                    Add Transaction
                </h2>
                <AddTransaction  addTransaction={this.addTransaction}/>
            </React.Fragment>
        )
    }
}

export default User;