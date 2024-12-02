import {Button, DialogTrigger, Input, SearchField, ToggleButton} from 'react-aria-components';
import NewAddressModal from './new-address-modal.tsx';
import {GridNine, SquareSplitVertical} from '@phosphor-icons/react';
import {useState} from 'react';
import MyTable from './my-table.tsx';
import MyGrid from './my-grid.tsx';

const items = [
    { id: 1, location: 'Head Office', first: "Bugs", last: "Bunny", address1: '75 West Wilmot Street', address2: '', city: 'Richmond Hill', province: 'ON', postal: 'L4B 1K7', billing: true, shipping: true },
    { id: 2, location: 'Aquarium', first: 'Robert', last: 'Ripley', address1: '288 Bremner Boulevard', address2: '', city: 'Toronto', province: 'ON', postal: 'M5V 3L9' },
    { id: 3, location: 'Vaughan Office', first: 'Barry', last: 'Bonds', address1: '270 West Beaver Creek Road', address2: '', city: 'Richmond Hill', province: 'ON', postal: 'L4B 3Z1' },
]

function Addresses() {
    const [ showGrid, setShowGrid ] = useState(false);
    return (
        <div className="pb-20">
            <div className="pb-12 flex justify-between">
                <DialogTrigger>
                    <Button className="text-sm bg-oxford-blue text-center text-white font-medium rounded-sm px-4 py-2.5 hover:bg-stone-700">
                        Request New Shipping Address
                    </Button>
                    <NewAddressModal />
                </DialogTrigger>
                <span className="flex gap-16">
                    <SearchField>
                        <Input className="px-3 py-2.5 bg-white text-oxford-blue border border-1 border-oxford-blue rounded-sm" placeholder="Search Addresses" />
                    </SearchField>
                    <ToggleButton className="text-sm bg-oxford-blue text-center text-white font-medium rounded-sm px-4 py-2.5 hover:bg-stone-700" onChange={(isSelected) => {setShowGrid(isSelected)}}>
                        {showGrid ? (
                            <span className="flex items-center gap-2">
                                <SquareSplitVertical size={24} /> List
                            </span>
                        ) : (
                            <span className="flex items-center gap-2">
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

export default Addresses;