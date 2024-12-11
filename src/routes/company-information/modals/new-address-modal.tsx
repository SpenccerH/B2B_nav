import {Heading} from 'react-aria-components';
import MyTextField from '../../../components/form/my-text-field.tsx';
import MyRequestForm from '../../../components/form/my-request-form.tsx';

function NewAddressModal() {
    return (
        <MyRequestForm>
            <Heading slot="title" className="col-span-2 flex justify-left text-2xl pt-8 pb-4">New Shipping Address</Heading>
            <MyTextField className="col-span-2 text-sm" label="Address Name" />
            <MyTextField className="text-sm" label="Address Line 1" />
            <MyTextField className="text-sm" label="Address Line 2" />
            <MyTextField className="text-sm" label="Attention" />
            <MyTextField className="text-sm" label="City" />
            <MyTextField className="text-sm" label="Province" />
            <MyTextField className="text-sm" label="Postal Code" />
            <div className="col-span-2 text-sm">The shipping address will be submitted for verification. Once the shipping address is verified, you will be able to select the new address on checkout.</div>
        </MyRequestForm>
    )
}

export default NewAddressModal;