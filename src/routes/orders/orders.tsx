import OrdersTable from './tables/orders-table.tsx';
import OrdersOverview from './orders-overview.tsx';
import OrdersTabs from '../../components/tab-navigation/orders-tabs.tsx';
import CompletedTable from './tables/completed-table.tsx';
import PendingTable from './tables/pending-table.tsx';
import CancelledTable from './tables/cancelled-table.tsx';
import Sidebar from '../../components/sidebar/sidebar.tsx';
import { NavigationBar } from '../../components/navigation-bar/navigation-bar.tsx';

const tabs = [
    { id: 1, title: 'All', content: <OrdersTable /> },
    { id: 2, title: 'Completed',  content: <CompletedTable /> },
    { id: 3, title: 'In Progress',  content: <PendingTable /> },
    { id: 4, title: 'Cancelled',  content: <CancelledTable /> },
]

function Orders() {
    return (
        <div>
            <div className="w-full">
                <NavigationBar />
            </div>
            <div className="flex justify-center max-w-[1440px] mx-auto px-4 pt-5">
                <Sidebar />
                <div className="grow">
                    <div className="px-8">
                        <div className="text-2xl font-medium pt-3">Orders</div>
                    </div>
                    <div className="pl-8 pt-8">
                        <OrdersOverview />
                    </div>
                    <div className="pl-8 pb-20">
                        <OrdersTabs tabs={tabs} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders;