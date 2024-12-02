import SidebarNav from '../../components/sidebar-nav/sidebar-nav.tsx';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { useEffect } from 'react';
import General from './general.tsx';
import Contacts from './contacts/contacts.tsx';
import Addresses from './addresses/addresses.tsx';
import NavigationTabs from '../../components/tab-navigation/navigation-tabs.tsx';
import Credit from './credit.tsx';
import Authorized from './authorized.tsx';

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
        <div className="flex">
            <SidebarNav />
            <div className="grow">
                <div className="px-8 pt-5">
                    <div className="text-2xl">Company Information</div>
                </div>
                <div className="px-8">
                    <NavigationTabs tabs={tabs} />
                </div>
            </div>
        </div>
    )
}

export default CompanyInformation;