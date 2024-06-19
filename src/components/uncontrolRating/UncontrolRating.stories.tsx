import type { Meta, StoryObj } from '@storybook/react';

import { Stars, items } from '../../App';
import { useState } from 'react';
import { action } from '@storybook/addon-actions'
import { UncontrolRating } from './UncontrolRating';

export default {
    component: UncontrolRating,
};

//export default meta;

const ratingHandler = action('rating')

export const RatingZero = () => {
    return <UncontrolRating ratingValue={0} stars={Stars} setRatingValue={ratingHandler} />
}

export const RatingFive = () => {
    return <UncontrolRating ratingValue={5} stars={Stars} setRatingValue={ratingHandler} />
}


export const RatingDemo = () => {
    const [ratingValue, setRatingValue] = useState(0);
    return <UncontrolRating setRatingValue={setRatingValue} ratingValue={ratingValue} stars={Stars} />
}

type Story = StoryObj<typeof UncontrolRating>;


export const Primary: Story = {
    args: {
        ratingValue: 0,
        stars: Stars,
        setRatingValue: ratingHandler
    },
};