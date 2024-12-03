import { useEffect } from 'react';
import Overview from './overview.tsx';
import TwoFactor from './two-factor.tsx';
import ChangePassword from './change-password.tsx';
import Sidebar from '../../components/sidebar/sidebar.tsx';
import { NavigationBar } from '../../components/navigation-bar/navigation-bar.tsx';

function Account() {

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
                        <div className="text-2xl font-medium pt-3">Account</div>
                    </div>
                    <div className="flex flex-row px-4 pt-8 gap-x-10">
                        <Overview />
                        <div className="flex flex-col gap-y-5 grow">
                            <TwoFactor />
                            <ChangePassword />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account;