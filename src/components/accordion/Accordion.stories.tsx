import { useState } from "react";
import { action } from '@storybook/addon-actions'
import { Accordion } from "./Accordion";


export default {
    title: 'Accordion',
    component: Accordion
}

const callback = action('accordion mode change event fired');

const onClickCallBack = action('sddsdsd')

export const MenuCollapsed = () => <Accordion
    titleValue="Menu"
    collapsed={true}
    onChange={callback}
    items={[]}
    onClick={onClickCallBack}
/>

export const UsersUnCollapsed = () => <Accordion
    titleValue="Users"
    collapsed={false}
    onChange={callback}
    items={[{ title: 'Reva', value: 1 }, { title: 'Sheva', value: 2 }, { title: 'Anzhela', value: 3 }]}
    onClick={onClickCallBack}

/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return (
        <Accordion
            items={[{ title: 'Reva', value: 1 }, { title: 'Sheva', value: 2 }, { title: 'Anzhela', value: 3 }]}
            titleValue="Users"
            collapsed={value}
            onChange={() => setValue(!value)}
            onClick={onClickCallBack}
        />
    )
}