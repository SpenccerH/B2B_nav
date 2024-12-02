import {Button, ListBox, ListBoxItem} from 'react-aria-components';
import {Envelope, MapPin, PencilSimple, Phone, Trash, UserCircle} from '@phosphor-icons/react';
import AnonymousProfile from '../../../assets/anonymous-profile.jpg';

function MyGrid({ items }) {
    return (
        <ListBox items={items} className="grid grid-cols-3 gap-4">
            {item => (
                <ListBoxItem className="w-full pt-6 pb-4 pl-4 pr-4 bg-white rounded-sm flex border">
                    <div className="grow flex flex-col">
                        <div className="flex ">
                            <div className="text-lg">
                                {item.location}
                            </div>
                        </div>
                        <div className="pt-2 pb-6 text-oxford-blue/75 flex flex-col gap-1 text-sm">
                            <div>
                                {item.first} {item.last}
                            </div>
                            <div>
                                {item.address1} {item.address2}
                            </div>
                            <div>
                                {item.city} {item.province}
                            </div>
                            <div>
                                {item.postal}
                            </div>

                        </div>
                        <div className="flex gap-4 text-sm">
                            {item.shipping ?
                                (<span className="text-sm text-amber-600 flex items-center">
                                    <div className="h-1 w-1 rounded-full bg-amber-600 mr-1.5 ml-0.5"/>
                                    Default Shipping Address
                                </span>)
                                :
                                (
                                    <Button className="flex pl-2 pr-2 pt-1 pb-1 bg-slate-100 hover:bg-slate-200 border border-slate-300 focus:outline-none text-oxford-blue rounded-sm">
                                        Set as Default Shipping Address
                                    </Button>
                                )
                            }
                            {item.billing ?
                                (<span className="text-sm text-blue-600 flex items-center">
                                    <div className="h-1 w-1 rounded-full bg-blue-600 mr-1.5 ml-0.5"/>
                                    Default Billing Address
                                </span>)
                                :
                                (
                                    // <Button className="flex pl-2 pr-2 pt-1 pb-1 bg-slate-100 hover:bg-slate-200 border border-slate-300 focus:outline-none text-oxford-blue rounded-sm">
                                    //     Set as Billing Address
                                    // </Button>
                                    <div />
                                )
                            }
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-4 text-oxford-blue/50">
                        <Button className="flex items-center gap-2">
                            <PencilSimple size={20} />
                        </Button>
                        <Button className="flex items-center gap-2">
                            <Trash size={20} />
                        </Button>
                    </div>
                </ListBoxItem>
            )}
        </ListBox>
    )
}

export default MyGrid;