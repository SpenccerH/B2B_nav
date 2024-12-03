import { useEffect } from "react";
import Actions from "./actions.tsx";
import { Link } from "react-router-dom";
import ListItems from "./list-items.tsx";
import Sidebar from "../../components/sidebar/sidebar.tsx";
import { NavigationBar } from "../../components/navigation-bar/navigation-bar.tsx";

function Wishlist() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    
    return (
        <div>
            <div className="w-full">
                <NavigationBar />
            </div>
            <div className="flex justify-center max-w-[1440px] mx-auto px-4 pt-5">
                <Sidebar />
                <div className="grow pb-20">
                    <div className="px-8">
                        <div className="text-2xl font-medium pt-3">Wile's List 1</div>
                    </div>
                    <div className="flex flex-col gap-y-8 px-8 pt-8">
                        <ListItems />
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-row items-center">
                                <div className="font-semibold">Apply to Selected Items:</div>
                                <Actions />
                            </div>
                            <Link to="/cart" className="text-white bg-blue-700 hover:bg-blue-800 rounded-md text-center text-sm font-medium py-1.5 px-4">Add List to Cart</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Wishlist;
