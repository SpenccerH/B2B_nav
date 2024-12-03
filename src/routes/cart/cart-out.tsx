import { Link } from "react-router-dom";
import FooterBottom from "../../components/footer/footer-bottom";
import FooterTop from "../../components/footer/footer-top";
import { NavigationBar } from "../../components/navigation-bar/navigation-bar";
import CartItems from "./cart-items";
import SavedItems from "./saved-items";
import { CaretRight } from "@phosphor-icons/react";
import { useEffect } from "react";
import CartSummaryOut from "./cart-summary-out";

function CartOut() {

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
                        <div>Shopping Cart</div>
                    </div>
                </div>
                <div className="pt-8">
                    <div className="flex flex-row gap-x-5">
                        <div className="flex flex-col grow">
                            <div className="pb-8">
                                <div className="text-2xl">Shopping Cart (3 Items)</div>
                            </div>
                            <CartItems />
                            <div className="pt-16 pb-8">
                                <div className="text-2xl">Saved for Later (1 Item)</div>
                            </div>
                            <SavedItems />
                        </div>
                        <CartSummaryOut />
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

export default CartOut;