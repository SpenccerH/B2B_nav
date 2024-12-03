import { CaretRight, Check, CheckSquare, Circle, RadioButton, Square } from "@phosphor-icons/react";
import { useState } from "react";
import { Link } from "react-router-dom";

function CheckoutItems() {

    const [section, setSection] = useState('address');
    const [delivery, setDelivery] = useState('deliver-yes');
    const [address, setAddress] = useState('bugs');
    const [credit, setCredit] = useState('credit-yes');
    const [terms, setTerms] = useState('30'); // Terms are decided at application so they dont get to choose between 30, 45, 60
    const [po, setPo] = useState('po-yes');

    return (
        <div className="border text-black">
            <div className="flex flex-col">
                {section === 'contact' &&
                    <div className="flex flex-col">
                        <div className="flex flex-row gap-x-2.5 border-b px-5 py-2.5 bg-blue-700 text-white w-full">
                            <div>1.</div>
                            <div>Contact Information</div>
                        </div>
                        <div className="flex flex-col gap-y-5">
                            <div className="text-sm px-5 pt-5">Connected as Wile E. Coyote</div>
                            <div className="px-5 pb-5">
                                <div className="text-sm text-white rounded-sm bg-blue-900 hover:bg-blue-800 px-4 py-1.5 inline-block w-auto cursor-pointer" onClick={() => setSection('address')}>
                                    Continue
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {section !== 'contact' &&
                    <div className="bg-tabs-gray flex flex-col border-b">
                        <div className="flex flex-row px-5 py-2.5 justify-between items-center">
                            <div className="flex flex-row gap-x-2.5 items-center">
                                <div>1.</div>
                                <div>Contact Information</div>
                                <Check size={20} />
                            </div>
                            <div className="text-white text-sm rounded-sm bg-blue-900 hover:bg-blue-800 px-4 py-1 inline-block w-auto cursor-pointer" onClick={() => setSection('contact')}>
                                Edit
                            </div>
                        </div>
                        <div className="text-sm px-5 pt-1.5 pb-4">Wile E. Coyote, Email: wile.e.coyote@cc.ca, Phone: (647) 412-0786</div>
                    </div>
                }
                {section === 'address' && delivery === 'deliver-yes' &&
                    <div className="flex flex-col">
                        <div className="flex flex-row gap-x-2.5 border-b px-5 py-2.5 bg-blue-700 text-white w-full">
                            <div>2.</div>
                            <div>Address</div>
                        </div>
                        <div className="flex flex-col px-5 py-5 gap-y-5">
                            <div className="flex flex-row justify-between text-sm">
                                <div className="font-medium">Shipping Address</div>
                                <div className="text-blue-700 hover:underline cursor-pointer" onClick={() => setDelivery('deliver-no')}>Switch to Pickup</div>
                            </div>
                            {address === "bugs" &&
                                <div className="flex flex-col gap-y-2.5">
                                    <div className="flex flex-row items-center gap-x-1.5 cursor-pointer">
                                        <RadioButton size={20} weight="fill" />
                                        <div className="text-sm font-medium">Bugs Bunny, <span className="font-normal">75 West Wilmot Street, Richmond Hill ON, L4B 1K7</span></div>
                                    </div>
                                    <div className="flex flex-row items-center gap-x-1.5 cursor-pointer" onClick={() => setAddress('robert')}>
                                        <Circle size={20} />
                                        <div className="text-sm font-medium">Robert Ripley, <span className="font-normal">288 Bremner Boulevard, Toronto ON, M5V 3L9</span></div>
                                    </div>
                                    <div className="flex flex-row items-center gap-x-1.5 cursor-pointer" onClick={() => setAddress('barry')}>
                                        <Circle size={20} />
                                        <div className="text-sm font-medium">Barry Bonds, <span className="font-normal">270 West Beaver Creek Road, Richmond Hill ON, L4B 3Z1</span></div>
                                    </div>
                                </div>
                            }
                            {address === "robert" &&
                                <div className="flex flex-col gap-y-2.5">
                                    <div className="flex flex-row items-center gap-x-1.5 cursor-pointer" onClick={() => setAddress('bugs')}>
                                        <Circle size={20} />
                                        <div className="text-sm font-medium">Bugs Bunny, <span className="font-normal">75 West Wilmot Street, Richmond Hill ON, L4B 1K7</span></div>
                                    </div>
                                    <div className="flex flex-row items-center gap-x-1.5 cursor-pointer">
                                        <RadioButton size={20} weight="fill" />
                                        <div className="text-sm font-medium">Robert Ripley, <span className="font-normal">288 Bremner Boulevard, Toronto ON, M5V 3L9</span></div>
                                    </div>
                                    <div className="flex flex-row items-center gap-x-1.5 cursor-pointer" onClick={() => setAddress('barry')}>
                                        <Circle size={20} />
                                        <div className="text-sm font-medium">Barry Bonds, <span className="font-normal">270 West Beaver Creek Road, Richmond Hill ON, L4B 3Z1</span></div>
                                    </div>
                                </div>
                            }
                            {address === "barry" &&
                                <div className="flex flex-col gap-y-2.5">
                                    <div className="flex flex-row items-center gap-x-1.5 cursor-pointer" onClick={() => setAddress('bugs')}>
                                        <Circle size={20} />
                                        <div className="text-sm font-medium">Bugs Bunny, <span className="font-normal">75 West Wilmot Street, Richmond Hill ON, L4B 1K7</span></div>
                                    </div>
                                    <div className="flex flex-row items-center gap-x-1.5 cursor-pointer" onClick={() => setAddress('robert')}>
                                        <Circle size={20} />
                                        <div className="text-sm font-medium">Robert Ripley, <span className="font-normal">288 Bremner Boulevard, Toronto ON, M5V 3L9</span></div>
                                    </div>
                                    <div className="flex flex-row items-center gap-x-1.5 cursor-pointer">
                                        <RadioButton size={20} weight="fill" />
                                        <div className="text-sm font-medium">Barry Bonds, <span className="font-normal">270 West Beaver Creek Road, Richmond Hill ON, L4B 3Z1</span></div>
                                    </div>
                                </div>
                            }
                            <div className="flex flex-col gap-y-2.5">
                                <div className="text-sm font-medium flex flex-row gap-x-5 justify-between items-center">
                                    <div className="w-60">Shipment Attention To:</div>
                                    <input type="text" placeholder="" className="border text-sm text-black border-slate-400 focus:outline-none px-3 py-1.5 grow" />
                                </div>
                                {po === "po-yes" &&
                                    <div className="text-sm font-medium flex flex-row gap-x-5 justify-between items-center">
                                        <div className="w-60">Purchase Order (PO) Number:</div>
                                        <div className="flex flex-row items-center gap-x-10 grow">
                                            <input type="text" placeholder="" className="border text-sm text-black border-slate-400 focus:outline-none px-3 py-1.5 grow" />
                                            <div className="flex flex-row gap-x-2 items-center cursor-pointer" onClick={() => {setPo('po-no')}}>
                                                <Square size={20} weight="light" />
                                                <div className="text-sm font-normal">Not Available</div>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {po === "po-no" &&
                                    <div className="text-sm font-medium flex flex-row gap-x-5 justify-between items-center">
                                        <div className="w-60">Purchase Order (PO) Number:</div>
                                        <div className="flex flex-row items-center gap-x-10 grow">
                                            <input type="text" placeholder="" className="bg-slate-100 cursor-default border text-sm text-black border-slate-400 focus:outline-none px-3 py-1.5 grow" />
                                            <div className="flex flex-row gap-x-2 items-center cursor-pointer" onClick={() => {setPo('po-yes')}}>
                                                <CheckSquare size={20} weight="light" />
                                                <div className="text-sm font-normal">Not Available</div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                            <div>
                                <div className="text-sm text-white rounded-sm bg-blue-900 hover:bg-blue-800 px-4 py-1.5 inline-block w-auto cursor-pointer" onClick={() => setSection('payment')}>
                                    Continue
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {section === 'contact' &&
                    <div className="flex flex-row gap-x-2.5 px-5 py-2.5 border-b bg-blue-700 text-white">
                        <div>2.</div>
                        <div>Addresses</div>
                    </div>
                }
                {section === 'address' && delivery === 'deliver-no' &&
                    <div className="flex flex-col">
                        <div className="flex flex-row gap-x-2.5 border-b px-5 py-2.5 bg-blue-700 text-white w-full">
                            <div>2.</div>
                            <div>Pickup In-Store</div>
                        </div>
                        <div className="flex flex-col px-5 py-5 gap-y-5">
                            <div className="flex flex-row justify-between text-sm">
                                <div className="font-medium">Pickup In-Store</div>
                                <div className="text-blue-700 hover:underline cursor-pointer" onClick={() => setDelivery('deliver-yes')}>Switch to Delivery</div>
                            </div>
                            <div className="flex flex-col gap-y-1.5 text-sm">
                                <div className="font-medium">Richmond Hill</div>
                                <div>1070 Major Mackenzie Drive East, Unit C1, Richmond Hill ON, L4S 1P3</div>
                                <div>(905) 883-0817</div>
                            </div>
                            <div className="flex flex-row items-center gap-x-1.5">
                                <div className="text-sm text-blue-700 font-medium cursor-pointer">Change Pickup Location</div>
                                <CaretRight size={14} color="#444AA2" weight="bold" className="cursor-pointer" />
                            </div>
                            <div className="flex flex-col gap-y-2.5">
                                <div className="text-sm font-medium flex flex-row gap-x-5 justify-between items-center">
                                    <div className="w-60">Authorized Pickup Person(s):</div>
                                    <input type="text" placeholder="" className="border text-sm text-black border-slate-400 focus:outline-none px-3 py-1.5 grow" />
                                </div>
                                {po === "po-yes" &&
                                    <div className="text-sm font-medium flex flex-row gap-x-5 justify-between items-center">
                                        <div className="w-60">Purchase Order (PO) Number:</div>
                                        <div className="flex flex-row items-center gap-x-10 grow">
                                            <input type="text" placeholder="" className="border text-sm text-black border-slate-400 focus:outline-none px-3 py-1.5 grow" />
                                            <div className="flex flex-row gap-x-2 items-center cursor-pointer" onClick={() => {setPo('po-no')}}>
                                                <Square size={20} weight="light" />
                                                <div className="text-sm font-normal">Not Available</div>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {po === "po-no" &&
                                    <div className="text-sm font-medium flex flex-row gap-x-5 justify-between items-center">
                                        <div className="w-60">Purchase Order (PO) Number:</div>
                                        <div className="flex flex-row items-center gap-x-10 grow">
                                            <input type="text" placeholder="" className="bg-slate-100 cursor-default border text-sm text-black border-slate-400 focus:outline-none px-3 py-1.5 grow" />
                                            <div className="flex flex-row gap-x-2 items-center cursor-pointer" onClick={() => {setPo('po-yes')}}>
                                                <CheckSquare size={20} weight="light" />
                                                <div className="text-sm font-normal">Not Available</div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                            <div>
                                <div className="text-sm text-white rounded-sm bg-blue-900 hover:bg-blue-800 px-4 py-1.5 inline-block w-auto cursor-pointer" onClick={() => setSection('payment')}>
                                    Continue
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {section === 'payment' && delivery === 'deliver-yes' &&
                    <div className="bg-tabs-gray flex flex-col border-b">
                        <div className="flex flex-row px-5 py-2.5 justify-between items-center">
                            <div className="flex flex-row gap-x-2.5 items-center">
                                <div>2.</div>
                                <div>Address</div>
                                <Check size={20} />
                            </div>
                            <div className="text-white text-sm rounded-sm bg-blue-900 hover:bg-blue-800 px-4 py-1 inline-block w-auto cursor-pointer" onClick={() => setSection('address')}>
                                Edit
                            </div>
                        </div>
                        {address === "bugs" &&
                            <div className="text-sm px-5 pt-1.5 pb-4">Bugs Bunny, 75 West Wilmot Street, Richmond Hill ON, L4B 1K7</div>
                        }
                        {address === "robert" &&
                            <div className="text-sm px-5 pt-1.5 pb-4">Robert Ripley, 288 Bremner Boulevard, Toronto ON, M5V 3L9</div>
                        }
                        {address === "barry" &&
                            <div className="text-sm px-5 pt-1.5 pb-4">Barry Bonds, 270 West Beaver Creek Road, Richmond Hill ON, L4B 3Z1</div>
                        }
                    </div>
                }
                {section === 'payment' && delivery === 'deliver-no' &&
                    <div className="bg-tabs-gray flex flex-col border-b">
                        <div className="flex flex-row px-5 py-2.5 justify-between items-center">
                            <div className="flex flex-row gap-x-2.5 items-center">
                                <div>2.</div>
                                <div>Pickup In-Store</div>
                                <Check size={20} />
                            </div>
                            <div className="text-white text-sm rounded-sm bg-blue-900 hover:bg-blue-800 px-4 py-1 inline-block w-auto cursor-pointer" onClick={() => setSection('address')}>
                                Edit
                            </div>
                        </div>
                        <div className="text-sm px-5 pt-1.5 pb-4">1070 Major Mackenzie Drive East, Unit C1, Richmond Hill ON, L4S 1P3, Ontario Phone: 905-883-0817</div>
                    </div>
                }
                {section === 'payment' && credit === 'credit-yes' &&
                    <div className="flex flex-col">
                        <div className="flex flex-row gap-x-2.5 border-b px-5 py-2.5 bg-blue-700 text-white w-full">
                            <div>3.</div>
                            <div>Payment Method</div>
                        </div>
                        <div className="flex flex-col px-5 py-5 gap-y-5">
                            <div className="flex flex-row justify-between text-sm">
                                <div className="flex flex-col gap-y-1.5 text-sm">
                                    <div className="font-medium">Default Credit Card</div>
                                    <div>**** **** **** 4576</div>
                                    <div>03/22</div>
                                </div>
                                <div className="text-blue-700 hover:underline cursor-pointer" onClick={() => setCredit('credit-no')}>Switch to Net Terms</div>
                            </div>
                            <div className="flex flex-row items-center gap-x-1.5">
                                <div className="text-sm text-blue-700 font-medium cursor-pointer">Choose a Different Card</div>
                                <CaretRight size={14} color="#444AA2" weight="bold" className="cursor-pointer" />
                            </div>
                            <div className="flex flex-col gap-y-1.5 text-sm">
                                <div className="font-medium">Billing Address</div>
                                <div>75 West Wilmot Street, Richmond Hill ON, L4B 1K7</div>
                            </div>
                            <div className="flex flex-row items-center gap-x-1.5">
                                <div className="text-sm text-blue-700 font-medium cursor-pointer">Choose a Different Billing Address</div>
                                <CaretRight size={14} color="#444AA2" weight="bold" className="cursor-pointer" />
                            </div>
                            <div>
                                <Link to="/checkout-review" className="text-sm text-white rounded-sm bg-blue-900 hover:bg-blue-800 px-4 py-1.5 inline-block w-auto cursor-pointer" onClick={() => setSection('payment')}>
                                    Continue
                                </Link>
                            </div>
                        </div>
                    </div>
                }
                {section === 'payment' && credit === 'credit-no' &&
                    <div className="flex flex-col">
                        <div className="flex flex-row gap-x-2.5 border-b px-5 py-2.5 bg-blue-700 text-white w-full">
                            <div>3.</div>
                            <div>Payment Method</div>
                        </div>
                        <div className="flex flex-col px-5 py-5 gap-y-5">
                            <div className="flex flex-row justify-between text-sm">
                                <div className="flex flex-col gap-y-1.5 text-sm">
                                    <div className="font-medium">Net Terms (NET30)</div>
                                </div>
                                <div className="text-blue-700 hover:underline cursor-pointer" onClick={() => setCredit('credit-yes')}>Switch to Credit Card</div>
                            </div>
                            {/* {terms === "30" &&
                                <div className="flex flex-col gap-y-2.5">
                                    <div className="flex flex-row items-center gap-x-1.5 cursor-pointer">
                                        <RadioButton size={20} weight="fill" />
                                        <div className="text-sm font-medium">NET30</div>
                                    </div>
                                    <div className="flex flex-row items-center gap-x-1.5 cursor-pointer" onClick={() => setTerms('45')}>
                                        <Circle size={20} />
                                        <div className="text-sm font-medium">NET45</div>
                                    </div>
                                    <div className="flex flex-row items-center gap-x-1.5 cursor-pointer" onClick={() => setTerms('60')}>
                                        <Circle size={20} />
                                        <div className="text-sm font-medium">NET60</div>
                                    </div>
                                </div>
                            }
                            {terms === "45" &&
                                <div className="flex flex-col gap-y-2.5">
                                    <div className="flex flex-row items-center gap-x-1.5 cursor-pointer" onClick={() => setTerms('30')}>
                                        <Circle size={20} />
                                        <div className="text-sm font-medium">NET30</div>
                                    </div>
                                    <div className="flex flex-row items-center gap-x-1.5 cursor-pointer">
                                        <RadioButton size={20} weight="fill" />
                                        <div className="text-sm font-medium">NET45</div>
                                    </div>
                                    <div className="flex flex-row items-center gap-x-1.5 cursor-pointer" onClick={() => setTerms('60')}>
                                        <Circle size={20} />
                                        <div className="text-sm font-medium">NET60</div>
                                    </div>
                                </div>
                            }
                            {terms === "60" &&
                                <div className="flex flex-col gap-y-2.5">
                                    <div className="flex flex-row items-center gap-x-1.5 cursor-pointer" onClick={() => setTerms('30')}>
                                        <Circle size={20} />
                                        <div className="text-sm font-medium">NET30</div>
                                    </div>
                                    <div className="flex flex-row items-center gap-x-1.5 cursor-pointer" onClick={() => setTerms('45')}>
                                        <Circle size={20} />
                                        <div className="text-sm font-medium">NET45</div>
                                    </div>
                                    <div className="flex flex-row items-center gap-x-1.5 cursor-pointer">
                                        <RadioButton size={20} weight="fill" />
                                        <div className="text-sm font-medium">NET60</div>
                                    </div>
                                </div>
                            } */}
                            <div className="flex flex-col gap-y-1.5">
                                <div className="text-sm font-medium">Issue Date: 2024-04-26</div>
                                {terms === "30" &&
                                    <div className="text-sm text-secondary">Payment due 2024-05-26 (NET30). You will receive an invoice on the Order Management page.</div>
                                }
                                {terms === "45" &&
                                    <div className="text-sm text-secondary">Payment due 2024-06-10 (NET45). You will receive an invoice on the Order Management page.</div>
                                }
                                {terms === "60" &&
                                    <div className="text-sm text-secondary">Payment due 2024-06-25 (NET60). You will receive an invoice on the Order Management page.</div>
                                }
                            </div>
                            <div>
                                <Link to="/checkout-review" className="text-sm text-white rounded-sm bg-blue-900 hover:bg-blue-800 px-4 py-1.5 inline-block w-auto cursor-pointer" onClick={() => setSection('payment')}>
                                    Continue
                                </Link>
                            </div>
                        </div>
                    </div>
                }
                {section !== 'payment' &&
                    <div className="flex flex-row gap-x-2.5 px-5 py-2.5 bg-blue-700 text-white">
                        <div>3.</div>
                        <div>Payment Method</div>
                    </div>
                }
            </div>
        </div>
    )
}

export default CheckoutItems;
