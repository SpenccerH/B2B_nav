import { Circle, RadioButton } from "@phosphor-icons/react";
import { useState } from "react";
import { Button, DialogTrigger } from "react-aria-components";
import CreditModal from "./modals/credit-modal";

const fields = [
    { field: "Trade Company Name", placeholder: "Acme Corporation" },
    { field: "Legal Company Name", placeholder: "Acme Corporation" },
    { field: "Business Address 2 (Optional)", placeholder: "1999-01-01" },
    { field: "Business Address 1", placeholder: "75 West Wilmot Street" },
    { field: "City", placeholder: "Richmond Hill" },
    { field: "Province", placeholder: "Ontario" },
    { field: "Postal Code", placeholder: "L4B 1K7" },
    { field: "Phone Number", placeholder: "(647) 799-2019" },
    { field: "Date of Application", placeholder: "2024-05-05" },
]

const info = [
    { title: "Company Name", body1: "Acme Corporation" },
    { title: "Phone Number", body1: "(647) 327-6457" },
    { title: "Business Address", body1: "75 West Wilmot Street", body2: "Richmond Hill ON, L4B 1K7" },
]

function General() {

    return (
        <div className="mb-20">
            <div className="flex flex-col gap-y-5">
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
                
                {/* <div className="flex flex-col gap-y-4">
                    {cards.map(item => (
                        <div>
                            { all &&
                                <div className="flex flex-col gap-y-2.5">
                                    <div className="flex flex-row items-center gap-x-1.5 text-sm cursor-pointer" onClick={() => setAll(false)}>
                                        <Circle size={20} />
                                        {item.title1}
                                    </div>
                                    <div className="flex flex-row items-center gap-x-1.5 text-sm cursor-pointer">
                                        <RadioButton size={20} weight="fill" />
                                        {item.title2}
                                    </div>
                                </div>
                            }
                            { !all &&
                                <div className="flex flex-col gap-y-2.5">
                                    <div className="flex flex-row items-center gap-x-1.5 text-sm cursor-pointer">
                                        <RadioButton size={20} weight="fill" />
                                        {item.title1}
                                    </div>
                                    <div className="flex flex-row items-center gap-x-1.5 text-sm cursor-pointer" onClick={() => setAll(true)}>
                                        <Circle size={20} />
                                        {item.title2}
                                    </div>
                                </div>
                            }
                        </div>
                    ))}
                </div> */}            
            </div>

            {/* <div className="border rounded-sm p-6">
                <div className="columns-3 gap-8">
                    {fields.map(item => (
                        <div className="mb-5">
                            <label className="text-left text-black mb-1 text-sm">{item.field}</label>
                            {item.field === "Date of Application" &&
                                <input className="text-sm w-full bg-slate-100 text-black border border-slate-400 rounded py-2.5 px-3 mt-1.5 focus:outline-none cursor-default"
                                placeholder={item.placeholder} />
                            }
                            {item.field !== "Date of Application" &&
                                <input className="text-sm w-full bg-slate-white text-black border border-slate-400 rounded py-2.5 px-3 mt-1.5 focus:outline-none"
                                placeholder={item.placeholder} />
                            }
                        </div>
                    ))}
                </div>
                <div className="flex justify-center">
                    <button className="bg-slate-100 hover:bg-slate-200 border border-slate-400 rounded-md text-center text-sm font-semibold py-2.5 px-4 mt-2.5">
                        Save Changes
                    </button>
                </div>
            </div> */}
        </div>
    )
}

export default General;