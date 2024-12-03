import Sidebar from '../../components/sidebar/sidebar.tsx';
import DetailSummary from './detail-summary.tsx';
import DetailItemsPending from './detail-items-pending.tsx';
import { NavigationBar } from '../../components/navigation-bar/navigation-bar.tsx';

function OrderDetailsPending() {
    return (
        <div>
            <div className="w-full">
                <NavigationBar />
            </div>
            <div className="flex justify-center max-w-[1440px] mx-auto px-4 pt-5">
                <Sidebar />
                <div className="grow">
                    <div className="px-8">
                        <div className="text-2xl font-medium pt-3">Order Details</div>
                    </div>
                    <div className="flex flex-row gap-x-5 px-8 pb-20 pt-8">
                        <div className="grow">
                            <DetailItemsPending />
                        </div>
                        <DetailSummary />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetailsPending;