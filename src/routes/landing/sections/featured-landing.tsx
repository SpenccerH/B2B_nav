import { Link } from "react-router-dom";
import businesslaptop2 from "../../../assets/businesslaptop2.png";
import printer3 from "../../../assets/printer3.png"
import server from "../../../assets/server.png"
import businesslaptop3 from "../../../assets/businesslaptop3.png"

const products = [
    { image: printer3, name: "HP LaserJet M209dw Monochrome Laser Printer - 30ppm, WiFi, Auto Duplex", description: "Deliver multipage documents in a flash with the fastest two-sided printing in class." },
    { image: businesslaptop2, name: "Lenovo ThinkBook G6 16\" FHD+ Intel i7-1355U 32GB 1TB SSD WIN11Pro", description: "Enhance productivity with a 16-inch display, i7 processor, improved keyboard design, and advanced security features." },
    { image: businesslaptop3, name: "ASUS Zenbook Pro 16\" Core i9-12900H GeForce RTX 3060 32GB 1TB", description: "Delivers powerful performance for demanding business tasks, multitasking, and professional-level tasks." },
    { image: server, name: "ARMOURY AMD Threadripper PRO 7995WX, 128GB DDR5, 2TB SSD, Win11", description: "Performance for demanding tasks, all running on Windows 11 Pro for enhanced productivity and reliability." },
]

function FeaturedLanding() {
    return (
        <div className="max-w-[1440px] justify-center mx-auto px-4 text-black mt-5 w-full">
            <div className="flex flex-col gap-y-5 w-full">
                <div className="text-2xl font-extrabold text-center">Featured Products</div>
                <div className="flex flex-row justify-between gap-x-10">
                    {products.map(item => (
                        <div className="w-1/4">
                            <div className="flex flex-col gap-y-1 mt-5">
                                <div className="flex justify-center">
                                    <img src={item.image} className="w-32 h-32" />
                                </div>
                                <div className="font-semibold text-sm mt-1.5">{item.name}</div>
                                <div className="text-sm">{item.description}</div>
                                <div className="inline-block w-auto pt-2.5 mt-1.5">
                                    <Link to="/hardware-product" className="text-sm bg-oxford-blue text-center text-white font-bold rounded-lg px-4 py-2.5 hover:bg-stone-700">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FeaturedLanding;