import { Link } from "react-router-dom";
import FooterBottom from "../../components/footer/footer-bottom";
import FooterTop from "../../components/footer/footer-top";
import { NavigationBar } from "../../components/navigation-bar/navigation-bar";
import { CaretRight } from "@phosphor-icons/react";
import CheckoutItems from "./checkout-items";
import CheckoutSummary from "./checkout-summary";
import { useEffect } from "react";

function Checkout() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div>
            <div className="w-full">
                <NavigationBar />
            </div>


            <div className="max-w-[1440px] px justify-center mx-auto px-4 pb-20">
                <div className="pt-8">
                    <div className="flex flex-row items-center gap-x-2.5">
                        <Link to="/landing-new">Home</Link>
                        <CaretRight />
                        <Link to="/cart">Shopping Cart</Link>
                        <CaretRight />
                        <div>Checkout</div>
                    </div>
                </div>
                <div className="pt-8">
                    <div className="flex flex-row gap-x-5">
                        <div className="flex flex-col grow">
                            <CheckoutItems />
                        </div>
                        <CheckoutSummary />
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

export default Checkout;