import React from 'react';
import {Form, Input, Button, Select, DatePicker} from 'antd';
import {Box, Flex} from 'rebass';

class AddTransaction extends React.Component {

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) {
        alert("Insufficient form data")
        return
      }
      const formValues = this.props.form.getFieldsValue();
      const transaction = {
        name: formValues.name,
        amount: formValues.amount,
        type: formValues.type,
        date: formValues.date._d.toDateString()
      }
      this.props.addTransaction(transaction);
      this.props.form.resetFields();
    })

  }
  

    render () {
      const {Option} = Select;
      const { getFieldDecorator } = this.props.form;
      return (
        <>
        <Flex>
          <Box width={1/2} margin={10}>
          <h2>Add a transaction</h2>
          <Form onSubmit={this.handleSubmit}>
            <Form.Item>
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Please input the name' }],
            })(
              <Input
                placeholder="Name"
                size="large"
              />,
            )}
            </Form.Item>
            <Form.Item>
            {getFieldDecorator('amount', {
              rules: [{required: true, message: "Please input the amount"}],
            })(
              <Input
                placeholder="Amount"
                size="large"
              />
            )}
            </Form.Item>
            <Form.Item>
            {getFieldDecorator('type', {
              rules: [{required: true, message: "Please select the type of transaction"}],
            })(
              <Select 
                size="large"
                mode="default" 
                placeholder="Transaction Type"
                >
                  {this.props.dropdownvalues.map(value => 
                    <Option value={value}>{value}</Option>
                  )}
              </Select>
            )}
            </Form.Item>
            <Form.Item>
            {getFieldDecorator('date', {
              rules: [{required: true, message: "Please select the date"}],
            })(
              <DatePicker size="large"/>
            )}
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" type="primary">
                Submit
              </Button>
            </Form.Item>
          </Form>
          </Box>
          <Box width={1/2}/>
          </Flex>
        </>
      )
    }
}

const WrappedAddTransaction = Form.create()(AddTransaction);

export default WrappedAddTransaction