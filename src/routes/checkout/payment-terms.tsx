import { CaretDown } from "@phosphor-icons/react";
import visa from "../../assets/visa.png"
import mastercard from "../../assets/mastercard.png"
import { Button, DialogTrigger } from "react-aria-components";

const cards1 = [
    { id: 1,  image: visa, num: "**** **** **** 9373", expiry: "10/2023", default: "Default" },
    { id: 2,  image: mastercard, num: "**** **** **** 9374", expiry: "10/2024" },
    { id: 3,  image: mastercard, num: "**** **** **** 9375", expiry: "10/2025" },
]

function PaymentTerms() {
    return (
        <div className="flex flex-col gap-y-4">
            <div className="flex flex-row gap-x-5">
                <div className="w-1/2 mt-5">
                    <div className="font-medium mb-2">Net Terms</div>
                    <div className="block appearance-none w-full bg-slate-100 border border-slate-300 text-oxford-blue py-2 px-3 rounded-sm">NET30</div>
                </div>
                <div className="w-1/2 mt-5">
                    <div className="font-medium mb-2">Issue Date</div>
                    <div className="block appearance-none w-full bg-slate-100 border border-slate-300 text-oxford-blue py-2 px-3 rounded-sm">2024-04-26</div>
                </div>
            </div>
            <div className="font-medium text-sm">Payment due on May 26, 2024 (NET30).
                <span className="font-normal">You will receive an invoice from the Order Management page.</span>
            </div>
            <DialogTrigger>
                <Button className="bg-slate-100 hover:bg-slate-200 font-semibold p-2.5 border border-slate-400 rounded-md text-center flex flex-row items-center mt-2">
                    <div className="text-sm rounded-md">Confirm Payment</div>
                </Button>
            </DialogTrigger>
        </div>
    );
}

export default PaymentTerms;