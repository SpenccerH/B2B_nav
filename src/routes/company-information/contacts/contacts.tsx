import {
    Button,
    Dialog,
    DialogTrigger, Heading, Input, Label, Modal, ModalOverlay,
    SearchField,
    TextField, ToggleButton

} from 'react-aria-components';


import './contacts.css';

import { SquareSplitVertical, GridNine } from '@phosphor-icons/react';
import {useState} from 'react';
import MyTable from './my-table.tsx';
import MyGrid from './my-grid.tsx';
import NewUserModal from '../modals/new-user-modal.tsx';

const items = [
    { id: 1, first: 'Bugs', last: 'Bunny', role: 'President', phone: '(647) 327-6457', email: 'bugs.bunny@cc.ca', address: '75 West Wilmot Street', city: 'Toronto', province: 'ON', postal: 'L4B 1K7', primary: true, web: 'Administrator' },
    { id: 2, first: 'Daffy', last: 'Duck', role: 'Accounting Manager', phone: '(416) 674-9248', email: 'daffy.duck@cc.ca', address: '75 West Wilmot Street', city: 'Toronto', province: 'ON', postal: 'L4B 1K7', billing: true, web: 'Purchaser Access' },
    { id: 3, first: 'Porky', last: 'Pig', role: 'Communications Director', phone: '(437) 860-0731', email: 'porky.pig@cc.ca', address: '75 West Wilmot Street', city: 'Toronto', province: 'ON', postal: 'L4B 1K7', web: 'Purchaser Access' },
    { id: 4, first: 'Yosemite', last: 'Sam', role: 'Business Analyst', phone: '(416) 440-7536', address: '75 West Wilmot Street', city: 'Toronto', province: 'ON', postal: 'L4B 1K7', email: 'yosemite.sam@cc.ca', web: 'Purchaser Access' },
    { id: 5, first: 'Marvin', last: 'the Martian', role: 'Business Analyst', phone: '(416) 104-3642', address: '75 West Wilmot Street', city: 'Toronto', province: 'ON', postal: 'L4B 1K7', email: 'marvin.the.martian@cc.ca', web: 'Purchaser Access'},
    { id: 6, first: 'Wile E.', last: 'Coyote', role: 'Business Analyst', phone: '(647) 412-0786', address: '75 West Wilmot Street', city: 'Toronto', province: 'ON', postal: 'L4B 1K7', email: 'wile.e.coyote@cc.ca', web: 'Purchaser Access'},
    { id: 7, first: 'Elmer', last: 'Fudd', role: 'Business Analyst', phone: '(416) 488-7471', address: '75 West Wilmot Street', city: 'Toronto', province: 'ON', postal: 'L4B 1K7', email: 'elmer.fudd@cc.ca', web: 'Accounting Access'},
    { id: 8, first: 'Tom', last: '', role: 'Business Analyst', phone: '(437) 324-3485', address: '75 West Wilmot Street', city: 'Toronto', province: 'ON', postal: 'L4B 1K7', email: 'tom@cc.ca', web: 'Accounting Access' },
    { id: 9, first: 'Jerry', last: '', role: 'Business Analyst', phone: '(416) 992-7455', email: 'jerry@cc.ca', address: '75 West Wilmot Street', city: 'Toronto', province: 'ON', postal: 'L4B 1K7', web: 'Accounting Access'},

]

function Contacts() {

    const [ showGrid, setShowGrid ] = useState(false);

    return (
        <div className="pb-20">
            <div className="pb-12 flex justify-between">
                <DialogTrigger>
                    <Button className="text-sm bg-oxford-blue text-center text-white font-medium rounded-sm px-4 py-2.5 hover:bg-stone-700">
                        Add New User
                    </Button>
                    <NewUserModal />
                </DialogTrigger>
                <span className="flex gap-16">
                    <SearchField>
                        <Input className="pl-3 pr-3 pt-2 pb-2 bg-white text-oxford-blue border border-1 border-oxford-blue rounded-sm" placeholder="Search Users" />
                    </SearchField>
                    <ToggleButton className="contacts-Button" onChange={(isSelected) => {setShowGrid(isSelected)}}>
                        {showGrid ? (
                            <span className="flex items-center gap-2 text-sm">
                                <SquareSplitVertical size={24} /> List
                            </span>
                        ) : (
                            <span className="flex items-center gap-2 text-sm">
                                <GridNine size={24} /> Grid
                            </span>
                        )}
                    </ToggleButton>
                </span>
            </div>
            {showGrid ? <MyGrid items={items} /> : <MyTable items={items} />}
        </div>
    )
}

export default Contacts;