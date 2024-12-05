import laptop2 from "../../../assets/laptop2.png";
import { CaretRight } from "@phosphor-icons/react";
import brand1 from "../../../assets/brand1.png";
import brand2 from "../../../assets/brand2.png";
import brand3 from "../../../assets/brand3.png";
import brand4 from "../../../assets/brand4.png";
import brand5 from "../../../assets/brand5.png";
import brand6 from "../../../assets/brand6.png";
import brand7 from "../../../assets/brand7.png";
import brand8 from "../../../assets/brand8.png";
import brand9 from "../../../assets/brand9.png";
import brand10 from "../../../assets/brand10.png";
import brand11 from "../../../assets/brand11.png";
import brand12 from "../../../assets/brand12.png";
import brand13 from "../../../assets/brand13.png";
import brand14 from "../../../assets/brand14.png";
import brand15 from "../../../assets/brand15.png";
import brand16 from "../../../assets/brand16.png";
import brand17 from "../../../assets/brand17.png";
import brand18 from "../../../assets/brand18.png";
import brand19 from "../../../assets/brand19.png";
import brand20 from "../../../assets/brand20.png";
import brand21 from "../../../assets/brand21.png";
import brand22 from "../../../assets/brand22.png";
import brand23 from "../../../assets/brand23.png";
import brand24 from "../../../assets/brand24.png";

const brands = [
    { image: brand1 },
    { image: brand2 },
    { image: brand3 },
    { image: brand4 },
    { image: brand5 },
    { image: brand6 },
    { image: brand7 },
    { image: brand8 },
    { image: brand9 },
    { image: brand10 },
    { image: brand11 },
    { image: brand12 },
    { image: brand13 },
    { image: brand14 },
    { image: brand15 },
    { image: brand16 },
    { image: brand17 },
    { image: brand18 },
    { image: brand19 },
    { image: brand20 },
    { image: brand21 },
    { image: brand22 },
    { image: brand23 },
    { image: brand24 },
]

function BrandsShop() {
    return (
        <div className="max-w-[1440px] justify-center mx-auto px-4 text-black w-full">
            <div className="flex flex-col gap-y-5 mt-5 p-5">
                <div className="flex flex-row items-center justify-between">
                    <div className="text-2xl font-bold">Shop By Brands</div>
                    <div className="flex flex-row gap-x-1.5 items-center font-semibold cursor-pointer">View More<CaretRight size={16} weight="bold" /></div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap justify-between gap-8">
                        {brands.map(item => (
                            <div className="flex justify-center items-center h-28 w-40 2xl:w-44 grow">
                                <img src={item.image} className="w-40" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrandsShop;