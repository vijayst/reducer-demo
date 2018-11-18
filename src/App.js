import React, { useReducer } from 'react';
import Form from './Form';
import List from './List';
import './app.css';
import todoReducer from './todoReducer';

export default function App(props) {
    let [items, dispatch] = useReducer(todoReducer, []);

    function handleAdd(text) {
        dispatch({
            type: 'ADD_TODO',
            text
        });
    }

    function handleDelete(id) {
        dispatch({
            type: 'DELETE_TODO',
            id
        });
    }


    return (
        <div className="app">
            <Form onAdd={handleAdd} />
            <List items={items} onDelete={handleDelete} />
        </div>
    );
}