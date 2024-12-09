"use client";

import { CaretDown, CaretUp, ShoppingCart, Storefront, User } from '@phosphor-icons/react/dist/ssr';
import './navigation-bar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ccfull from "../../assets/ccfull.png";
import { MagnifyingGlass, SignOut } from '@phosphor-icons/react';

const shopProductItems = [
    {id: 1, title: 'Cables & Adapters'},
    {id: 2, title: 'Cell Phones & Accessories'},
    {id: 3, title: 'Laptops, Tablets & Accessories'},
    {id: 4, title: 'Desktop Computers & Servers'},
    {id: 5, title: 'PC & Server Components'},
    {id: 6, title: 'Computer Peripherals'},
    {id: 8, title: 'Home Electronics'},
    {id: 9, title: 'Cameras and Drones'},
    {id: 10, title: 'Furniture and Home Products'},
    {id: 11, title: 'See More Categories'},
]

const dealsItems = [
    {id: 1, title: 'Promotion Flyer'},
    {id: 2, title: 'New Arrivals'},
    {id: 3, title: 'Bundle & Save'},
    {id: 4, title: 'Open Box Products'},
    {id: 5, title: 'Clearance'},
]

const productFindersItems = [
    {id: 1, title: 'Cable Finder'},
    {id: 2, title: 'Router Finder'},
]

const cables = [
    {id: 1, title: 'Power Cables & Adapters'},
    {id: 2, title: 'Data Cables & Adapters'},
    {id: 3, title: 'USB / Lightning Cables'},
    {id: 4, title: 'Networking Cables & Adapters'},
    {id: 5, title: 'DisplayPort / Mini DisplayPort Cables & Adapters'},
    {id: 6, title: 'HDMI Cables'},
    {id: 7, title: 'Video Cables & ADapters'},
    {id: 8, title: 'Audio Cables & Adapters'},
    {id: 9, title: 'Pro Audio Cables & Plugs'},
    {id: 10, title: 'Audio Video Distribution'},
    {id: 11, title: 'Networking Installation Accessories'},
    {id: 12, title: 'Wall Plates & Keystones'},
    {id: 13, title: 'Tools & Testers'},
    {id: 14, title: 'Cables Management'},
]

const power = [
    {id: 1, title: 'PC Internal Power Cables'},
    {id: 2, title: 'PC External Power Cables'},
    {id: 3, title: 'Power Plug Adapters'},
]

