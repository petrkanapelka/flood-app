import React from "react"
import { useState } from "react"

export default {
    title: 'UseSate',
    component: 'UseState'
}


const Counter = React.memo((props: any) => {
    console.log("Counter")

    return <div>{props.count}</div>
})

const generateData = () => {
    console.log("generateData")
    let i = 0;
    while (i < 900000000) {
        i++
    }
    return 500;
}


export const ExampleUseState = () => {
    console.log("🚀 ~ ExampleUseState ~ 'usestate' ➔", 'usestate');

    const [counter, setCounter] = useState(generateData)

    const changer = (state: number) => {
        console.log('changer')
        return state + 1
    }

    return (
        <>
            <button onClick={() => { setCounter(changer) }}>+</button>
            <Counter count={counter} />
        </>
    )
}
