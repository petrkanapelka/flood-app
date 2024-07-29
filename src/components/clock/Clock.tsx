import { node } from 'prop-types';
import * as React from 'react';
type Props = {
    type: 'digital' | 'analog'
};

export const Clock = (props: Props) => {
    const [date, setDate] = React.useState(new Date())

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    function getTwoDigitString(number: number) {
        return number < 10 ? '0' + number : number
    }

    return (
        <>
            <div style={props.type === 'digital' ? { display: 'block' } : { display: 'none' }}>
                <span>{getTwoDigitString(date.getHours())}</span>
                :
                <span>{getTwoDigitString(date.getMinutes())}</span>
                :
                <span>{getTwoDigitString(date.getSeconds())}</span>
            </div>
            <div
                style={props.type === 'digital' ? { display: 'none' } : { borderRadius: '100%', border: '2px solid black', width: '100px', height: '100px', marginTop: '20px', position: 'relative' }}>
                <div
                    style={{ width: '1px', height: '45px', background: 'red', position: 'absolute', top: '50%', left: '50%', transform: `translate(-50%, -100%) rotate(${getTwoDigitString(date.getSeconds() * 6)}deg)`, transformOrigin: 'center bottom' }}>
                </div>
                <div
                    style={{ width: '2px', height: '40px', background: 'black', position: 'absolute', top: '50%', left: '50%', transform: `translate(-50%, -100%) rotate(${getTwoDigitString(date.getMinutes() * 6)}deg)`, transformOrigin: 'center bottom' }}>
                </div>
                <div
                    style={{ width: '2px', height: '25px', background: 'black', position: 'absolute', top: '50%', left: '50%', transform: `translate(-50%, -100%) rotate(${getTwoDigitString(date.getHours() * 30)}deg)`, transformOrigin: 'center bottom' }}>
                </div>
            </div>
        </>
    );
};