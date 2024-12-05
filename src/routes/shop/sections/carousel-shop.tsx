import { useState, useEffect } from "react";
import laptop2 from "../../../assets/laptop2.png";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

const slides = [
    { image: laptop2 },
    { image: laptop2 },
    { image: laptop2 },
];

const products = [
    { image: laptop2, title: "Lorem ipsum Lorem ipsumm Lorem ipsum Lorem ipsumm", price: "$200.00" },
    { image: laptop2, title: "Lorem ipsum Lorem ipsumm Lorem ipsum Lorem ipsumm", price: "$200.00" },
    { image: laptop2, title: "Lorem ipsum Lorem ipsumm Lorem ipsum Lorem ipsumm", price: "$200.00" },
    { image: laptop2, title: "Lorem ipsum Lorem ipsumm Lorem ipsum Lorem ipsumm", price: "$200.00" },
    { image: laptop2, title: "Lorem ipsum Lorem ipsumm Lorem ipsum Lorem ipsumm", price: "$200.00" },
    { image: laptop2, title: "Lorem ipsum Lorem ipsumm Lorem ipsum Lorem ipsumm", price: "$200.00" },
]

function CarouselShop() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % slides.length);
        }, 1000000000); //1000ms = 1 second

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="max-w-[1440px] flex justify-center mx-auto relative overflow-hidden w-full px-20">
            <div
                className={`flex transition-transform duration-1000 ease-in-out mb-12`}
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((s, index) => (
                    <div
                        key={index}
                        className="relative flex flex-shrink-0 w-full opacity-0 transition-opacity duration-1000 ease-in-out"
                        style={{ opacity: index === current ? 1 : 0 }}
                    >
                        {products.map(item => (
                            <div className="flex flex-col gap-y-1.5 grow-0 w-1/6 h-44 cursor-pointer">
                                <div className="flex justify-center items-center">
                                    <img src={item.image} className="w-44" />
                                </div>
                                <div className="text-xs px-2">{item.title}</div>
                                <div className="absolute font-semibold px-2 bottom-0">{item.price}</div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <div className="absolute left-10 bottom-1/2" onClick={() => {
                if(current !== 0) {
                    setCurrent(current-1);
                }
            }}>
                <div className="rounded-full w-10 h-10 bg-slate-300 hover:bg-slate-400 flex justify-center items-center cursor-pointer">
                    <CaretLeft size={18} weight="bold" />
                </div>
            </div>

            <div className="absolute right-10 bottom-1/2" onClick={() => {
                if(current !== slides.length-1) {
                    setCurrent(current+1);
                }
            }}>
                <div className="rounded-full w-10 h-10 bg-slate-300 hover:bg-slate-400 flex justify-center items-center cursor-pointer">
                    <CaretRight size={18} weight="bold" />
                </div>
            </div>


            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2.5">
                {slides.map((s, i) => (
                    <div
                        onClick={() => setCurrent(i)}
                        key={"circle" + i}
                        className={`rounded-full w-2 h-2 cursor-pointer hover:bg-slate-500 ${i === current ? "bg-slate-600" : "bg-slate-400"}`}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default CarouselShop;