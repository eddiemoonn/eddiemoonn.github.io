import React from 'react';
import {Form, Input, Button} from 'antd'

const {Item} = Form;

export const ToDoForm = (props) => {
    const {onSubmit} = props;
    const finish = (values) => {
        onSubmit(values.name, values.description)
    }

    return(
        <Form className={'todo-form'} layout={'horizontal'} onFinish={finish}>
            <Item name={'name'} label="Title" >
                <Input pattern="^[A-Z][a-zA-Z0-9]{2,}" title="3 characters minimum, must start with capital letter" />
            </Item>
            <Item name={'description'} label="Description">
                <Input pattern="^[A-Z][a-zA-Z0-9]{2,}" title="3 characters minimum, must start with capital letter" /> 
            </Item>
            <Item>
                <Button htmlType={'submit'}>Add</Button>
            </Item>
        </Form>
    )
}