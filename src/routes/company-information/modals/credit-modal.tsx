import { Heading } from 'react-aria-components';
import MyTextField from '../../../components/form/my-text-field.tsx';
import MyRequestForm from '../../../components/form/my-request-form.tsx';

function CreditModal() {
    return (
        <MyRequestForm>
            <Heading slot="title" className="col-span-2 justify-left text-2xl pt-8 pb-4">Credit Adjustment</Heading>
            <MyTextField className="col-span-2 text-sm" label="Reason for Adjustment" />
            <MyTextField className="col-span-2 text-sm" label="Specify Desired Credit" />
            <div className="col-span-2 flex flex-col mt-2.5 gap-y-1.5">
                <div className="text-sm">Your request will be submitted for review upon confirmation.</div>
                <div className="text-sm">You may be contacted for further information.</div>
            </div>
        </MyRequestForm>
    )
}

export default CreditModal;