import { Link } from "react-router-dom";
import greenCheckmark from "../../assets/green-checkmark.png";
import { CalendarDots, CaretRight, MapPin, Printer, Question } from "@phosphor-icons/react";

function CompletedItems() {
    return (
        <div className="text-black flex flex-col gap-y-5">
            <div className="flex flex-row gap-x-10 px-5 pb-4 gap-y-1">
                <img src={greenCheckmark} className="w-20 h-20" />
                <div className="flex flex-col gap-y-2.5 text-sm w-full">
                    <div className="flex flex-row items-center justify-between mt-4">
                        <div className="text-xl font-semibold">Thank you for your order! Order Reference: #RYYXLZEPU (id:1522)</div>
                        <div className="flex flex-row items-center gap-x-1 text-blue-600 hover:underline cursor-pointer">
                            <Printer weight="light" size={24} color="#3e7fbb" />
                            <div className="font-medium">Print</div>
                        </div>
                    </div>
                    <div>An order confirmation email will be sent to you.</div>
                    <Link to="/order-details-pending" className="text-blue-700 hover:underline flex flex-row items-center gap-x-2.5">Review or edit your order<CaretRight /></Link>
                </div>
            </div>
            <div className="border flex flex-row justify-between p-5 gap-y-1">
                <div className="flex flex-row gap-x-2.5">
                    <CalendarDots size={24} weight="light" />
                    <div className="flex flex-col gap-y-1">
                        <div className="font-semibold">Estimated Arrival:</div>
                        <div className="text-sm font-medium">Nov 20 - Nov 22</div>
                        <div className="text-sm">Expedited Parcel</div>
                    </div>
                </div>
                <div className="flex flex-row gap-x-2.5">
                    <MapPin size={24} weight="light" />
                    <div className="flex flex-col gap-y-1">
                        <div className="font-semibold">Delivered To:</div>
                        <div className="text-sm font-medium">75 West Wilmot Street</div>
                        <div className="text-sm">Richmond Hill Ontario L4B 1K7 Canada</div>
                        <div className="text-sm">(647) 327-6457</div>
                    </div>
                </div>
                <div className="flex flex-row gap-x-2.5">
                    <Question size={24} weight="light" />
                    <div className="flex flex-col gap-y-1">
                        <div className="font-semibold">Have a Question?</div>
                        <div className="text-sm text-blue-700 hover:underline flex flex-row items-center gap-x-2.5 cursor-pointer">Contact Us<CaretRight /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompletedItems;
