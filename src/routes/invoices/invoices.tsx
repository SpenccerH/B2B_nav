import SidebarNav from '../../components/sidebar-nav/sidebar-nav.tsx';
import { useEffect } from 'react';
import OutstandingTable from './tables/outstanding-table.tsx';
import Terms from './terms.tsx';
import AllTable from './tables/all-table.tsx';
import InvoicesTabs from '../../components/tab-navigation/invoices-tabs.tsx';

const tabs = [
    { id: 1, title: 'Outstanding', content: <OutstandingTable /> },
    { id: 2, title: 'All',  content: <AllTable /> },
]

function Invoices() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className="flex">
            <div className="">
                <SidebarNav />
            </div>
            <div className="grow">
                <div className="px-8 pt-5 pb-8">
                    <div className="text-2xl">Invoices</div>
                </div>
                <div className="px-8 pb-8">
                    <Terms />
                </div>
                <div className="flex flex-col gap-y-4 px-8 pb-20">
                    <InvoicesTabs tabs={tabs} />
                </div>
            </div>
        </div>
    )
}

export default Invoices;