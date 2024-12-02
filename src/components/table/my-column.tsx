import {Column, ColumnProps} from 'react-aria-components';
import './my-column.css';

function MyColumn({className, ...props} : ColumnProps) {
    return (
        <Column className={`${className} my-column-Column`} {...props}>
        </Column>
    );
}

export default MyColumn;