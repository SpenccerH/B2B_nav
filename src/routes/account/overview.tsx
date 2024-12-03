import { Envelope, Phone } from "@phosphor-icons/react";
import anonymousprofile from "../../assets/anonymous-profile.jpg"

const basic = [
    { image: anonymousprofile, name: "Wile E. Coyote", role: "Business Analyst", access: "Purchaser Access" },
]

const about = [
    { icon: <Phone size={18} weight="light" />, title: "Phone:", content: "(647) 412-0786" },
    { icon: <Envelope size={18} weight="light" />, title: "Email:", content: "wile.e.coyote@cc.ca" },
]

function Overview() {

    return (
        <div className="mb-20">
            <div className="px-5">
                <div className="flex flex-col w-60">
                    {basic.map(item => (
                        <div className="flex flex-col pb-5 border-b">
                            <img src={item.image} className="rounded-full w-20 mb-2.5" />
                            <div className="text-lg">{item.name}</div>
                            <div className="text-sm text-secondary-color mb-0.5">{item.role}</div>
                            <div className="text-sm text-green-600 flex items-center mt-1">
                                {item.access}
                            </div>
                        </div>
                    ))}
                    <div className="flex flex-col gap-y-1.5 py-5 border-b">
                        {about.map(item => (
                            <div className="flex flex-row gap-x-2 items-center text-sm">
                                <div>{item.icon}</div>
                                <div className="text-secondary-color">{item.title}</div>
                                <div>{item.content}</div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-y-1.5 py-5 w-60">
                        <div className="text-sm">To update information, contact your primary user or administrator.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview;