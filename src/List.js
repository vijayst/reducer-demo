import React from 'react';

export default function List(props) {
    return props.items.map(item => (
        <div key={item.id}>
            {item.text}
        </div>
    ));
}