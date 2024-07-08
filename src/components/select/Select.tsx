import { useState, KeyboardEvent, useEffect } from 'react';
import styles from './Select.module.css'

export const itemsSelected =
    [
        { value: '1', title: 'Minsk' },
        { value: '2', title: 'Moscow' },
        { value: '3', title: 'Kiev' }
    ]


type ItemType = {
    title: string
    value: any
};

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}


export const Select = (props: SelectPropsType) => {

    const [active, setActive] = useState(false)

    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const toggleItems = () => setActive(!active)

    const clickOnItem = (value: any) => {
        props.onChange(value);
        setActive(!active);
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        setHoveredElementValue(pretendentElement.value)
                        break;
                    }
                }
            }
            props.onChange(props.items[0].value)
        }

        if (e.key === 'Escape' || e.key === 'Enter') {
            setActive(false);
        }
    }

    return (
        <div onKeyUp={onKeyUp} tabIndex={0}>
            <h3
                className={styles.select}
                onClick={toggleItems}>{selectedItem && selectedItem.title}</h3>
            {active &&
                <div className={styles.items}>
                    {props.items.map(i => <div
                        onMouseEnter={() => setHoveredElementValue(i.value)}
                        className={hoveredItem?.value === i.value ? styles.selected : ''}
                        key={i.value}
                        onClick={() => clickOnItem(i.value)}
                    >{i.title}</div>)}
                </div>
            }
        </div>
    );
};