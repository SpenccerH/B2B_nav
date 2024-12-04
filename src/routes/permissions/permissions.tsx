import { useEffect } from 'react';
import PermissionsTable from './permissions-table.tsx';
import { NavigationBar } from '../../components/navigation-bar/navigation-bar.tsx';
import Sidebar from '../../components/sidebar/sidebar.tsx';

function Permissions() {

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
                        <div className="text-2xl font-medium pt-3">Permissions</div>
                    </div>
                    <div className="px-8 pt-8 pb-20">
                        <PermissionsTable />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Permissions;