import { useEffect } from 'react';
import OutstandingTable from './tables/outstanding-table.tsx';
import Terms from './terms.tsx';
import AllTable from './tables/all-table.tsx';
import InvoicesTabs from '../../components/tab-navigation/invoices-tabs.tsx';
import { NavigationBar } from '../../components/navigation-bar/navigation-bar.tsx';
import Sidebar from '../../components/sidebar/sidebar.tsx';

const tabs = [
    { id: 1, title: 'Outstanding', content: <OutstandingTable /> },
    { id: 2, title: 'All',  content: <AllTable /> },
]

function Invoices() {

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
                        <div className="text-2xl font-medium pt-3">Invoices</div>
                    </div>
                    <div className="pl-8 py-8">
                        <Terms />
                    </div>
                    <div className="flex flex-col gap-y-4 pl-8 pb-20">
                        <InvoicesTabs tabs={tabs} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Invoices;