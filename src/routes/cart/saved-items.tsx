import { Check, Minus, Plus, X } from "@phosphor-icons/react";
import laptop2 from "../../assets/laptop2.png"
import { useState } from "react";

const items = [
    { id: 1, image: laptop2, name: "Lenovo ThinkBook 16 G6 Business Laptop 16\" FHD Intel i7-1355U 16GB 1TB SSD Windows 11 Pro, 21KH00NFUS", code: "LPLEN03804", online: "Yes", store: "Yes", date: "2024-10-02", user: "Porky Pig", price: 999.99 },
];

function SavedItems() {

    const [itemQuantities, setItemQuantities] = useState(
        items.reduce((acc, item) => {
            acc[item.id] = 1; // Start each item quantity at 1
            return acc;
        }, {})
    );

    const handleIncrease = (id) => {
        setItemQuantities(prevQuantities => ({
            ...prevQuantities,
            [id]: prevQuantities[id] + 1,
        }));
    };

    const handleDecrease = (id) => {
        setItemQuantities(prevQuantities => ({
            ...prevQuantities,
            [id]: Math.max(prevQuantities[id] - 1, 1), // Ensure quantity doesn't go below 1
        }));
    };

    const totalPrice = items.reduce((total, item) => {
        return total + (item.price) * itemQuantities[item.id];
    }, 0);

    return (
        <div className="flex flex-col gap-y-5">
            {items.map(item => (
                <div key={item.id} className="border rounded-lg p-5 shadow">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row gap-x-0.5">
                            <img src={item.image} className="h-20" />
                            <div className="flex flex-col gap-y-1">
                                <div className="font-medium">{item.name}</div>
                                <div className="text-sm text-secondary">Item Code: {item.code}</div>
                                <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5">
                                    {item.online === "Yes" &&
                                        <div className="flex flex-row items-center gap-x-1">
                                            <Check weight="bold" color="#16a34a" />
                                            <div className="text-xs text-green-600">Available Online</div> 
                                        </div>
                                    }
                                    {item.online === "No" &&
                                        <div className="flex flex-row items-center gap-x-1">
                                            <X weight="bold" color="#ef4444" />
                                            <div className="text-xs text-red-500">Unavailable Online</div> 
                                        </div>
                                    }
                                    {item.store === "Yes" &&
                                        <div className="flex flex-row items-center gap-x-1">
                                            <Check weight="bold" color="#16a34a" />
                                            <div className="text-xs text-green-600">Available In-Store</div> 
                                        </div>
                                    }
                                    {item.store === "No" &&
                                        <div className="flex flex-row items-center gap-x-1">
                                            <X weight="bold" color="#ef4444" />
                                            <div className="text-xs text-red-500">Unavailable In-Store</div> 
                                        </div>
                                    }
                                    <div className="text-xs text-blue-700 hover:underline cursor-pointer">Remove</div>
                                    <div className="text-xs text-white bg-blue-700 px-2.5 py-1 hover:bg-blue-600 cursor-pointer rounded-sm">Move to Cart</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-56 items-end">
                            <div className="text-lg font-medium text-red-600">{`$${((item.price) * itemQuantities[item.id]).toFixed(2)}`}</div>
                            <div className="text-xs">Plus $0.60 EHF</div>

                            <div className="text-sm text-center mt-2.5">
                                <div className="flex justify-center border border-slate-300 rounded-full">
                                    <button onClick={() => handleDecrease(item.id)} className="p-1.5 border-r rounded-l-full hover:bg-slate-100">
                                        <Minus size={10} />
                                    </button>
                                    <input
                                        type="number"
                                        value={itemQuantities[item.id]} // Display the quantity
                                        readOnly
                                        className="w-14 pl-3 focus:outline-none text-center text-xs"
                                    />
                                    <button onClick={() => handleIncrease(item.id)} className="p-1.5 border-l rounded-r-full hover:bg-slate-100">
                                        <Plus size={10} />
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            ))}
            {/* <div className="text-lg font-bold">Total Price: ${totalPrice.toFixed(2)}</div> */}
        </div>
    )
}

export default SavedItems;
