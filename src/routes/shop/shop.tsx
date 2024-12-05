import { useEffect } from "react";
import { NavigationBar } from "../../components/navigation-bar/navigation-bar";
import FooterTop from "../../components/footer/footer-top";
import FooterBottom from "../../components/footer/footer-bottom";
import BannerShop from "./sections/banner-shop";
import CategoriesShop from "./sections/categories-shop";
import BrandsShop from "./sections/brands-shop";
import DealsShop from "./sections/deals-shop";
import CarouselShop from "./sections/carousel-shop";
import DoorcrasherShop from "./sections/doorcrasher-shop";

function Shop() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div>
            <div className="w-full">
                <NavigationBar />
            </div>


            <div className="">
                <div className="flex flex-col gap-y-10">
                    <BannerShop />
                    <DoorcrasherShop />
                    <CarouselShop />
                    <DealsShop />
                    <CategoriesShop />
                    <BrandsShop />
                    <div>
                        <FooterTop />
                        <FooterBottom />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop;