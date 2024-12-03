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
                                    <td className="py-1.5 pl-2.5">Lenovo ThinkPad E16 Laptop 16" AMD Ryzen 7 7730U 16GB 512 GB SSD Windows 11 Pro, 21JTS09700</td>
                                    <td className="py-1.5 text-center w-14">1</td>
                                    <td className="py-1.5 text-center w-28">$899.00</td>
                                    <td className="py-1.5 text-center w-28">$899.00</td>
                                </tr>
                                <tr>
                                    <td className="py-1.5 pl-2.5">Lenovo V15 G4 Business Laptop 15.6" FHD Intel i5-1335U 16GB 1TB SSD Windows 11 Pro, 83A100ECUS</td>
                                    <td className="py-1.5 text-center w-14">1</td>
                                    <td className="py-1.5 text-center w-28">$799.00</td>
                                    <td className="py-1.5 text-center w-28">$799.00</td>
                                </tr>
                                <tr>
                                    <td className="py-1.5 pl-2.5">Lenovo ThinkPad E16 Business Laptop 16" AMD Ryzen 5 7430U 16GB 1TB SSD Windows 11 Pro, 21JTA003US</td>
                                    <td className="py-1.5 text-center w-14">1</td>
                                    <td className="py-1.5 text-center w-28">$899.00</td>
                                    <td className="py-1.5 text-center w-28">$899.00</td>
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
