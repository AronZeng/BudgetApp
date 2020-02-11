import React from 'react'
import {Input, Button} from 'antd'
import 'antd/dist/antd.css';


class Random extends React.Component {
    render() {
        return (
            <>
              <Input 
                size="large" 
                placeholder="Why is this not working"
              />
              <Button
                size="large"
                type="primary"
              >
                Test
              </Button>
            </>
        )
    }
}

export default Random
