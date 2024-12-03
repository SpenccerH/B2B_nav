import { CaretDown } from "@phosphor-icons/react";
import visa from "../../assets/visa.png"
import mastercard from "../../assets/mastercard.png"

const cards1 = [
    { id: 1,  image: visa, num: "**** **** **** 9373", expiry: "10/2023", default: "Default" },
    { id: 2,  image: mastercard, num: "**** **** **** 9374", expiry: "10/2024" },
    { id: 3,  image: mastercard, num: "**** **** **** 9375", expiry: "10/2025" },
]

function PaymentCards() {
    return (
        <div className="flex flex-col rounded-sm pt-6 gap-y-2.5">
            {cards1.map((card, index) => (
                <div key={index} className={`border border-slate-300 rounded-sm bg-slate-100 cursor-pointer ${index === cards1.length - 1 ? 'fade-out' : ''}`}>
                    <div className="flex flex-col p-4">
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-row">
                                <img src={card.image} className="border border-slate-400 rounded-md h-10" />
                                <div className="flex flex-col text-sm ml-2.5">
                                    <div>{card.num}</div>
                                    <div>{card.expiry}</div>
                                </div>
                            </div>
                            {card.default && <div className="text-sm font-semibold">{card.default}</div>}
                        </div>
                    </div>
                </div>
            ))}
            <div className="relative flex-1">
                <div className="bg-slate-100 border border-slate-400 rounded-full p-2.5 text-center mx-auto caret-wrapper cursor-pointer">
                    <CaretDown />
                </div>
            </div>
        </div>
    );
}

export default PaymentCards;