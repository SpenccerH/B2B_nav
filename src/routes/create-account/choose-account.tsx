import { Link } from "react-router-dom";
import { NavigationBar } from "../../components/navigation-bar/navigation-bar";

function ChooseAccount() {
    return (
        <>
            <div className="w-full">
                <NavigationBar />
            </div>
            <div className="flex flex-col gap-y-10 mt-24">
                <div className="flex flex-col gap-y-2.5">
                    <div className="text-center font-semibold text-2xl">Choose a Payment Method</div>
                    <div className="text-center text-lg">Select the account type that suits your business needs best.</div>
                </div>
                <div className="w-full mx-auto flex flex-row gap-x-10 justify-center items-center">
                    <Link to="/credit-card" className="place-content-center text-center bg-oxford-blue w-72 h-20 text-white text-lg font-medium rounded">Credit Card Account</Link>
                    <Link to="/net-terms" className="place-content-center text-center bg-oxford-blue w-72 h-20 text-white text-lg font-medium rounded">Net Credit Terms Account</Link>
                </div>
            </div>
        </>
    )
}

export default ChooseAccount;