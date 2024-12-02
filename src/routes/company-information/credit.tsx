import { Button, DialogTrigger, ListBox, ListBoxItem } from 'react-aria-components';
import { Trash } from '@phosphor-icons/react';
import mastercard from "../../assets/mastercard.png";
import visa from "../../assets/visa.png";
import NewCreditCardModal from './modals/new-credit-card-modal';

function Credit({ items = [
    { id: 1, image: mastercard, number: '**** **** **** **** 4576', company: 'Mastercard', name: 'Bugs Bunny', expiry: '03/24', default: true },
    { id: 2, image: visa, number: '**** **** **** **** 9373', company: 'Visa', name: 'Bugs Bunny', expiry: '04/25' },
    { id: 3, image: mastercard, number: '**** **** **** **** 9374', company: 'Mastercard', name: 'Bugs Bunny', expiry: '05/26' },
    { id: 4, image: visa, number: '**** **** **** **** 9375', company: 'Visa', name: 'Bugs Bunny', expiry: '06/27' },
    { id: 5, image: mastercard, number: '**** **** **** **** 9376', company: 'Mastercard', name: 'Bugs Bunny', expiry: '07/28' },
] }) {
    return (
        <div className="pb-20">
            <div className="pb-12 flex flex-row justify-between items-center">
                <DialogTrigger>
                    <Button className="text-sm bg-oxford-blue text-center text-white font-medium rounded-sm px-4 py-3 hover:bg-stone-700">
                        Add New Credit Card
                    </Button>
                    <NewCreditCardModal />
                </DialogTrigger>
                <div>Only administrators and finance access users can add and manage credit cards</div>
            </div>
            <ListBox items={items} className="grid grid-cols-3 gap-4">
                {item => (
                    <ListBoxItem className="w-full pt-6 pb-4 pl-4 pr-4 bg-white rounded-sm flex border">
                        <div className="grow flex flex-col">
                            <div className="flex gap-4">
                                <img src={item.image} className="h-10 border"/>
                                <div>
                                    <div className="text-xs 2xl:text-sm">
                                        {item.number}
                                    </div>
                                    <div className="text-sm text-oxford-blue/75">
                                        {item.company}
                                    </div>
                                </div>
                            </div>
                            <div className="pt-4 pb-4 text-oxford-blue/75 flex flex-col gap-1 text-sm">
                                <div className="flex items-center gap-2">
                                    <div>Name:</div>
                                    {item.name}
                                </div>
                                <div className="flex items-center gap-2">
                                    <div>Expiry Date:</div>
                                    {item.expiry}
                                </div>
                            </div>
                            <div className="flex gap-4 text-sm">
                                {item.default ?
                                    (<span className="text-sm text-blue-600 flex items-center">
                                        <div className="h-1 w-1 rounded-full bg-blue-600 mr-1.5 ml-0.5"/>
                                        Default Card
                                    </span>)
                                    :
                                    (
                                        <Button className="flex pl-2 pr-2 pt-1 pb-1 bg-slate-100 hover:bg-slate-200 border border-slate-300 focus:outline-none text-oxford-blue rounded-sm">
                                            Set as Default Card
                                        </Button>
                                    )
                                }
                            </div>
                        </div>
                        <div className="flex flex-col items-end gap-4 text-oxford-blue/50">
                            <Button className="flex items-center gap-2">
                                <Trash size={20} />
                            </Button>
                        </div>
                    </ListBoxItem>
                )}
            </ListBox>
        </div>
    )
}

export default Credit;