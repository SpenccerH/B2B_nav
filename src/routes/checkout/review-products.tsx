function ReviewProducts() {
    return (
        <div className="border text-black">
            <div className="flex flex-col">
                <div className="bg-tabs-gray flex flex-col border-b">
                    <div className="px-5 pt-2.5 pb-7 text-sm">
                        <div className="py-2.5 text-lg">Order</div>
                        <table className="w-full border border-slate-400">
                            <thead>
                                <tr className="border-b border-slate-400 bg-gray-200">
                                    <th className="py-2 text-left pl-2.5">Description</th>
                                    <th className="py-2 text-center w-14">Qty</th>
                                    <th className="py-2 text-center w-28">Unit Price</th>
                                    <th className="py-2 text-center w-28">Ext. Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-1.5 pl-2.5">Macally Lightning USB Cable White (MISYNCABLEL10W)</td>
                                    <td className="py-1.5 text-center w-14">1</td>
                                    <td className="py-1.5 text-center w-28">$33.33</td>
                                    <td className="py-1.5 text-center w-28">$33.33</td>
                                </tr>
                                <tr>
                                    <td className="py-1.5 pl-2.5">ICAN 10000mAh Super Quick Charge - QC & PD 18W Power Bank (F1002PD)</td>
                                    <td className="py-1.5 text-center w-14">1</td>
                                    <td className="py-1.5 text-center w-28">$33.34</td>
                                    <td className="py-1.5 text-center w-28">$33.34</td>
                                </tr>
                                <tr>
                                    <td className="py-1.5 pl-2.5">G4900X (MISDWADADWA100 White Black All the Colors of the Rainbow)</td>
                                    <td className="py-1.5 text-center w-14">1</td>
                                    <td className="py-1.5 text-center w-28">$33.33</td>
                                    <td className="py-1.5 text-center w-28">$33.33</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="bg-tabs-gray flex flex-col">
                    <div className="flex flex-col text-sm px-5 pb-4 gap-y-1 pt-5">
                        <div>Subtotal: $100.00</div>
                        <div>EHF: $1.80</div>
                        <div>Taxes: $13.00</div>
                        <div>Total: $114.80</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewProducts;
