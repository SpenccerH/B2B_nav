function DetailSummary() {
    return (
        <div className="flex flex-col gap-y-2.5 w-84">
            <div className="border rounded-sm p-5 bg-tabs-gray">
                <div className="flex flex-col gap-y-2.5">
                    <div className="font-semibold border-b pb-2.5">Order Summary</div>
                    <div className="flex flex-row justify-between items-center">
                        <div className="text-sm font-light">Product Subtotal:</div>
                        <div className="text-sm font-light">$100.00</div>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <div className="text-sm font-light pr-2.5">EHF:</div>
                        <div className="text-sm font-light">$1.80</div>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <div className="text-sm font-light">Taxes:</div>
                        <div className="text-sm font-light">$13.00</div>
                    </div>
                    <div className="flex flex-row justify-between items-center border-t pt-2.5">
                        <div className="font-medium">Total:</div>
                        <div className="text-sm font-medium text-red-600">$114.80</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailSummary;
