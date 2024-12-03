import { Link } from "react-router-dom";
import FooterBottom from "../../components/footer/footer-bottom";
import FooterTop from "../../components/footer/footer-top";
import { NavigationBar } from "../../components/navigation-bar/navigation-bar";
import { CaretRight } from "@phosphor-icons/react";
import { useEffect } from "react";
import ReviewSummary from "./review-summary";
import ReviewItems from "./review-items";
import ReviewProducts from "./review-products";

function CheckoutReview() {

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
                        <Link to="/checkout">Checkout</Link>
                        <CaretRight />
                        <div>Review</div>
                    </div>
                </div>
                <div className="pt-8">
                    <div className="flex flex-row gap-x-5">
                        <div className="flex flex-col gap-y-5 grow">
                            <ReviewItems />
                            <ReviewProducts />
                        </div>
                        <ReviewSummary />
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

export default CheckoutReview;