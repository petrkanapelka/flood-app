import React from "react";
import { useMemo, useState } from "react";

export default {
    title: 'useMemo'
}

export const Example = () => {
    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)

    let resultA = 1;
    let resultB = 1;


    resultA = useMemo(() => {
        let resultA = 1;
        for (let i = 1; i <= a; i++) {
            resultA = resultA * i
        }
        return resultA
    }, [a])

    resultB = useMemo(() => {
        let resultB = 1;
        for (let i = 1; i <= b; i++) {
            resultB = resultB * i
        }
        return resultB
    }, [b])


    return (
        <>
            <input value={a} onChange={(e) => { setA(+e.currentTarget.value) }} />
            <input value={b} onChange={(e) => { setB(+e.currentTarget.value) }} />
            <hr></hr>
            <div> Result for a: {resultA}</div>
            <div> Result for a: {resultB}</div>
        </>
    )
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log("🚀 ~ UsersSecret ~ UsersSecret ➔");
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReacMemo = () => {
    console.log("🚀 ~ HelpsToReacMemo ~ HelpsToReacMemo");
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Valera', 'Vasia', 'Petr', 'Agator'])

    const addUser = () => {
        console.log("🚀 ~ addUser ~ addUser ➔");
        const newUser = (`${'Sveta' + ' ' + new Date().getTime()}`)
        setUsers([...users, newUser])
    }

    const newUsers = useMemo(() => {
        console.log("🚀 ~ newUsers ~ newUsers ➔");
        return users.filter(u => u.toLowerCase().indexOf('a') >= 0)
    }, [users])

    return (
        <>
            <button onClick={() => { setCounter(counter + 1) }}>+</button>
            <button onClick={addUser}>add user</button>
            {counter}
            <Users users={newUsers} />
        </>
    )
}
