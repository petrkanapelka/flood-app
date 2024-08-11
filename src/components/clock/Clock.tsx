import { AnalogClock } from './AnalogClock';
import { DigitalClockView } from './DigitalClock';
import { useEffect, useState } from 'react';

export type ClockType = {
    mode: 'digital' | 'analog'
};

export function getTwoDigitString(number: number) {
    return number < 10 ? '0' + number : number
}

export const Clock = ({ mode }: ClockType) => {

    let [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    let view;

    switch (mode) {
        case 'digital':
            view = <DigitalClockView date={date} />
            break;
        case 'analog':
            view = <AnalogClock date={date} />
            break;
        default:
            break;
    }


    return (
        <>
            {view}
        </>
    );
};



