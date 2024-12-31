import { Scroll, Phone, ClipboardText, HandCoins, Laptop, UserFocus } from "@phosphor-icons/react";

const services = [
    { icon: <Laptop size={60} weight="light" />, title: "Online Ordering", body: "Shop online with your business account, with support for multiple user logins." },
    { icon: <Scroll size={60} weight="light" />, title: "Flexible Return Policy", body: "Lenient returns and extended warranties on certain products." },
    { icon: <ClipboardText size={60} weight="light" />, title: "Custom Built Systems", body: "We can build any PCs, workstations and servers with any configuration to meet your specific needs." },
    { icon: <HandCoins size={60} weight="light" />, title: "Savings on Products", body: "Receive special discounts based on your volume of orders." },
    { icon: <UserFocus size={60} weight="light" />, title: "Localized Service", body: "Have your product picked up at any of our stores with access to technical support." },
    { icon: <Phone size={60} weight="light" />, title: "Scalable Pricing", body: "Pricing aligned with your business size to ensure the best value for every stage of growth." },
]

function WhyLanding() {
    return (
        <div className="max-w-[1440px] justify-center mx-auto px-4 text-black"> 
            <div className="flex flex-col gap-y-10">
                <div className="text-2xl font-extrabold text-center">Why Canada Computers Business?</div>
                <div className="columns-3">
                    {services.map(item => (
                        <div className="mb-4">
                            <div className="flex flex-col gap-y-2 items-center text-center border rounded p-5 h-48 bg-tabs-gray">
                                <div>{item.icon}</div>
                                <div className="font-extrabold">{item.title}</div>
                                <div className="text-sm">{item.body}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WhyLanding;