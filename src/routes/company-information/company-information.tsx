import { useEffect } from 'react';
import General from './general.tsx';
import Contacts from './contacts/contacts.tsx';
import Addresses from './addresses/addresses.tsx';
import NavigationTabs from '../../components/tab-navigation/navigation-tabs.tsx';
import Credit from './credit.tsx';
import Authorized from './authorized.tsx';
import { NavigationBar } from '../../components/navigation-bar/navigation-bar.tsx';
import Sidebar from '../../components/sidebar/sidebar.tsx';

const tabs = [
    { id: 1, title: 'General', content: <General /> },
    { id: 2, title: 'Users',  content: <Contacts /> },
    { id: 3, title: 'Shipping Addresses',  content: <Addresses /> },
    { id: 4, title: 'Credit Cards',  content: <Credit /> },
    { id: 5, title: 'Authorized Pickup List',  content: <Authorized /> },
]

function CompanyInformation() {

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
                        <div className="text-2xl font-medium pt-3">Company Information</div>
                    </div>
                    <div className="pl-8">
                        <NavigationTabs tabs={tabs} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyInformation;