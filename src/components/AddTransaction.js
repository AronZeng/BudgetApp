import React from 'react';
import {
    Label,
    Input,
    Select,
    Textarea,
    Radio,
    Checkbox
} from '@rebass/forms';
import {Box, Button} from 'rebass';

class AddTransaction extends React.Component {

    nameRef = React.createRef();
    typeRef = React.createRef();
    amountRef = React.createRef();

    createTransaction = (event) => {
        event.preventDefault();
        const transaction = {
            name: this.nameRef.current.value,
            type: this.typeRef.current.value,
            amount: parseInt(this.amountRef.current.value)
        }
        this.props.addTransaction(transaction);
        event.currentTarget.reset();
    }

    render() {
        return(
            <form onSubmit={this.createTransaction}>
                <input placeholder="Name" ref={this.nameRef}/>
                <input placeholder="Amount" ref={this.amountRef}/>
                <select ref={this.typeRef}>
                    <option value="Spending">Spending</option>
                    <option value="Income">Income</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default AddTransaction