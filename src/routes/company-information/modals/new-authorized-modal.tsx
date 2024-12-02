import {Heading} from 'react-aria-components';
import MyTextField from '../../../components/form/my-text-field.tsx';
import MyRequestForm from '../../../components/form/my-request-form.tsx';

function NewAuthorizedModal() {
    return (
        <MyRequestForm>
            <Heading slot="title" className="col-span-2 flex justify-left text-3xl py-8">New Authorized Pickup Person</Heading>
            <MyTextField className="col-span-2 text-sm" label="Name" />
            <div className="col-span-2 text-sm">The authorized pickup person will be submitted for verification. Once verified, you will be able to select the new pickup person on checkout. Please ensure the names on this list match government id. This is required when picking up orders from our stores.</div>
        </MyRequestForm>
    )
}

export default NewAuthorizedModal;