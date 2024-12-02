import OrdersTable from './tables/orders-table.tsx';
import SidebarNav from '../../components/sidebar-nav/sidebar-nav.tsx';
import OrdersOverview from './orders-overview.tsx';
import OrdersTabs from '../../components/tab-navigation/orders-tabs.tsx';
import CompletedTable from './tables/completed-table.tsx';
import PendingTable from './tables/pending-table.tsx';
import CancelledTable from './tables/cancelled-table.tsx';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

const tabs = [
    { id: 1, title: 'All', content: <OrdersTable /> },
    { id: 2, title: 'Completed',  content: <CompletedTable /> },
    { id: 3, title: 'In Progress',  content: <PendingTable /> },
    { id: 4, title: 'Cancelled',  content: <CancelledTable /> },
]

function Orders() {
    return (
        <div className="flex">
            <SidebarNav />
            <div className="grow">
                <div className="px-8 pt-5">
                    <div className="text-2xl">Orders</div>
                </div>
                <div className="px-8 pt-8">
                    <OrdersOverview />
                </div>
                <div className="flex flex-col gap-y-4 px-8 pb-20">
                    <OrdersTabs tabs={tabs} />
                </div>
            </div>
        </div>
    )
}

export default Orders;