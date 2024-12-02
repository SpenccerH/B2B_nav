const dropTitles = [
    { name: "Item Code:" },
    { name: "Description:" },
    { name: "Quantity:" },
]

const dropItems = [
    { code: "LPGIG00173", description: "Gigabyte G6 KF Gaming Laptop 16\" 165Hz Intel i7-13620H GeForce RTX 4060 16GB 1TB SSD Windows 11 Home, G6 KF-H3 US854KH [Warranty: Return Period: 15 Days; Defective Exchange Period: 90 Days; Manufacturer: 1 Year; ]", quantity: "1" },
    { code: "LPGIG00173", description: "Gigabyte G6 KF Gaming Laptop 16\" 165Hz Intel i7-13620H GeForce RTX 4060 16GB 1TB SSD Windows 11 Home, G6 KF-H3 US854KH [Warranty: Return Period: 15 Days; Defective Exchange Period: 90 Days; Manufacturer: 1 Year; ]", quantity: "1" },
    { code: "LPGIG00173", description: "Gigabyte G6 KF Gaming Laptop 16\" 165Hz Intel i7-13620H GeForce RTX 4060 16GB 1TB SSD Windows 11 Home, G6 KF-H3 US854KH [Warranty: Return Period: 15 Days; Defective Exchange Period: 90 Days; Manufacturer: 1 Year; ]", quantity: "1" },
]

function InvoiceDropdown() {
    return (
        <tr>
            <td colSpan={10} className="px-4 pb-6">
                <table className="w-full border">
                    <thead>
                        <tr className="text-black border border-slate-300 bg-tabs-gray text-left text-xs">
                        {dropTitles.map(item => (
                            <th className="py-4 pl-4 pr-4 font-semibold">
                                {item.name}
                            </th>
                        ))}
                        
                        </tr>
                    </thead>
                    
                    <tbody>
                        {dropItems.map(item => (
                            <tr className="text-black border border-slate-300 text-left text-xs">
                                <td className="py-4 pl-4 pr-8">{item.code}</td>
                                <td className="pl-4 py-4">{item.description}</td>
                                <td className="pl-10 py-4">{item.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </td>
        </tr>
    )
}

export default InvoiceDropdown;