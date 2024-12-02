import { Heading } from 'react-aria-components';
import MyTextField from '../../../components/form/my-text-field.tsx';
import MyRequestForm from '../../../components/form/my-request-form.tsx';

function CreditModal() {
    return (
        <MyRequestForm>
            <Heading slot="title" className="col-span-2 justify-left text-2xl py-8">Credit Adjustment</Heading>
            <MyTextField className="col-span-2 text-sm" label="Reason for Adjustment" />
            <MyTextField className="col-span-2 text-sm" label="Specify Desired Credit" />
            <div className="col-span-2 mt-2.5 text-sm">Your request will be submitted for review upon confirmation.</div>
            <div className="col-span-2 text-sm">You may be contacted for further information.</div>
        </MyRequestForm>
    )
}

export default CreditModal;