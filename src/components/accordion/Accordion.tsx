import * as React from 'react';


type ItemType = {
    title: string
    value: any
}
type AccordionProps = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value:any)=>void

};
export const Accordion = (props: AccordionProps) => {
    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                onChange={props.onChange}
            />
            {!props.collapsed && <AccordionBody onClick={props.onClick} items={props.items}></AccordionBody>}
        </div>
    );
};

type AccordionTitleProps = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitleProps) {
    return (
        <h3 onClick={(e) => props.onChange()}>--{props.title}</h3>
    )
}

type AccordionBodyProps = {
    items: ItemType[]
    onClick: (value:any)=>void
}


function AccordionBody(props: AccordionBodyProps) {
    return (
        <ul>
            {props.items.map((el, i)=><li onClick={()=>props.onClick(el.value)} key={i}>{el.title}</li>)}
        </ul>
    )
}