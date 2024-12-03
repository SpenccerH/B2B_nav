import laptop from "../../assets/laptop.png";
import { CaretDown, Check, CreditCard, X } from "@phosphor-icons/react";
import visa from "../../assets/visa.png";
import mastercard from "../../assets/mastercard.png";
import { Button, Collection, DialogTrigger, Tab, TabList, TabPanel, Tabs } from "react-aria-components";
import fedex from "../../assets/fedex.png";
import NewContactModal from "../account/contacts/new-contact-modal";
import PaymentCards from "./payment-cards";
import PaymentTerms from "./payment-terms";

const cards1 = [
    { id: 1,  image: visa, num: "**** **** **** 9373", expiry: "10/2023", default: "Default" },
    { id: 2,  image: mastercard, num: "**** **** **** 9374", expiry: "10/2024" },
    { id: 3,  image: mastercard, num: "**** **** **** 9375", expiry: "10/2025" },
]

const actions = [
    {id: 1, title: 'Wallet', current: true, content: <PaymentCards /> },
    {id: 2, title: 'Net Terms', current: false, content: <PaymentTerms /> },
]

function PaymentDetails() {
    return (
        <div className="flex flex-col border rounded-sm p-6 gap-y-2.5">
            <div className="flex flex-row justify-between items-center">
                <div className="font-semibold mb-4">Payment Details</div>
            </div>
            <Tabs className="flex flex-col">
                <div className="flex flex-col border">
                    <TabList items={actions}>
                        {item => <Tab className="flex flex-row items-center hover:bg-slate-100 border cursor-pointer px-6 py-2.5 focus:outline-none">{item.title}</Tab>}
                    </TabList>
                </div>
                <Collection items={actions}>
                    {item => (
                        <TabPanel>
                            {item.content}
                        </TabPanel>
                    )}
                </Collection>
            </Tabs>
        </div>
    )
}

export default PaymentDetails;