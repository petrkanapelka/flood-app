import { styled } from "styled-components";
import { getTwoDigitString } from "./Clock";

type AnalogClockType = {
    date: Date
}

export const AnalogClock = ({ date }: AnalogClockType) => {
    const styleClock: React.CSSProperties = {
        borderRadius: '100%',
        border: '2px solid black',
        width: '100px',
        height: '100px',
        marginTop: '20px',
        position: 'relative'
    }

    return (
        <div style={styleClock}>
            <StyledArrow date={date.getSeconds()} width={1} height={45} background='red' ratio={6} />
            <StyledArrow date={date.getMinutes()} width={2} height={40} background='black' ratio={6} />
            <StyledArrow date={date.getHours()} width={2} height={25} background='black' ratio={30} />
        </div>
    );
};

type StyledArrowTypes = {
    date: number
    width: number
    height: number
    background: string
    ratio: number
}

const StyledArrow = styled.div<StyledArrowTypes>`
    width: ${props => props.width + 'px'};
    height: ${props => props.height + 'px'};
    background: ${props => props.background};
    transform: translate(-50%, -100%) rotate(${props => getTwoDigitString(props.date * props.ratio)}deg);
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: center bottom;
`;