function CheckoutSummary() {
    return (
        <div className="flex flex-col gap-y-2.5 w-84">
            <div className="border rounded-sm p-5 bg-tabs-gray">
                <div className="flex flex-col gap-y-2.5">
                    <div className="font-semibold border-b pb-2.5">Order Summary</div>
                    <div className="flex flex-row justify-between items-center">
                        <div className="text-sm font-light">Product Subtotal:</div>
                        <div className="text-sm font-light">$2,599.97</div>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <div className="text-sm font-light">Environmental Handling Fees:</div>
                        <div className="text-sm font-light">$1.80</div>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <div className="text-sm font-light">Taxes:</div>
                        <div className="text-sm font-light">$338.00</div>
                    </div>
                    <div className="flex flex-row justify-between items-center border-y py-2.5">
                        <div className="font-medium">Total:</div>
                        <div className="text-sm font-medium text-red-600">$2,937.97</div>
                    </div>
                    <div className="flex flex-col gap-y-2.5">
                        <div className="font-medium">Coupon Code</div>
                        <div className="flex flex-row items-center">
                            <input type="text" placeholder="Enter Coupon Code" className="border text-sm text-black focus:outline-none grow px-3 py-1.5" />
                            <button className="font-semibold text-white text-sm bg-blue-900 hover:bg-blue-800 px-4 py-1.5">Apply</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckoutSummary;
