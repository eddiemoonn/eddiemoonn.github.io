import React, { useState } from 'react';
import { Card, Divider, Col, Row, Button } from 'antd';
import { ToDoItem } from './ToDoItem';
import { ToDoForm } from './ToDoForm';



export const ToDo = () => {
    const [todos, setTodos] = useState([{id: 1, name: 'todo 1', description:' des 1', checked: false},
                                        {id: 2, name: 'todo 2', description:' des 2', checked: false}]);
    
    const [ids, setIds] = useState(10);

    const [ numUnCheckedTodos, setNumUnCheckedTodos ] = useState(0);

    
    const onCheck =(id) => {
        const index = todos.findIndex(todo=> todo.id === id);
        const todo = todos[index];
                                        
        todo.checked = !todo.checked;
        setTodos([...todos]);
        calculateTotalUncheckedTodos();
    }

    const calculateTotalUncheckedTodos = () => {
        // Calculate Total UnChecked Todos
        const totalUnCheckedTodos = todos.filter(todo => todo.checked === false);
        setNumUnCheckedTodos(totalUnCheckedTodos.length);
    }

    const onRemove = (id) => {
        const index = todos.findIndex(todo=> todo.id === id);
    
        todos.splice(index, 1);
        setTodos([...todos]);
        calculateTotalUncheckedTodos();
    }


    const onSubmit = (name, description) => {
        const totalUnCheckedTodos = todos.filter(todo => todo.checked === false);
        setNumUnCheckedTodos(totalUnCheckedTodos.length + 1);
        const todo = {
            id: ids,
            name,
            description,
            checked: false
        };
        setTodos([...todos, todo]);
        setIds(ids + 1);
        
    }

    const removeAllChecked = () => {
        // filter the original array to get all unchecked
        if (todos.length > 0) {
            // Filtering will return an array of unchecked todos
            const uncheckedTodos = todos.filter(todo => todo.checked === false);
            // Now set the unchecked Todos to be the new todos
            setTodos(uncheckedTodos);

            calculateTotalUncheckedTodos();
        }
    }

    const renderItems = (todos) => {
        if (!todos.length) {
            return (
                <ul className={'todo-list'}>
                    <li className={'todo-item'} >
                        Are You Ready To Start A Todo List?
                    </li>
                </ul>
            )
        }

        return (
            <ul className={'todo-list'}>
                { todos.map(todo=>{
                    return <ToDoItem item={todo} onCheck={onCheck} onRemove={onRemove}/>
                })}
            </ul>
        )
 
    
    }
    return(
        <Card title={'My Todo List'}>
            <ToDoForm onSubmit={onSubmit} />
            <Divider />
            { renderItems(todos) }
            <Divider />
            <Row>
                <Col span="12">
                    <Button 
                        type="primary" 
                        danger
                        onClick={removeAllChecked}
                    >
                        Remove All Checked
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col span="12">
                    <ul class="ant-list-items">
                        <li class="ant-list-item">Total UnChecked Todos: <strong>{ numUnCheckedTodos }</strong></li>
                        
                        <li class="ant-list-item">Total Todos: <strong>{ todos.length }</strong></li>
                    </ul>
                </Col>
            </Row>
        </Card>
    )

}