import React from 'react';
import {Checkbox, Button} from 'antd';
import {DeleteOutlined} from '@ant-design/icons';

export const ToDoItem = (props) => {
    const { item, onCheck, onRemove } = props;
    const check = () => {
        onCheck(item.id);
        
    }
    
    const remove = () => {
        onRemove(item.id)
    }

    return (
       <li className={'todo-item'} >
            <Checkbox checked={item.checked} onChange={check}  
            style={{'textDecorationLine': item.checked ? 'line-through' : 'none','color' : 'blue', 'textDecorationColor': 
            item.checked ? 'color':'red'} }>{item.name}{item.description}</Checkbox>
            
            <Button type = "danger" onClick={remove}><DeleteOutlined /></Button>
        </li>
        

    )
}