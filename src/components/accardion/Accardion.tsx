import React, { useState } from 'react';

const items = [
    { id: 1, name: 'CSS' },
    { id: 2, name: 'JS' },
    { id: 3, name: 'TS' },
    { id: 4, name: 'React' },
    { id: 5, name: 'HTML' },
]

export const Accardion = () => {
    let [collapsed, setCollapsed] = useState(false)

    const listItems = items.map(item => <li key={item.id}>{item.name}</li>)

    return (
        <div>
            <h1 onClick={() => { setCollapsed(!collapsed) }} style={{cursor: 'pointer'}} onDoubleClick={(e)=>alert(e.currentTarget.tagName)}>Menu items</h1>
            {!collapsed && <ul>{listItems}</ul>}
        </div>
    );
};
