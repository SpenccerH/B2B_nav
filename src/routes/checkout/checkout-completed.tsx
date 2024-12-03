import FooterBottom from "../../components/footer/footer-bottom";
import FooterTop from "../../components/footer/footer-top";
import { NavigationBar } from "../../components/navigation-bar/navigation-bar";
import { useEffect } from "react";
import CompletedItems from "./completed-items";
import CompletedSummary from "./completed-summary";

function CheckoutCompleted() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div>
            <div className="w-full">
                <NavigationBar />
            </div>


            <div className="max-w-[1440px] px justify-center mx-auto px-4 pb-20">
                <div className="pt-16">
                    <div className="flex flex-row gap-x-5">
                        <div className="flex flex-col gap-y-5 grow">
                            <CompletedItems />
                        </div>
                        <CompletedSummary />
                    </div>
                </div>
            </div>
            <div className="w-full">
                <FooterTop />
                <FooterBottom />
            </div>
        </div>
    )
}

export default CheckoutCompleted;