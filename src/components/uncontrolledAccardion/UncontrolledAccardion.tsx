import { itemType } from "../../App";



type UncontrolledProps = {
    setCollapsed: (value: boolean) => void
    collapsed: boolean
    items: Array<itemType>
}

export const UncontrolledAccardion = (props: UncontrolledProps) => {

    const listItems = props.items.map(item => <li key={item.id}>{item.name}</li>)

    return (
        <div>
            <h1
                onClick={() => { props.setCollapsed(!props.collapsed) }}
                style={{ cursor: 'pointer' }}
            >Uncontrolled Menu items</h1>
            {!props.collapsed && <ul >{listItems}</ul>}
        </div>
    );
};
