import {
    ArchiveIcon, BookmarkIcon, IdCardIcon, MixerVerticalIcon,
} from '@radix-ui/react-icons';
import './sidebar.scss';
import { Link } from 'react-router-dom';
import { Alarm, Envelope, Phone } from '@phosphor-icons/react';
import anthony from "../../assets/anthony.png";

const about = [
    { icon: <Phone size={16} weight="light" />, title: "Phone:", content: "(905) 780-2632 Ext.414" },
    { icon: <Envelope size={16} weight="light" />, title: "Email:", content: "anthony.greenidge@cc.ca" },
    { icon: <Alarm size={16} weight="light" />, title: "Hours of Availability:", content: "9am-6pm EST. Mon-Fri." },
]

function Sidebar() {
    return (
        <div className="h-full w-[15rem] sticky top-5 self-start">
            <div className="border border px-2.5 rounded-lg shadow-lg w-[15rem]">
                <div>
                    <div className="sn-list-box pt-2">
                        <span className="sn-list-box--header">
                            Account
                        </span>
                        <div className="sn-list-box--list">
                            <Link to="/company-information" className="sn-list-box-item--wrapper">
                                <MixerVerticalIcon className="sn-list-box-item--icon"/>
                                <span className="sn-list-box-item--content">Company Information</span>
                            </Link>
                            <Link to="/orders" className="sn-list-box-item--wrapper">
                                <ArchiveIcon className="sn-list-box-item--icon"/>
                                <span className="sn-list-box-item--content">Orders</span>
                            </Link>
                            <Link to="/wishlists" className="sn-list-box-item--wrapper">
                                <BookmarkIcon className="sn-list-box-item--icon"/>
                                <span className="sn-list-box-item--content">Wishlists</span>
                            </Link>
                            <Link to="/invoices" className="sn-list-box-item--wrapper">
                                <IdCardIcon className="sn-list-box-item--icon"/>
                                <span className="sn-list-box-item--content">Invoices</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-full pb-6 flex flex-col border-b">
                        <div className="flex flex-col">
                            <span className="sn-list-box--header">
                                Your Account Manager
                            </span>
                            <div className="flex flex-row items-center gap-x-4 py-2.5 px-4">
                                <img src={anthony} className="h-10 w-10 rounded-full"/>
                                <div className="flex flex-col gap-y-0.5">
                                    <div className="text-sm">Anthony Greenidge</div>
                                    <span className="text-xs text-green-600 flex items-center">
                                        <div className="h-1 w-1 rounded-full bg-green-600 mr-1.5 ml-0.5"/>
                                        Available
                                    </span>
                                </div>
                            </div>
                            {about.map(item => (
                                <div className="flex flex-row gap-x-2 items-center text-sm px-4 text-xs mt-1.5">
                                    <div>{item.icon}</div>
                                    <div>{item.content}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;