export function NavigationBar() {

    const [shopProducts, setShopProducts] = useState(false);
    const [deals, setDeals] = useState(false);
    const [productFinders, setProductFinders] = useState(false);
    const [showCables, setShowCables] = useState(false);
    const [showPower, setShowPower] = useState(false);
    const [account, setAccount] = useState(false);
    const [isAccountVisible, setAccountVisible] = useState(false);

    return (
        <div className="bg-oxford-blue h-28 z-10 w-full" onClick={() => setAccountVisible(false)}>
            <div className="max-w-[1440px] justify-center mx-auto px-4 pt-5">
                <div className="flex flex-row justify-between items-center text-white gap-x-10">
                    <Link to="/">
                        <img src={ccfull} className="h-8" />
                    </Link>
                    <div className="flex flex-row items-center bg-white grow">
                        <input type="text" placeholder="Search..." className="text-sm text-black focus:outline-none grow px-3 py-1.5" />
                        <div className="px-2 bg-white cursor-pointer">
                            <MagnifyingGlass size={18} weight="bold" color="000000" />
                        </div>
                    </div>
                    
                    <div className="flex flex-row justify-between items-center text-white">
                        <div className="flex flex-row items-center gap-x-2.5 font-semibold hover:bg-blue-900 rounded-full cursor-pointer px-5 py-0.5">
                            <div className="text-sm">Français</div>
                        </div>
                        <div className="flex flex-row items-center gap-x-2.5 font-semibold hover:bg-blue-900 rounded-full cursor-pointer px-5 py-0.5">
                            <Storefront size={18} weight="bold" />
                            <div className="text-sm">Store</div>
                        </div>
                        {!account &&
                            <div className="flex flex-row justify-between items-center text-white">
                                <div className="flex flex-row items-center gap-x-2.5 font-semibold hover:bg-blue-900 rounded-full cursor-pointer px-5 py-0.5" onClick={() => setAccount(true)}>
                                    <User size={18} weight="fill" />
                                    <div className="text-sm">Sign In</div>
                                </div>
                                <Link to="/cart-out" className="flex flex-row items-center gap-x-2.5 font-semibold hover:bg-blue-900 rounded-full cursor-pointer px-5 py-0.5">
                                    <ShoppingCart size={18} weight="fill" />
                                    <div className="text-sm">Cart (0)</div>
                                </Link>
                            </div>
                        }
                        {account &&
                            <div className="flex flex-row justify-between items-center text-white">
                                <div onMouseEnter={() => setAccountVisible(true)}>
                                    <Link to="/account" className="flex flex-row items-center gap-x-2.5 font-semibold hover:bg-blue-900 rounded-full cursor-pointer px-5 py-0.5" onClick={() => setAccount(true)}>
                                        <User size={18} weight="fill" />
                                        <div className="text-sm">Wile E.</div>
                                    </Link>
                                </div>
                                {isAccountVisible && (
                                    <div className="absolute w-32 top-12 rounded-lg bg-white z-50 flex flex-col text-oxford-blue mt-2 ml-0.5 border" onMouseLeave={() => setAccountVisible(false)}>
                                        <Link to="/account" className="flex flex-row items-center gap-x-2.5 rounded-t-lg flex flex-row items-center gap-y-0.5 px-4 py-2.5 hover:bg-tabs-gray border-b">
                                            <User size={16} />
                                            <div className="text-sm font-medium">Account</div>
                                        </Link>
                                        <Link to="/sign-in" className="flex flex-row items-center gap-x-2.5 rounded-b-lg flex flex-row items-center gap-y-0.5 px-4 py-2.5 hover:bg-tabs-gray">
                                            <SignOut size={16} />
                                            <div className="text-sm font-medium">Sign Out</div>
                                        </Link>
                                    </div>
                                )}
                                <Link to="/cart" className="flex flex-row items-center gap-x-2.5 font-semibold hover:bg-blue-900 rounded-full cursor-pointer px-5 py-0.5">
                                    <ShoppingCart size={18} weight="fill" />
                                    <div className="text-sm">Cart (3)</div>
                                </Link>
                            </div>
                        }
                    </div>
                </div>
                <div className="flex flex-row gap-x-10 items-center text-white">
                    <div className="dropdown text-sm"
                        onMouseEnter={() => setShopProducts(true)}
                        onMouseLeave={() => setShopProducts(false)}>
                        <div className="font-bold">Shop Products</div>
                        {shopProducts ? <CaretUp weight="fill" /> : <CaretDown weight="fill" />}
                        {shopProducts && (
                            <div className="dropdownContent">
                                {shopProductItems.map(item => (
                                    <div key={item.id} className="dropdownItem text-xs"
                                        onMouseEnter={() => item.title === "Cables & Adapters" && setShowCables(true)}
                                        onMouseLeave={() => item.title === "Cables & Adapters" && setShowCables(false)}>
                                        {item.title}
                                        {item.title === "Cables & Adapters" && showCables && (
                                            <div className="dropdownSecond">
                                                {cables.map(itemTwo => (
                                                    <div key={itemTwo.id} className="dropdownItem text-xs"
                                                        onMouseEnter={() => itemTwo.title === "Power Cables & Adapters" && setShowPower(true)}
                                                        onMouseLeave={() => itemTwo.title === "Power Cables & Adapters" && setShowPower(false)}>
                                                        {itemTwo.title}
                                                        {itemTwo.title === "Power Cables & Adapters" && showPower && (
                                                            <div className="dropdownThird">
                                                                {power.map(itemThree => (
                                                                    <div key={itemThree.id} className="dropdownItem text-xs">
                                                                        {itemThree.title}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="dropdown text-sm font-bold">Shop Brands</div>
                    <div className="dropdown text-sm"
                        onMouseEnter={() => setDeals(true)}
                        onMouseLeave={() => setDeals(false)}>
                        <div className="font-bold">Deals</div>
                        {deals ? <CaretUp weight="fill" /> : <CaretDown weight="fill" />}
                        {deals && (
                            <div className="dropdownContent">
                                {dealsItems.map(item => (
                                    <div key={item.id} className="dropdownItem text-xs">
                                        {item.title}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="dropdown text-sm font-bold">Services</div>
                    <div className="dropdown text-sm font-bold">For Business</div>
                    <div className="dropdown text-sm"
                        onMouseEnter={() => setProductFinders(true)}
                        onMouseLeave={() => setProductFinders(false)}>
                        <div className="font-bold">Product Finders</div>
                        {productFinders ? <CaretUp weight="fill" /> : <CaretDown weight="fill" />}
                        {productFinders && (
                            <div className="dropdownContent">
                                {productFindersItems.map(item => (
                                    <div key={item.id} className="dropdownItem text-xs">
                                        {item.title}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}