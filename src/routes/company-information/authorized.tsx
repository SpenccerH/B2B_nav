import { Button, DialogTrigger } from 'react-aria-components';
import { Trash } from '@phosphor-icons/react';
import NewAuthorizedModal from './modals/new-authorized-modal.tsx';
import RemoveModal from './modals/remove-modal.tsx';

const people = [
    { name: "Zulfiqar Naushad" },
    { name: "Huda Hammoud" },
]

function Authorized() {
    return (
        <div className="pb-20">
            <div className="pb-6 flex flex-row justify-between items-center">
                <DialogTrigger>
                    <Button className="text-sm bg-blue-900 hover:bg-blue-950 text-center text-white font-medium rounded px-4 py-2.5 h-11">
                        Request New Authorized Pickup Person
                    </Button>
                    <NewAuthorizedModal />
                </DialogTrigger>
                <div className="text-sm">The names on this list are authorized to pick up orders or net terms in-store with ID verification</div>
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
                            <td className="py-4 flex justify-center">
                                <DialogTrigger>
                                    <Button className="flex items-center gap-2">
                                        <Trash size={20} />
                                    </Button>
                                    <RemoveModal text="Authorized Pickup Person" item={`${item.name}`} />
                                </DialogTrigger>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Authorized;