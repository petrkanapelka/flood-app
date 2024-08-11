import { getTwoDigitString } from "./Clock"

type DigityalClockType = {
    date: Date
}

export const DigitalClockView = ({ date }: DigityalClockType) => {
    return (
        <div >
            <span>{getTwoDigitString(date.getHours())}</span>
            :
            <span>{getTwoDigitString(date.getMinutes())}</span>
            :
            <span>{getTwoDigitString(date.getSeconds())}</span>
        </div>
    )
}