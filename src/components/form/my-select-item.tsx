import {ListBoxItem, ListBoxItemProps } from 'react-aria-components';
import './my-select-item.css';


export function MySelectItem({className, ...props} : ListBoxItemProps) {
    return (
        <ListBoxItem {...props} className={`${className} my-select-item-ListBoxItem`}>
        </ListBoxItem>
    );
}

export default MySelectItem
