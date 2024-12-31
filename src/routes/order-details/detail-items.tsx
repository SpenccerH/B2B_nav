import laptop2 from "../../assets/laptop2.png";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const details = [
    { title: "Order Date", body: "2021-03-17" },
    { title: "Order Number", body: "CCORD000001" },
    { title: "Order Status", body: "Completed" },
    { title: "User", body: "Wile E. Coyote" },
]

const shipping = [
    { title: "Company Name", body: "Acme Corporation" },
    { title: "Recipient Name", body: "Bugs Bunny" },
    { title: "Shipping Address", body: "75 West Wilmot Street, Richmond Hill ON, L4B 1K7" },
]

const items = [
    { id: 1, image: laptop2, name: "Lenovo ThinkPad E16 Laptop 16\" AMD Ryzen 7 7730U 16GB 512 GB SSD Windows 11 Pro, 21JTS09700", code: "LPLEN03804", online: "Yes", store: "Yes", date: "2024-10-02", user: "Porky Pig", price: 899.99 },
    { id: 2, image: laptop2, name: "Lenovo V15 G4 Business Laptop 15.6\" FHD Intel i5-1335U 16GB 1TB SSD Windows 11 Pro, 83A100ECUS", code: "LPLEN03708", online: "Yes", store: "Yes", date: "2024-09-28", user: "Bugs Bunny", price: 799.99 },
    { id: 3, image: laptop2, name: "Lenovo ThinkPad E16 Business Laptop 16\" AMD Ryzen 5 7430U 16GB 1TB SSD Windows 11 Pro, 21JTA003US", code: "LPLEN03867", online: "Yes", store: "Yes", date: "2024-10-02", user: "Porky Pig", price: 899.99 },
];

function DetailItems() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className="flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-2.5">
                {details.map(item => (
                    <div className="flex flex-row items-center gap-x-1.5 text-sm">
                        <div>{item.title}:</div>
                        <div>{item.body}</div>
                    </div>
                ))}
                <div className="inline-block w-auto mt-2.5">
                <Link to="/cart" className="text-xs bg-oxford-blue text-center text-white font-medium rounded px-4 py-2.5 hover:bg-stone-700">Re-Order</Link>
                </div>
            </div>
            <div className="flex flex-col gap-y-4">
                <div className="inline-block w-full">
                    <div className="text-sm bg-blue-900 text-white font-medium rounded-sm px-4 py-2.5">Shipping Address</div>
                </div>
                <div className="flex flex-col gap-y-2.5">
                    {shipping.map(item => (
                        <div className="flex flex-row items-center gap-x-1.5 text-sm">
                            <div>{item.title}:</div>
                            <div>{item.body}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-y-4">
                <div className="inline-block w-full">
                    <div className="text-sm bg-blue-900 text-white font-medium rounded-sm px-4 py-2.5">3 Items</div>
                </div>
                <div className="flex flex-col gap-y-5">
                    {items.map(item => (
                        <div key={item.id} className="border rounded-lg p-5 shadow">
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-row gap-x-0.5">
                                    <img src={item.image} className="h-20" />
                                    <div className="flex flex-col gap-y-1">
                                        <div className="font-medium">{item.name}</div>
                                        <div className="flex flex-row gap-x-5 items-center">
                                            <div className="text-sm text-secondary">Item Code: {item.code}</div>
                                            <div className="text-xs text-blue-700 hover:underline cursor-pointer">Re-Order</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col w-56 items-end">
                                    <div className="text-lg font-medium text-red-600">${item.price}</div>
                                    <div className="text-xs">Plus $0.60 EHF</div>
                                    <div className="text-sm mt-2.5">Quantity: 1</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="inline-block w-auto">
                <Link to="/orders" className="text-xs bg-oxford-blue text-center text-white font-medium rounded px-4 py-2.5 hover:bg-stone-700">Back</Link>
            </div>
        </div>
    )
}

export default DetailItems;