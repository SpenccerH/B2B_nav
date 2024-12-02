import { Button, DialogTrigger, ListBox, ListBoxItem } from 'react-aria-components';
import { Trash } from '@phosphor-icons/react';
import NewTicketModal from '../tickets/new-ticket-modal.tsx';
import NewAuthorizedModal from './modals/new-authorized-modal.tsx';

const people = [
    { name: "Zulfiqar Naushad" },
    { name: "Huda Hammoud" },
]

function Authorized() {
    return (
        <div className="pb-20">
            <div className="pb-12">
                <DialogTrigger>
                    <Button className="text-sm bg-oxford-blue text-center text-white font-medium rounded-sm px-4 py-3 hover:bg-stone-700">
                        Request New Authorized Pickup Person
                    </Button>
                    <NewAuthorizedModal />
                </DialogTrigger>
            </div>
            <table className="w-96 bg-transparent border">
                <thead>
                    <tr className="text-oxford-blue border border-slate-300 bg-tabs-gray text-sm">
                        <th className="px-1"></th>
                        <th className="text-left py-4">Name</th>
                        <th className="px-4"></th>
                    </tr>
                </thead>
                <tbody>
                    {people.map(item => (
                        <tr className="border-t border-slate-300 text-sm">
                            <td></td>
                            <td className="py-4">{item.name}</td>
                            <td className="py-4 flex justify-center"><Trash size={18} className="cursor-pointer" /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Authorized;