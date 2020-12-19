import React from 'react';
import { Card, Col, Divider, Row } from 'antd';
import { Link } from 'react-router-dom';


export const CheckedToDos = (props) => {
    const { todos } = props;
    const checkedTodos = todos.filter(todo => todo.checked === true);
    return(
        <Card title={'Completed Todo List'}>
            <Row>
                <Col>
                    <ul className={'todo-list'}>
                        {checkedTodos.length > 0 ? (
                            <>
                                {checkedTodos.map(item => (
                                    <li className={'todo-item'} >
                                        {item.name}
                                    </li>
                                ))}
                            </>
                        ) : (
                            <li className={'todo-item'} >
                                No Completed Todos Yet!!!!
                            </li>
                        )}
                    
                    </ul>
                </Col>
            </Row>
            <Divider />
            <Row>
                <Col>
                    <Link to="/" className="ant-btn">Back To Home</Link>
                </Col>
            </Row>
        </Card>
    )
}