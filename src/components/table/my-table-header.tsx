import {Collection, TableHeader, TableHeaderProps} from 'react-aria-components';
import './my-table-header.css';


function MyTableHeader<T extends object>({ columns, children }: TableHeaderProps<T>) {


    return (
        <TableHeader className="my-table-header-TableHeader">
            <Collection items={columns}>
                {children}
            </Collection>
        </TableHeader>
    );
}

export default MyTableHeader;