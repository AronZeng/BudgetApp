import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';

class LoginForm extends React.Component {

    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          return
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
        <Form layout="veritcal" onSubmit={this.handleSubmit}>
          <Form.Item
            style={{
              marginBottom: 10
            }}
          >
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                placeholder="Username"
                size="large"
                style={{
                  marginBottom: 10
                }}
              />,
            )}
              <Input
                placeholder="Password"
                size="large"
              />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary">
              Submit
            </Button>
          </Form.Item>
        </Form>
        </>
      )
    }
  }


  const WrappedLoginForm = Form.create()(LoginForm);

  export default WrappedLoginForm