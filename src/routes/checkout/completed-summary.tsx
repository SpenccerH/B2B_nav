import mastercard from "../../assets/mastercard.png"
import laptop2 from "../../assets/laptop2.png"

function CompletedSummary() {
    return (
        <div className="flex flex-col gap-y-2.5 w-84">
            <div className="border rounded-sm p-5 bg-tabs-gray">
                <div className="flex flex-col gap-y-2.5">
                    <div className="font-semibold border-b pb-2.5">Order Confirmation Summary</div>
                    <div className="flex flex-col gap-y-2.5 pb-2.5 border-b">
                        <div className="text-sm font-light">Products (3 Items):</div>
                        <div className="flex flex-row gap-x-1.5">
                            <img src={laptop2} className="w-16" />
                            <div className="text-xs">Lenovo ThinkPad E16 Laptop 16" AMD Ryzen 7 7730U...</div>
                            <div className="text-sm font-light">$899.99</div>
                        </div>
                        <div className="flex flex-row gap-x-1.5">
                            <img src={laptop2} className="w-16" />
                            <div className="text-xs">Lenovo V15 G4 Business Laptop 15.6" FHD Intel...</div>
                            <div className="text-sm font-light">$799.99</div>
                        </div>
                        <div className="flex flex-row gap-x-1.5">
                            <img src={laptop2} className="w-16" />
                            <div className="text-xs">Lenovo ThinkPad E16 Business Laptop 16 AMD...</div>
                            <div className="text-sm font-light">$899.99</div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <div className="text-sm font-light">Subtotal:</div>
                        <div className="text-sm font-light">$2,599.97</div>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <div className="text-sm font-light">EHF:</div>
                        <div className="text-sm font-light">$1.80</div>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <div className="text-sm font-light">HST:</div>
                        <div className="text-sm font-light">$338.00</div>
                    </div>
                    <div className="flex flex-row justify-between items-center border-y py-2.5">
                        <div className="font-medium">Total:</div>
                        <div className="text-sm font-medium">$2,939.77</div>
                    </div>
                    <div className="flex flex-col gap-y-2.5 text-sm font-light">
                        <div className="font-normal">Payment Method</div>
                        <div className="flex flex-row gap-x-4">
                            <img src={mastercard} className="w-18 h-10 border" />
                            <div className="flex flex-col">
                                <div>**** **** **** **** 4576</div>
                                <div>Exp: 03/24</div>
                                <div>75 West Wilmot Street</div>
                                <div>Richmond Hill Ontario L4B 1K7 Canada</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompletedSummary;
