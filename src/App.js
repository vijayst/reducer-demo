import React, { useState } from 'react';
import Form from './Form';
import List from './List';

let i = 1;

export default function App(props) {
    let [items, setItems] = useState([]);

    function handleAdd(text) {
        items = items.slice();
        items.push({
            id: i++,
            text
        });
        setItems(items);
    }

    return (
        <div>
            <Form onAdd={handleAdd} />
            <List items={items} />
        </div>
    );
}