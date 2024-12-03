import { Link } from "react-router-dom";

function ReviewItems() {
    return (
        <div className="border text-black">
            <div className="flex flex-col">
                <div className="bg-tabs-gray flex flex-col border-b">
                    <div className="px-5 py-2.5">Contact Information</div>
                    <div className="flex flex-col text-sm px-5 pb-4 gap-y-1">
                        <div>Wile E. Coyote</div>
                        <div>wile.e.coyote@cc.ca</div>
                        <div>(647) 412-0786</div>
                    </div>
                </div>
                <div className="bg-tabs-gray flex flex-row gap-x-40 border-b">
                    <div className="flex flex-col">
                        <div className="px-5 py-2.5">Shipping Address</div>
                        <div className="flex flex-col text-sm px-5 pb-4 gap-y-1">
                            <div>Bugs Bunny</div>
                            <div>75 West Wilmot Street</div>
                            <div>Richmond Hill</div>
                            <div>Ontario, Canada</div>
                            <div>L4B 1K7</div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="px-5 py-2.5">Billing Address</div>
                        <div className="flex flex-col text-sm px-5 pb-4 gap-y-1">
                            <div>Head Office</div>
                            <div>Bugs Bunny</div>
                            <div>75 West Wilmot Street</div>
                            <div>Richmond Hill</div>
                            <div>Ontario, Canada</div>
                            <div>L4B 1K7</div>
                        </div>
                    </div>
                </div>
                <div className="bg-tabs-gray flex flex-col border-b">
                    <div className="px-5 py-2.5">Additional Information</div>
                    <div className="flex flex-col text-sm px-5 pb-4 gap-y-1">
                        <div>Shipment Attention To: Wile E. Coyote, Yosemite Sam, Elmer Fudd</div>
                        <div>PO # 29342428</div>
                        <div>(647) 412-0786</div>
                    </div>
                </div>
                <div className="bg-tabs-gray flex flex-col">
                    <div className="px-5 py-2.5">Payment Method</div>
                    <div className="flex flex-col text-sm px-5 pb-4 gap-y-1">
                        <div>Net Terms</div>
                        <Link to="/checkout" className="text-white bg-blue-700 hover:bg-blue-800 rounded-sm text-center text-xs py-2 px-4 w-40 mt-2.5">Edit Payment Method</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewItems;
