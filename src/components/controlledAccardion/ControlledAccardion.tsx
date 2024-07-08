import React, { useReducer, useState } from 'react';
import { reducer, TOGGLE_CONSTANT } from './reducer';

const items = [
    { id: 1, name: 'CSS' },
    { id: 2, name: 'JS' },
    { id: 3, name: 'TS' },
    { id: 4, name: 'React' },
    { id: 5, name: 'HTML' },
]

export const ControlledAccardion = () => {

    // let [collapsed, setCollapsed] = useState(false)
    let [state, dispatch] = useReducer(reducer, { collapsed: false })


    const listItems = items.map(item => <li key={item.id}>{item.name}</li>)

    return (
        <div>
            <h1
                // onClick={() => { setCollapsed(!collapsed) }}
                onClick={() => { dispatch({ type: TOGGLE_CONSTANT }) }}
                style={{ cursor: 'pointer' }}
            >NOW  Controlled Menu items</h1>
            {!state.collapsed && <ul >{listItems}</ul>}
        </div>
    );
};
