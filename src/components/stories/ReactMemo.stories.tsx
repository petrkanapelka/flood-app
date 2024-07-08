import React from "react"
import { useState } from "react"

export default {
    title: 'ReactMemo',
    component: 'ReactMemo'
}


const MessageCounter = (props: any) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const Example = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Valera', 'Vasia', 'Petr'])

    const addUser = () => {
        const newUser = (`${'Sveta' + ' ' + new Date().getTime()}`)
        setUsers([...users, newUser])
    }
    return (
        <>
            <button onClick={() => { setCounter(counter + 1) }}>+</button>
            <button onClick={addUser}>add user</button>
            <MessageCounter count={counter} />
            <Users users={users} />
        </>
    )
}