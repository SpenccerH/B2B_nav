import corsair from "../../../assets/corsair.png";
import razer from "../../../assets/razer.png";
import deal1 from "../../../assets/deal1.png";
import deal2 from "../../../assets/deal2.png";
import deal3 from "../../../assets/deal3.png";
import deal4 from "../../../assets/deal4.png";
import offer1 from "../../../assets/offer1.png";
import offer2 from "../../../assets/offer2.png";
import offer3 from "../../../assets/offer3.png";
import offer4 from "../../../assets/offer4.png";

const deals = [
    { image: deal1 },
    { image: deal2 },
    { image: deal3 },
    { image: deal4 },
]

function DealsShop() {
    return (
        <div className="max-w-[1440px] justify-center mx-auto px-4 text-black w-full">
            <div className="flex flex-col gap-y-10">
                <div className="flex flex-row justify-between gap-x-3 shrink">
                    <img src={offer1} className="w-20 grow cursor-pointer" />
                    <div className="flex flex-col w-20 grow justify-between">
                        <div className="flex flex-row gap-x-3">
                            <img src={offer2} className="w-20 grow cursor-pointer" />
                            <img src={offer3} className="w-20 grow cursor-pointer" />
                        </div>
                        <img src={offer4} className="cursor-pointer" />
                    </div>
                </div>
                <div className="flex flex-row justify-between gap-x-5 shrink">
                    {deals.map(item => (
                        <img src={item.image} className="w-20 grow border border border-slate-400 cursor-pointer" />
                    ))}
                </div>
                <div className="flex flex-row justify-between gap-x-5 shrink">
                    <img src={corsair} className="w-20 grow cursor-pointer" />
                    <img src={razer} className="w-20 grow cursor-pointer" />
                </div>
            </div>
        </div>
    )
}

export default DealsShop;