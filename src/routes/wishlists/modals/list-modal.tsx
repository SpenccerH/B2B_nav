import { Heading } from 'react-aria-components';
import MyTextField from '../../../components/form/my-text-field.tsx';
import MyCreditForm from '../../../components/form/my-credit-form.tsx';

function ListModal() {
    return (
        <MyCreditForm>
            <Heading slot="title" className="col-span-2 justify-left text-3xl pt-8 pb-4">New List</Heading>
            <div className="flex flex-col gap-y-2.5">
                <MyTextField className="text-sm" label="List Name" />
            </div>
        </MyCreditForm>
    )
}

export default ListModal;