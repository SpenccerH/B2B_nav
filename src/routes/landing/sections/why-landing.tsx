import { Scroll, Cardholder, ClipboardText, HandCoins, Laptop, UserFocus } from "@phosphor-icons/react";

const services = [
    { icon: <Laptop size={60} weight="light" />, title: "Online Ordering", body: "Shop online anytime with support from multiple buyers." },
    { icon: <HandCoins size={60} weight="light" />, title: "Savings on Products", body: "Receive special pricing tailored to your business." },
    { icon: <Cardholder size={60} weight="light" />, title: "Flexible Payment Options", body: "Credit cards, Net terms credit account, and more." },
    { icon: <ClipboardText size={60} weight="light" />, title: "Access to an Account Manager", body: "Personalized support from an account manager." },
    { icon: <UserFocus size={60} weight="light" />, title: "Pickup In-Store", body: "Pickup the product you need directly from our stores." },
    { icon: <Scroll size={60} weight="light" />, title: "Special Orders", body: "Including custom specifications, bulk quantities, and hard-to-find items." },
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
                                <div>{item.body}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WhyLanding;