import React, { useEffect } from "react"
import { useState } from "react"

export default {
    title: 'UseEffect',
    component: 'UseEffect'
}


const Counter = React.memo((props: any) => {
    console.log("Counter")

    return <div>{props.count}</div>
})



export const SimpleUseEffect = () => {
    console.log("🚀 ~ ExampleUseState ~ 'usestate' ➔", 'usestate');

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log('use effect every render');
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('use effect first time');
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('use effect when counter changing');
        document.title = counter.toString()
    }, [counter])

    return (
        <>
            <button onClick={() => { setCounter(counter + 1) }}>+</button>
            <Counter count={counter} />
        </>
    )
}
