import React, {useRef} from 'react';
import {Box , Flex, Button} from 'rebass';
import{
    Label,
    Input,
    Select,
    Textarea,
    Radio,
    Checkbox
} from '@rebass/forms';





const UserPicker = (props) => {
    const findUser = event => {
        event.preventDefault();
        const userName = userInput.current.value;
        props.history.push(`/user/${userName}`)
    }
    let userInput = useRef('');


    return (
        <Box 
        as='form'
        onSubmit={findUser}>
            <Flex>
                <Box width={1/3}/>
                <Box width={1/3}>
                    <h1>
                        Enter User Name
                    </h1>
                        <Input required placeholder="User" ref={userInput}/>
                        <button type="submit">Enter</button>
                </Box>                
                <Box width={1/3}/>
            </Flex>
        </Box>
    )
}

export default UserPicker