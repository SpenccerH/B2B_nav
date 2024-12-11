import { Heading } from 'react-aria-components';
import MyTextField from '../../../components/form/my-text-field.tsx';
import MyDialogForm from '../../../components/form/my-dialog-form.tsx';

function ListModal() {
    return (
        <MyDialogForm>
            <Heading slot="title" className="col-span-2 justify-left text-2xl pt-8 pb-4">New List</Heading>
            <MyTextField className="col-span-2 text-sm" label="List Name" />
        </MyDialogForm>
    )
}

export default ListModal;