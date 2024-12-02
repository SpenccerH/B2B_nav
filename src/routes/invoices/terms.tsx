import { Button, DialogTrigger } from "react-aria-components";
import CreditModal from "./terms/credit-modal";

const info = [
    { title: "Net Terms", body: "NET30" },
    { title: "Overdue Balance", body: "$116.82" },
    { title: "Outstanding Balance", body: "$5,298.69" },
    { title: "Available Credit", body: "$701.31" },
]

function Cards() {
    return (
        <div className="border rounded-lg p-5">
            <div className="flex flex-row items-center justify-between">
                {info.map(item => (
                    <div className="flex flex-col gap-y-1">
                        {/* {item.title !== "Available Credit" &&
                            <div className="text-sm text-secondary-color">{item.title}</div>
                        }
                        {item.title === "Available Credit" &&
                            <div className="flex flex-row items-center gap-x-1.5">
                                <div className="text-sm text-secondary-color">{item.title}</div>
                                <DialogTrigger>
                                    <Button className="focus:outline-none hover:bg-tabs-gray px-1.5 py-0.5 border rounded-lg text-center">
                                        <div className="text-xs text-secondary-color">Adjust</div>
                                    </Button>
                                    <CreditModal />
                                </DialogTrigger>
                            </div>
                        } */}
                        <div className="text-sm text-secondary-color">{item.title}</div>
                        <div className="text-2xl font-light">{item.body}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cards;
