import React from 'react';

export default function List(props) {
    return (
        <div className="list">
            {props.items.map(item => (
                <div className="list__item" key={item.id}>
                    {item.text}
                </div>
            ))}
        </div>
    );
}