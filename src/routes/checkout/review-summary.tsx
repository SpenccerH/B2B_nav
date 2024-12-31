import { Link } from "react-router-dom";

function ReviewSummary() {
    return (
        <div className="flex flex-col gap-y-2.5 w-84">
            <div className="border rounded-sm p-5 bg-tabs-gray">
                <div className="flex flex-col gap-y-2.5">
                    <div className="font-semibold border-b pb-2.5">Order Summary</div>
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
                    <Link to="/checkout-completed" className="text-sm font-medium text-center bg-black hover:bg-stone-700 text-white py-2 rounded mt-2.5">Place Order</Link>
                </div>
            </div>
        </div>
    );
}

export default ReviewSummary;
