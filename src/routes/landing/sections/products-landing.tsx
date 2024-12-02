import server2 from "../../../assets/server2.png";
import businesslaptop from "../../../assets/businesslaptop.png";
import printer2 from "../../../assets/printer2.png";
import router from "../../../assets/router.png";
import { Link } from "react-router-dom";
import SSD from "../../../assets/SSD.png";
import keyboard from "../../../assets/keyboard.png";

const products = [
    { image: keyboard, title: "Keyboards & Mice", },
    { image: printer2, title: "Printers & Scanners" },
    { image: businesslaptop, title: "Business Laptops" },
    { image: SSD, title: "PC & Server Components" },
    { image: router, title: "Networking" },
    { image: server2, title: "Servers & Workstations" },
]

function ProductsLanding() {
    return (
        <div className="max-w-[1024px] justify-center mx-auto px-4 text-black w-full">
            <div className="flex flex-col gap-y-5 mt-5">
                <div className="text-2xl font-extrabold text-center">Popular Categories</div>
                <div className="columns-3 mt-5">
                    {products.map(item => (
                        <Link to="/hardware">
                            <div className="border p-5 mb-4 shadow-lg">
                                <img src={item.image} className="h-32 mx-auto" />
                                <div className="text-xl font-bold text-center mt-4">{item.title}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductsLanding;