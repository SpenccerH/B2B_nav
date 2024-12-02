import './footer.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import solutionsblack from "../../assets/solutionsblack.png";
import { Copyright, Envelope, FacebookLogo, InstagramLogo, X, XLogo, YoutubeLogo } from '@phosphor-icons/react';
import person2 from "../../assets/person2.png"

function FooterBottom() {

    const [currentRelationship, setCurrentRelationship] = useState("");

    const handleSelectChange = (event) => {
        setCurrentRelationship(event.target.value);
    };

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
        <div className="bg-ghost-white text-oxford-blue justify-center border-ghost-white/5 text-sm">
            <div className="px-4 py-10 max-w-[1440px] mx-auto">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col">
                        <img src={solutionsblack} className="h-20" />
                        <div className="text-xl font-medium mt-5">Send Us A Message</div>
                        <div className="cursor-pointer" onClick={handleOpen}>
                            <Envelope weight="thin" size={48} className="mt-2.5" />
                        </div>
                        {isOpen && (
                            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                <div className="bg-ghost-white rounded w-full max-w-[70vw] relative">
                                    <div className="h-[90vh] overflow-y-auto">
                                    <div className="flex flex-row">
                                        <div className="bg-oxford-blue w-1/2">
                                            <img src={person2} className="rounded-l-sm h-full absolute bg-contain" />
                                        </div>
                                        <form className="rounded-r-sm w-1/2 h-full">
                                            <img src={solutionsblack} className="h-10 mt-8 px-[3vw]" />
                                            <div className="text-2xl text-black font-semibold mt-4 px-[3vw] text-left">Send us a Message</div>
                                            <div className="text-slate-500 text-sm font-medium text-left py-2.5 px-[3vw]">Have a question or need assistance? Just fill out the form, and we'll get back to you shortly.</div>
                                                <div className="flex flex-wrap mb-1.5 justify-between">
                                                    <div className="w-2/5 ml-[3vw]">
                                                        <label className="block tracking-wide text-left text-black text-sm font-semibold mb-1.5">First Name</label>
                                                        <input className="appearance-none block w-full bg-white text-black border border-black rounded py-2 px-2.5 mb-3 leading-tight focus:outline-none" />
                                                    </div>
                                                    <div className="w-2/5 mr-[3vw]">
                                                        <label className="block tracking-wide text-left text-black text-sm font-semibold mb-1.5">Last Name</label>
                                                        <input className="appearance-none block w-full bg-white text-black border border-black rounded py-2 px-2.5 leading-tight focus:outline-none" />
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap px-[3vw] mb-1.5">
                                                    <div className="w-full">
                                                        <label className="block tracking-wide text-left text-black text-sm font-semibold mb-1.5">Company Name</label>
                                                        <input className="appearance-none block w-full bg-white text-black border border-black rounded py-2 px-2.5 mb-3 leading-tight focus:outline-none" />
                                                        <label className="block tracking-wide text-left text-black text-sm font-semibold mb-1.5">Business Email</label>
                                                        <input className="appearance-none block w-full bg-white text-black border border-black rounded py-2 px-2.5 mb-3 leading-tight focus:outline-none" />
                                                        <label className="block tracking-wide text-left text-black text-sm font-semibold mb-1.5">Phone Number</label>
                                                        <input className="appearance-none block w-full bg-white text-black border border-black rounded py-2 px-2.5 mb-3 leading-tight focus:outline-none" />
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap px-[3vw] mb-1.5">
                                                    <label className="block tracking-wide text-black text-sm font-semibold mb-1.5">What is your current working relationship with us?</label>
                                                    <div className="relative w-full">
                                                        <select className="block appearance-none w-full bg-white border border-black text-black py-2 px-2.5 pr-8 rounded leading-tight focus:outline-none" value={currentRelationship} onChange={handleSelectChange}>
                                                            <option value="" disabled selected>Please Select</option>
                                                            <option value="working">I'm currently working with Canada Computers</option>
                                                            <option value="not-working">I'm not currently working with Canada Computers</option>
                                                            <option value="want-to-work">I want to work with Canada Computers</option>
                                                        </select>
                                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black">
                                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                                        </div>
                                                    </div>
                                                    {currentRelationship === "working" && (
                                                        <div className="flex flex-wrap mt-4 mb-1.5">
                                                            <div className="w-full md:w-1/2 mb-6 pr-3 md:mb-0">
                                                                <label className="block tracking-wide text-black text-left text-sm font-semibold mb-1.5">Account Number</label>
                                                                <input className="appearance-none block w-full bg-white text-black border border-black rounded py-2 px-2.5 mb-3 leading-tight focus:outline-none" />
                                                            </div>
                                                            <div className="w-full md:w-1/2 pl-3">
                                                                <label className="block tracking-wide text-black text-left text-sm font-semibold mb-1.5">Corporate Account Rep</label>
                                                                <input className="appearance-none block w-full bg-white text-black border border-black rounded py-2 px-2.5 leading-tight focus:outline-none" />
                                                            </div>
                                                            <div className="w-full md:w-1/2 mb-6 pr-3 md:mb-0">
                                                                <label className="block tracking-wide text-black text-left text-sm font-semibold mb-1.5">Invoice Number</label>
                                                                <input className="appearance-none block w-full bg-white text-black border border-black rounded py-2 px-2.5 leading-tight focus:outline-none" />
                                                            </div>
                                                            <div className="w-full md:w-1/2 pl-3">
                                                                <label className="block tracking-wide text-black text-left text-sm font-semibold mb-1.5">Quote/Order Number</label>
                                                                <input className="appearance-none block w-full bg-white text-black border border-black rounded py-2 px-2.5 leading-tight focus:outline-none" />
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="flex flex-wrap px-[3vw] mb-4">
                                                    <div className="w-full">
                                                        <label className="block tracking-wide text-left text-black text-sm font-semibold mt-3 mb-1.5">How can we be of assistance?</label>
                                                        <textarea className="appearance-none block w-full bg-white text-black border border-black rounded py-2 px-2.5 mb-3 leading-6 focus:outline-none" rows="3" />
                                                    </div>
                                                </div>
                                                <div className="px-[3vw]">
                                                    <button className="px-[3vw] mb-6 w-full bg-slate-200 hover:bg-slate-300 border border-slate-400 font-medium py-2 rounded" onClick={handleClose}>
                                                        Send Message
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <button className="absolute top-6 right-8 text-gray-500 text-xl" onClick={handleClose}>
                                        <X />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col gap-y-2">
                        <div className="font-medium text-lg">Company Profile</div>
                        <Link to="/about">About Us</Link>
                        <div>Press Room</div>
                        <div>Philantrophy</div>
                        <div>Careers</div>
                        <div>Corporate Sales</div>
                        <div>Supply Chains Act</div>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <div className="font-medium text-lg">Featured Services</div>
                        <div>Account Manager Services</div>
                        <div>Savings on Products</div>
                        <div>Tailored Solutions</div>
                        <div>Flexible Payment Options</div>
                        <div>Full Product Cycle Support</div>
                        <div>Performance Analytics</div>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <div className="font-medium text-lg">Help and Support</div>
                        <div>Contact Us</div>
                        <div>Online Returns and Exchanges</div>
                        <div>Rebates & Promotions</div>
                        <div>Service and Repair Center</div>
                        <div>Product Request</div>
                        <Link to="/create-account">Create an Account</Link>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <div className="font-medium text-lg">Policies</div>
                        <div>Recycling Fees</div>
                        <div>Returns & Exchanges</div>
                        <div>Product Warranty</div>
                        <div>Pricing</div>
                        <div>AODA Policy</div>
                    </div>
                </div>
            </div>
            {/* <div className="w-full pl-4 pr-4 py-5 border border-t-black">
                <div className="flex flex-row justify-center gap-x-8">
                    <a href="https://www.canadacomputers.com/" target="_blank">
                        <FacebookLogo  weight="light" size={40} />
                    </a>
                    <a href="https://www.canadacomputers.com/" target="_blank">
                        <XLogo  weight="light" size={40} />
                    </a>
                    <a href="https://www.canadacomputers.com/" target="_blank">
                        <YoutubeLogo  weight="light" size={40} />
                    </a>
                    <a href="https://www.canadacomputers.com/" target="_blank">
                        <InstagramLogo  weight="light" size={40} />
                    </a>
                </div>
            </div> */}
            <div className="pt-8 pb-20 border border-t-black">
                <div className="flex flex-row justify-between gap-x-8 max-w-[1440px] px-4 mx-auto">
                    <div className="flex flex-row">
                        <Copyright size={20} />
                        <div className="ml-2.5">2024, Canada Computers & Electronics, Head Office - 168 Ultimate Dr, Richmond Hill, ON L4S 8M8</div>
                    </div>
                    <div className="flex flex-row gap-x-8">
                        <div>Terms & Conditions</div>
                        <div>Privacy Notice</div>
                        <div>ISO Compliance</div>
                        <div>FAQ</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterBottom;