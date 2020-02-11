import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';

class NormalLoginForm extends React.Component {
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
      const userName = this.props.form.getFieldValue('username');
      this.props.history.push(`/user/${userName}`)
    };
  
    render() {
      //getFieldDecorator gives us the binding for the form
      const { getFieldDecorator } = this.props.form;
      return (
        <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                placeholder="Username"
                size="large"
              />,
            )}
            <Button htmlType="submit" type="primary">
              Submit
            </Button>
          </Form.Item>
          {/* <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item> */}
        </Form>
        </>
      )
    }
  }


  const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

  export default WrappedNormalLoginForm