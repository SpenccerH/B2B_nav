import { Check, Minus, Plus, X } from "@phosphor-icons/react";
import laptop2 from "../../assets/laptop2.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const items = [
    { id: 1, image: laptop2, name: "Lenovo ThinkPad E15 Laptop 16\" AMD Ryzen 7 7730U 16GB 512 GB SSD Windows 11 Pro, 21JTS09701", code: "LPLEN03804", online: "Yes", store: "Yes", date: "2024-10-02", user: "Porky Pig", price: 999.99 },
    { id: 2, image: laptop2, name: "Lenovo V15 G5 Business Laptop 15.6\" FHD Intel i5-1335U 16GB 1TB SSD Windows 11 Pro, 83A100ECUT", code: "LPLEN03708", online: "Yes", store: "Yes", date: "2024-09-28", user: "Bugs Bunny", price: 999.99 },
    { id: 3, image: laptop2, name: "Lenovo ThinkPad E15 Business Laptop 15.6\" AMD Ryzen 5 7430U 16GB 1TB SSD Windows 11 Pro, 21JTA003UT", code: "LPLEN03867", online: "Yes", store: "Yes", date: "2024-10-02", user: "Porky Pig", price: 999.99 },
];

function Recent() {
    const [allQuantity, setAllQuantity] = useState(1); // Global multiplier for all items
    const [itemQuantities, setItemQuantities] = useState(
        items.reduce((acc, item) => {
            acc[item.id] = 1; // Start each item quantity at 1
            return acc;
        }, {})
    );

    // Handler to update the global multiplier
    const handleIncreaseAll = () => {
        setAllQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecreaseAll = () => {
        setAllQuantity(prevQuantity => Math.max(prevQuantity - 1, 1)); // Ensure it doesn't go below 1
    };

    // Handlers for individual item quantity adjustments
    const handleIncreaseItem = (id) => {
        setItemQuantities(prevQuantities => ({
            ...prevQuantities,
            [id]: prevQuantities[id] + 1,
        }));
    };

    const handleDecreaseItem = (id) => {
        setItemQuantities(prevQuantities => ({
            ...prevQuantities,
            [id]: Math.max(prevQuantities[id] - 1, 1), // Ensure it doesn't go below 1
        }));
    };

    // Calculate the subtotal based on individual and global quantities
    const totalPrice = items.reduce((total, item) => {
        const effectiveQuantity = itemQuantities[item.id] * allQuantity;
        return total + item.price * effectiveQuantity;
    }, 0);

    return (
        <div className="flex flex-col gap-y-5">
            <div className="flex flex-row items-center justify-between pb-3">
                <div className="text-2xl">Recently Viewed</div>
                <div className="flex flex-row items-center gap-x-10">
                    {/* Controls for the global quantity multiplier */}
                    {/* <div className="flex justify-center border border-slate-300 rounded-full">
                        <button onClick={handleDecreaseAll} className="p-2.5 border-r rounded-l-full hover:bg-slate-100">
                            <Minus size={10} />
                        </button>
                        <input
                            type="number"
                            value={allQuantity}
                            readOnly
                            className="w-32 pl-4 focus:outline-none text-center text-xs"
                        />
                        <button onClick={handleIncreaseAll} className="p-2.5 border-l rounded-r-full hover:bg-slate-100">
                            <Plus size={10} />
                        </button>
                    </div>
                    <div>Subtotal: ${totalPrice.toFixed(2)}</div> */}
                </div>                
            </div>

            {/* Individual item display with quantity controls */}
            {items.map(item => {
                const effectiveQuantity = itemQuantities[item.id] * allQuantity;
                return (
                    <div key={item.id} className="border rounded-lg p-5 shadow">
                        <div className="flex flex-row justify-between gap-x-5">
                            <div className="flex flex-row gap-x-0.5">
                                <img src={item.image} className="h-20" />
                                <div className="flex flex-col gap-y-1">
                                    <div className="font-medium">{item.name}</div>
                                    <div className="text-sm text-secondary">Item Code: {item.code}</div>
                                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5">
                                        {item.online === "Yes" && (
                                            <div className="flex flex-row items-center gap-x-1">
                                                <Check weight="bold" color="#16a34a" />
                                                <div className="text-xs text-green-600">Available Online</div> 
                                            </div>
                                        )}
                                        {item.online === "No" && (
                                            <div className="flex flex-row items-center gap-x-1">
                                                <X weight="bold" color="#ef4444" />
                                                <div className="text-xs text-red-500">Unavailable Online</div> 
                                            </div>
                                        )}
                                        {item.store === "Yes" && (
                                            <div className="flex flex-row items-center gap-x-1">
                                                <Check weight="bold" color="#16a34a" />
                                                <div className="text-xs text-green-600">Available In-Store</div> 
                                            </div>
                                        )}
                                        {item.store === "No" && (
                                            <div className="flex flex-row items-center gap-x-1">
                                                <X weight="bold" color="#ef4444" />
                                                <div className="text-xs text-red-500">Unavailable In-Store</div> 
                                            </div>
                                        )}
                                        <div className="text-xs text-blue-700 hover:underline cursor-pointer">Add to Cart</div>
                                        <div className="text-xs text-blue-700 hover:underline cursor-pointer">Notify on Sale</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col w-32 items-end justify-between">
                                <div className="text-lg font-medium text-red-600">{`$${(item.price * effectiveQuantity).toFixed(2)}`}</div>
                                <div className="text-sm text-center mt-2.5">
                                    <div className="flex justify-center border border-slate-300 rounded-full">
                                        <button onClick={() => handleDecreaseItem(item.id)} className="p-1.5 border-r rounded-l-full hover:bg-slate-100">
                                            <Minus size={10} />
                                        </button>
                                        <input
                                            type="number"
                                            value={itemQuantities[item.id]} // Display individual quantity
                                            readOnly
                                            className="w-14 pl-4 focus:outline-none text-center text-xs"
                                        />
                                        <button onClick={() => handleIncreaseItem(item.id)} className="p-1.5 border-l rounded-r-full hover:bg-slate-100">
                                            <Plus size={10} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
            <div className="flex justify-end gap-x-5">
                <Link to="/cart" className="text-white bg-blue-700 hover:bg-blue-800 rounded-md text-center text-xs font-medium py-2 px-4">Add List to Cart</Link>
            </div>
        </div>
    );
}

export default Recent;
