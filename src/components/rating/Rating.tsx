import React, { useState } from 'react';

const Stars = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
];

export const Rating = () => {
    const [ratingValue, setRatingValue] = useState(0);

    const handleClick = (starValue: number) => {
        if (starValue === ratingValue) {
            setRatingValue(0);
        } else {
            setRatingValue(starValue);
        }
    };

    const StarsDivs = Stars.map((star, indx) => {
        const isSelected = indx + 1 <= ratingValue;
        return (
            <div
                key={star.value}
                className={`star ${isSelected ? 'star-selected' : ''}`}
                onClick={() => handleClick(star.value)}
            ></div>
        );
    });

    return <>{StarsDivs}</>;
};
