import Recent from "./recent.tsx";
import { useEffect } from "react";
import ListsOverview from "./lists-overview.tsx";
import Set from "./set.tsx";
import { NavigationBar } from "../../components/navigation-bar/navigation-bar.tsx";
import Sidebar from "../../components/sidebar/sidebar.tsx";

function Wishlists() {

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
                <div className="grow">
                    <div className="px-8">
                        <div className="text-2xl font-medium pt-3">Wishlists</div>
                    </div>
                    <div className="flex flex-row gap-x-5 pl-8 pt-8 pb-20">
                        <div className="flex flex-col border-t pt-8 gap-y-16 grow rounded-sm">
                            <Set />
                            <Recent />
                        </div>
                        <ListsOverview />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Wishlists;
