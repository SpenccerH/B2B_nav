import { Users } from "@phosphor-icons/react";
import { Button, DialogTrigger } from "react-aria-components";
import ListModal from "./modals/list-modal";

const sets = [
    { title: "Sets", body1: "New Hire Set", body2: "Office Set" },
    { title: "Personal", body1: "Wile's List 1", body2: "Wile's List 2" },
    { title: "Collaborative", body1: "Company List" },
]

function ListsOverview () {
    return (
        <div className="w-64 text-sm">
            <div className="flex flex-col gap-y-5 border rounded-lg p-4">
                {sets.map(item => (
                    <div className="flex flex-col">
                        {item.title !== "Collaborative" &&
                            <div className="font-semibold pb-2">{item.title}</div>
                        }
                        {item.title === "Collaborative" &&
                            <div className="flex flex-row items-center gap-x-2.5 font-semibold pb-2">
                                <div>{item.title}</div>
                                <Users size={20} />
                            </div>
                        }
                        <div className="text-xs text-indigo-700 flex flex-col gap-y-1">
                            <div className="hover:underline cursor-pointer">{item.body1}</div>
                            <div className="hover:underline cursor-pointer">{item.body2}</div>
                        </div>
                    </div>
                ))}
                <DialogTrigger>
                    <Button className="text-xs font-medium text-center bg-black hover:bg-stone-700 text-white py-1.5 rounded">
                        Create New List
                    </Button>
                    <ListModal />
                </DialogTrigger>
            </div>
        </div>
    )
}

export default ListsOverview;