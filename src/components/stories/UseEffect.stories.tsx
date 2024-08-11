import React, { useEffect } from "react"
import { useState } from "react"

export default {
    title: 'UseEffect',
    component: 'UseEffect'
}


const Counter = React.memo((props: any) => {
    // console.log("Counter")

    return <div>{props.count}</div>
})



export const SimpleUseEffect = () => {
    console.log("🚀 ~ ExampleUseState ~ 'usestate' ➔", 'usestate');

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log('use effect every render');
    })

    useEffect(() => {
        console.log('use effect first time');
    }, [])

    useEffect(() => {
        console.log('use effect when counter changing');
        document.title = counter.toString()
    }, [counter])

    return (
        <>
            <button
                onClick={() => { setCounter(counter + 1) }}
                onDoubleClick={() => setCounter(counter + 50)}
                onMouseEnter={() => setCounter(counter + 100)}>+</button>
            <Counter count={counter} />
        </>
    )
}

export const SetIntervalUseEffect = () => {
    console.log('SetIntervalUseEffect');

    let [date, setDate] = useState(new Date())


    useEffect(() => {
        console.log('use effect');
        const intervalId = setInterval(() => {
            console.log('setInterval');
            setDate(prevstate => new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])


    return (
        <>
            <div>
                {date.toLocaleTimeString()}
            </div>
            <div>
                {date.toTimeString()}
            </div>
        </>
    )
}

export const ResetEffectExample = () => {
    console.log('ResetEffectExample');

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log('use effect ');
        return () => {
            console.log('reset effect');
        }
    }, [counter])
    const increase = () => {
        setCounter(counter + 1)
    }

    return (
        <>
            <button
                onClick={increase}
            >+</button>
            <Counter count={counter} />
        </>
    )
}


export const KeysTrackerExample = () => {

    let [text, setText] = useState('')

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            setText(prev => prev + e.key)
            console.log(e.key);
        }
        window.document.addEventListener('keypress', handler)
        return () => {
            console.log('remove effect');
            window.document.removeEventListener('keypress', handler)
        }
    }, [])

    return (
        <>
            Typed text: {text}
        </>
    )
}