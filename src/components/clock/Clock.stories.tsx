import { useState } from "react";
import { Clock, ClockType } from "./Clock";


export default {
    title: 'Clock',
    component: Clock
}


export const BaseAnalogExample = () => {
    return (
        <Clock mode='analog' />
    )
}

export const BaseDigitalExample = () => {
    return (
        <Clock mode='digital' />
    )
}


export const BaseClockExample = () => {
    let [stateClock, setStateClock] = useState<ClockType>({ mode: 'digital' })
    const onClickHandeler = () => {
        setStateClock(prev => prev.mode === 'analog' ? { mode: 'digital' } : { mode: 'analog' })
    }
    return (
        <>
            <button onClick={onClickHandeler}>SWITCH CLOCK</button>
            <Clock mode={stateClock.mode} />
        </>
    )
}