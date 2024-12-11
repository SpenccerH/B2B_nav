import {Heading, Text, Key} from 'react-aria-components';
import MyTextField from '../../../components/form/my-text-field.tsx';
import MyDialogForm from '../../../components/form/my-dialog-form.tsx';
import MySelectItem from '../../../components/form/my-select-item.tsx';
import MySelect from '../../../components/form/my-select.tsx';
import {useState} from 'react';
import { CheckSquare, Question, Square } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

const items = [
    { id: 1, location: 'Head Office', first: "Bugs", last: "Bunny", address1: '75 West Wilmot Street', address2: '', city: 'Richmond Hill', province: 'ON', postal: 'L4B 1K7', billing: true, shipping: true, permission: "Administrator" },
    { id: 2, location: 'Aquarium', first: 'Robert', last: 'Ripley', address1: '288 Bremner Boulevard', address2: '', city: 'Toronto', province: 'ON', postal: 'M5V 3L9', permission: "Purchaser Access" },
    { id: 3, location: 'Vaughan Office', first: 'Barry', last: 'Bonds', address1: '270 West Beaver Creek Road', address2: '', city: 'Richmond Hill', province: 'ON', postal: 'L4B 3Z1', permission: "Finance Access" },
]

function EditUserModal({name}:{name:String}) {
    const [billing, setBilling] = useState(false);
    const [selectedKey, setSelectedKey] = useState<Key | null>();
    return (
        <MyDialogForm>
            <Heading slot="title" className="col-span-2 flex justify-left text-2xl pt-8 pb-4">Edit User {name}</Heading>
            <MyTextField className="text-sm" label="Name" />
            <MyTextField className="text-sm" label="Position" />
            <MyTextField className="text-sm" label="Phone" />
            <MyTextField className="text-sm" label="Email" />
            <MySelect onSelectionChange={(key) => {setSelectedKey(key)}} items={items} label={
                <span>
                    <Link to="/permissions" target="_blank" className="flex flex-row pb-1">
                        <div className="text-sm">Permissions</div>
                        <Question size={18} className="ml-1.5 cursor-pointer" />
                    </Link>
                </span>
            } className="col-span-2">
                {item => (
                    (<MySelectItem>
                        <Text slot="label" className="flex">{item.permission}</Text>
                    </MySelectItem>)
            )}
            </MySelect>
            {!billing &&
                <div className="flex flex-row items-center gap-x-2.5 cursor-pointer" onClick={() => setBilling(true)}>
                    <Square size={20} color='#4b4b4b' />
                    <div className="text-sm">Billing Contact (receives invoices)</div>
                </div>
            }
            {billing &&
                <div className="flex flex-row items-center gap-x-2.5 cursor-pointer" onClick={() => setBilling(false)}>
                    <CheckSquare size={20} color='#4b4b4b' />
                    <div className="text-sm">Billing Contact (receives invoices)</div>
                </div>
            }
        </MyDialogForm>
    )
}

export default EditUserModal;