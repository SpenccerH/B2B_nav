import './footer.css'
import { Copyright } from '@phosphor-icons/react';
import qrandroid from "../../assets/qr-android.png";
import qrapple from "../../assets/qr-apple.png";
import getandroid from "../../assets/get-android.png";
import getapple from "../../assets/get-apple.png";


const resources = [
    { name: "Shop by Categories" },
    { name: "Shop by Brands" },
    { name: "Clearance" },
    { name: "Contests" },
]

const account = [
    { name: "Your Account" },
    { name: "View Cart" },
    { name: "View Wish List" },
    { name: "Order History" },
    { name: "Financing Options" },
]

const customerService = [
    { name: "Online Shopping FAQ" },
    { name: "Contact Us" },
    { name: "Online Returns & Exchanges Service" },
    { name: "Rebates & Promotions" },
    { name: "Service & Repair Centre" },
    { name: "Product Request" },
    { name: "Extended Holiday Return Policy" },
]

const companyProfile = [
    { name: "About us" },
    { name: "Press Room" },
    { name: "Philanthropy" },
    { name: "Careers" },
    { name: "Store Locations & Hours" },
    { name: "Corporate Sales" },
    { name: "Supply Chains Act" },
]

function FooterBottom() {
    return (
        <div className="bg-oxford-blue text-white justify-center text-sm">
            <div className="px-4 pb-8 max-w-[1440px] mx-auto">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col gap-y-2">
                        <div className="font-semibold text-lg">Resources</div>
                        {resources.map(item => (
                            <div className="cursor-pointer hover:underline">{item.name}</div>
                        ))}
                    </div>                    
                    <div className="flex flex-col gap-y-2">
                        <div className="font-semibold text-lg">Account</div>
                        {account.map(item => (
                            <div className="cursor-pointer hover:underline">{item.name}</div>
                        ))}
                    </div> 
                    <div className="flex flex-col gap-y-2">
                        <div className="font-semibold text-lg">Customer Service</div>
                        {customerService.map(item => (
                            <div className="cursor-pointer hover:underline">{item.name}</div>
                        ))}
                    </div> 
                    <div className="flex flex-col gap-y-2">
                        <div className="font-semibold text-lg">Company Profile</div>
                        {companyProfile.map(item => (
                            <div className="cursor-pointer hover:underline">{item.name}</div>
                        ))}
                    </div> 
                    <div className="flex flex-col gap-y-4">
                        <div className="font-semibold text-lg text-center">Mobile Apps</div>
                        <div className="flex flex-row items-center gap-x-5">
                            <div className="flex flex-col items-center gap-y-4">
                                <img src={qrandroid} className="w-20" />
                                <img src={getandroid} className="w-18 cursor-pointer" />
                            </div>
                            <div className="flex flex-col items-center gap-y-4">
                                <img src={qrapple} className="w-20" />
                                <img src={getapple} className="w-18 cursor-pointer" />
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
            <div className="py-8 border-t">
                <div className="flex flex-col max-w-[1440px] px-4 mx-auto items-center gap-y-2.5 text-xs">
                    <div className="flex flex-row gap-x-5">
                        <div className="hover:underline cursor-pointer pr-4 border-r">Privacy Policy</div>
                        <div className="hover:underline cursor-pointer pr-4 border-r">Product Warranty</div>
                        <div className="hover:underline cursor-pointer pr-4 border-r">Pricing</div>
                        <div className="hover:underline cursor-pointer pr-4 border-r">Terms & Conditions</div>
                        <div className="hover:underline cursor-pointer pr-4 border-r">AODO Policy</div>
                        <div className="hover:underline cursor-pointer pr-4 border-r">Recycling Fees</div>
                        <div className="hover:underline cursor-pointer pr-4">Returns & Exchanges</div>
                    </div>
                    <div className="flex flex-row items-center text-slate-300">
                        <Copyright size={16} />
                        <div className="ml-2.5">2024, Canada Computers & Electronics, Head Office - 168 Ultimate Dr, Richmond Hill, ON L4S 8M8</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterBottom;