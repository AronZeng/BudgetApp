import React, {useRef} from 'react';
import {Box , Flex} from 'rebass';
import LoginForm from './LoginForm';
import {Input} from 'antd';








const UserPicker = (props) => {

    return (
        <>
            <Flex>
                <Box width={1/3}/>
                <Box width={1/3}>
                    <h2>
                        Enter User Name
                    </h2>
                    <LoginForm history={props.history}/>
                </Box>                
                <Box width={1/3}/>
            </Flex>
        </>
    )
}



export default UserPicker