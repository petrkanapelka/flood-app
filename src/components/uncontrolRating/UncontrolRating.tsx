import React from "react";

type UncontrolRatingProps = {
    ratingValue: number
    stars: Array<{ value: number }>
    setRatingValue: (value: number) => void
};


export const UncontrolRating: React.FC<UncontrolRatingProps> = (props: UncontrolRatingProps) => {

    const onClickHandler = (starValue: number) => {
        if (starValue === props.ratingValue) {
            props.setRatingValue(0);
        } else {
            props.setRatingValue(starValue);
        }
    };

    const StarsDivs = props.stars.map((star, indx) => {
        const isSelected = indx + 1 <= props.ratingValue;
        return (
            <StarMemo key={indx}
                className={`star ${isSelected ? 'star-selected' : ''}`}
                onClickHandler={() => onClickHandler(star.value)}
            />
        );
    });



    return <div style={{ display: 'flex', gap: '15px' }}>
        <h3>Controlled rating</h3>
        {StarsDivs}
    </div>;
};

type StarProps = {
    onClickHandler: () => void
    className: string
}

const Star = (props: StarProps) => {
    return (
        <div
            className={props.className}
            onClick={props.onClickHandler}
        ></div>
    )
}

const StarMemo = React.memo(Star)
