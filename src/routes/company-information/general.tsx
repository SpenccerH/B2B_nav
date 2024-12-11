import { Button, DialogTrigger } from "react-aria-components";
import CreditModal from "./modals/credit-modal";

const info = [
    { title: "Company Name", body1: "Acme Corporation" },
    { title: "Phone Number", body1: "(647) 327-6457" },
    { title: "Business Address", body1: "75 West Wilmot Street", body2: "Richmond Hill ON, L4B 1K7" },
]

function General() {

    return (
        <div className="mb-20">
            <div className="flex flex-col gap-y-6">
                <div className="font-bold">Company Information</div>
                <div className="flex flex-col gap-y-4">
                    {info.map(item => (
                        <div className="flex flex-col gap-y-1 text-sm">
                            <div className="font-semibold">{item.title}</div>
                            <div>{item.body1}</div>
                            <div>{item.body2}</div>
                        </div>
                    ))}
                </div>
                
                <div className="flex flex-col gap-y-1 mt-5">
                    <div className="flex flex-row items-center gap-x-2.5">
                        <div className="font-bold">Net Terms</div>
                        <DialogTrigger>
                            <Button className="focus:outline-none hover:bg-tabs-gray px-1.5 py-0.5 border rounded-lg text-center">
                                <div className="text-sm text-secondary-color">Request Credit Adjustment</div>
                            </Button>
                            <CreditModal />
                        </DialogTrigger>
                    </div>
                    <div className="text-sm font-medium">Terms: NET30</div>
                    <div className="text-sm font-medium">Credit Limit: $6,000.00</div>
                    <div className="text-sm font-medium">Available Credit: $701.31</div>
                </div>          
            </div>
        </div>
    )
}

export default General;