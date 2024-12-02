import {Collection, Row, RowProps} from 'react-aria-components';
import './my-row.css';

function MyRow<T extends object>({ id, columns, children, ...otherProps }: RowProps<T>) {

    return (
        <Row className="my-row-Row" id={id} {...otherProps}>
            <Collection items={columns}>
                {children}
            </Collection>
        </Row>
    );
}

export default MyRow