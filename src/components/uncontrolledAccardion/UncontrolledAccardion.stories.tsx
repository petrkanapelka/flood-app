import type { Meta, StoryObj } from '@storybook/react';

import { UncontrolledAccardion } from './UncontrolledAccardion';
import { items } from '../../App';
import { useState } from 'react';
import {action} from '@storybook/addon-actions'

export default {
    component: UncontrolledAccardion,
};

//export default meta;

const setCollapsedHandler = action('isCollapsing')

export const CollapsedAccordion = () => {
    return <UncontrolledAccardion setCollapsed={setCollapsedHandler} collapsed={true} items={items} />
}

export const OpenedAccordion = () => {
    return <UncontrolledAccardion setCollapsed={setCollapsedHandler} collapsed={false} items={items} />
}

export const AccordionDemo = () => {
    let [collapsed, setCollapsed] = useState(false);
    return <UncontrolledAccardion setCollapsed={() => { setCollapsed(!collapsed) }} collapsed={collapsed} items={items} />
}

type Story = StoryObj<typeof UncontrolledAccardion>;

export const Primary: Story = {
    args: {
        collapsed: true,
        items,
        setCollapsed : (value: boolean) => {
            const collapsed = value

            setCollapsedHandler(collapsed)
        },
  },
};