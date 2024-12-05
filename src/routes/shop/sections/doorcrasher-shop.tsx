import laptop2 from "../../../assets/laptop2.png";

const doorcrashers = [
    { image: laptop2, title: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum", price: "$100.00" },
    { image: laptop2, title: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum", price: "$100.00" },
    { image: laptop2, title: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum", price: "$100.00" },
    { image: laptop2, title: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum", price: "$100.00" },
]

function DoorcrasherShop() {
    return (
        <div className="max-w-[1440px] justify-center mx-auto px-4 text-black w-full">
            <div className="flex flex-row gap-x-5 mt-5 bg-oxford-blue p-5 justify-between">
                <div className="flex flex-col justify-between">
                    <div className="flex flex-col gap-y-1.5 mt-2.5">
                        <div className="text-school-bus-yellow text-2xl font-bold uppercase">Doorcrashers</div>
                        <div className="text-school-bus-yellow text-lg font-semibold">Online and In-Store</div>
                    </div>
                    <div className="flex flex-col gap-y-2.5">
                        <div className="text-white text-4xl font-bold">Save up to</div>
                        <div className="text-school-bus-yellow text-5xl font-extrabold text-center">$500</div>
                    </div>
                    <div className="text-school-bus-yellow text-sm font-medium mb-5">*Limited quantity per customer, while supplies last.</div>
                </div>
                <div className="flex flex-row gap-x-5">
                    {doorcrashers.map(item => (
                        <div className="bg-white flex flex-col gap-y-2.5 justify-between w-56 h-80 p-5">
                            <div className="flex justify-center items-center">
                                <img src={item.image} className="mt-2.5" />
                            </div>
                            <div className="flex flex-col gap-y-5">
                                <div className="text-sm font-medium">{item.title}</div>
                                <div className="text-xl font-bold">{item.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DoorcrasherShop;