import LargeCategory from "../../../components/categories/large-category";
import SmallCategory from "../../../components/categories/small-category";
import laptop2 from "../../../assets/laptop2.png";
import { CaretRight } from "@phosphor-icons/react";
import cat1 from "../../../assets/cat1.png";
import cat2 from "../../../assets/cat2.png";
import cat3 from "../../../assets/cat3.png";
import cat4 from "../../../assets/cat4.png";
import cat5 from "../../../assets/cat5.png";
import cat6 from "../../../assets/cat6.png";
import cat7 from "../../../assets/cat7.png";
import cat8 from "../../../assets/cat8.png";
import cat9 from "../../../assets/cat9.png";
import cat10 from "../../../assets/cat10.png";
import cat11 from "../../../assets/cat11.png";
import cat12 from "../../../assets/cat12.png";
import cat13 from "../../../assets/cat13.png";

const largeCategories = [
    { image: cat1, title: "Laptops, Tablet" },
    { image: cat2, title: "Desktop" },
]

const smallCategories1 = [
    { image1: cat3, title1: "Monitors", image2: cat6, title2: "Motherboards" },
    { image1: cat4, title1: "Keyboard & Mice", image2: cat7, title2: "Graphics Cards" },
    { image1: cat5, title1: "PC Headsest", image2: cat8, title2: "Memory" },
]

const smallCategories2 = [
    { image: cat9, title: "CPUs" },
    { image: cat10, title: "SSDs" },
    { image: cat11, title: "Video Games & Accessories" },
    { image: cat12, title: "Wi-Fi & Networking" },
    { image: cat13, title: "Computer Cases" },
]

function CategoriesShop() {
    return (
        <div className="max-w-[1440px] justify-center mx-auto px-4 text-black w-full">
            <div className="flex flex-col gap-y-5 mt-5 bg-slate-100 p-5">
                <div className="flex flex-row items-center justify-between">
                    <div className="text-2xl font-bold">Shop By Categories</div>
                    <div className="flex flex-row gap-x-1.5 items-center font-semibold cursor-pointer">View More<CaretRight size={16} weight="bold" /></div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row grow gap-4">
                        {largeCategories.map(item => (
                            <div className="w-1/5">
                                <LargeCategory title={item.title} image={item.image} />
                            </div>
                        ))}
                        {smallCategories1.map(item => (
                            <div className="flex flex-col gap-4 w-1/5">
                                <SmallCategory title={item.title1} image={item.image1} />
                                <SmallCategory title={item.title2} image={item.image2} />
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-row gap-4">
                        {smallCategories2.map(item => (
                            <div className="w-1/5">
                                <SmallCategory title={item.title} image={item.image} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoriesShop;