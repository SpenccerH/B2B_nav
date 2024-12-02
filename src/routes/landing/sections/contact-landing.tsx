import { Link } from "react-router-dom";
import { Envelope, Pen, Phone, ShoppingBagOpen } from "@phosphor-icons/react";

const options = [
    { icon: <ShoppingBagOpen size={80} weight="thin" color="#3b82f6" />, title: "Shop for your business.", body1: "Shop Online", body2: "Shop In-Person", link1: "/hardware", link2: "/hardware" },
]

const contact = [
    { title: "Send us a Message", icon: <Envelope size={25}  />, link: "/create-account" },
    { title: "Give us a Call", icon: <Phone size={25}    />, body1: "Toll-Free : 1-855-940-2400", body2: "Toronto/GTA : 905-780-2632", body3: "Ottawa Area : 613-225-8188", body4: "Vancouver Area : 604-235-3251" },
    { title: "Apply for a Business Account", icon: <Pen size={25}   />, link: "/create-account" },
]

function ContactLanding() {
    return (
        <div className="max-w-[1024px] justify-center mx-auto px-4 text-black w-full">
            <div className="flex flex-col gap-y-2.5">
                <div className="text-2xl font-extrabold text-center">Let's Get Started</div>
                <div className="text-lg text-center pb-6">We've made buying the technology you need for your business easier than ever.</div>
                <div className="flex flex-row gap-x-14">
                    {options.map(item => (
                        <div className="flex flex-col border rounded-3xl text-center bg-tabs-gray justify-center items-center w-1/2">
                            <div className="w-full overflow-hidden rounded-t-3xl flex flex-col justify-center items-center">
                                <div>{item.icon}</div>
                            </div>
                            <div className="flex flex-col gap-y-2.5">
                                <div className="text-2xl font-bold">{item.title}</div>
                                <div className="flex flex-col gap-y-1">
                                    <div className="text-blue-600 text-center inline-block w-auto">
                                        <Link to={item.link1} className="hover:underline">{item.body1}</Link>
                                    </div>
                                    <div className="text-blue-600 text-center inline-block w-auto">
                                        <Link to={item.link2} className="hover:underline">{item.body2}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="flex flex-col">
                        {contact.map(item => (
                            <div className="flex flex-col border-b last:border-b-0">
                                {item.title !== "Give us a Call" &&
                                    <Link to={item.link}>
                                        <div className="flex flex-row items-center gap-x-2.5 pt-4 pb-2.5 hover:underline cursor-pointer">
                                            <div className="text-xl font-medium">{item.title}</div>
                                            <div>{item.icon}</div>
                                        </div>
                                    </Link>
                                }
                                {item.title === "Give us a Call" &&
                                    <div>
                                        <div className="flex flex-row items-center gap-x-2.5 pt-4 pb-2.5">
                                            <div className="text-xl font-medium">{item.title}</div>
                                            <div>{item.icon}</div>
                                        </div>
                                        <div className="flex flex-col gap-y-0.5 pb-4 text-blue-600 cursor-pointer">
                                            <div className="hover:underline">{item.body1}</div>
                                            <div className="hover:underline">{item.body2}</div>
                                            <div className="hover:underline">{item.body3}</div>
                                            <div className="hover:underline">{item.body4}</div>
                                        </div>
                                    </div>
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactLanding;