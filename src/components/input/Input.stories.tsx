import { ChangeEvent, useRef, useState } from "react";


export default {
    component: 'input'
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
export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('');
    return (
        <input value={parentValue} onChange={(e) => {
            // action('want to change');
            setParentValue(e.currentTarget.value)
        }} />
    )
}

export const ControlledCheckBox = () => {
    const [parentValue, setParentValue] = useState(true);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)

    }
    return (
        <input type='checkbox' checked={parentValue} onChange={onChange} />
    )
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined);
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return (
        <select value={parentValue} onChange={onChange}>
            <option >None</option>
            <option value={'1'}>Minsk</option>
            <option value={'2'}>Kiev</option>
            <option value={'3'}>Moscow</option>
        </select>
    )
}