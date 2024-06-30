import { ChangeEvent, useRef, useState } from "react";

export default {
    title: 'input'
}

export const UncontrolledInput = () => <input />
export const TrackUncontrolledInput = () => {
    const [value, setValue] = useState('');
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => { setValue(e.currentTarget.value) }
    return (
        <>
            <input onChange={onChangeHandler} />
            {value}
        </>
    )
}
export const GetValueUncontrolledInput = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const onClickHandler = () => {
        const el = inputRef.current?.value
        setValue(el!)
    }
    return (
        <>
            <input ref={inputRef} />
            <button onClick={onClickHandler}>save</button>
            --actual value:{value}
        </>
    )
}
export const ControlledInput = () => <input value={'it-incubator'} />