import { Link } from "react-router-dom";
import office from "../../../assets/office.png";
import working from "../../../assets/working.png";

const options = [
    { image: office, title: "Renting", body1: "Flexible Options.", body2: "Extensive Catalogue.", link: "/enterprise-solutions" },
    // { image: office, title: "Solutions", body1: "Simple Buying.", body2: "Reduce Costs.", link: "/enterprise-solutions" },
    { image: working, title: "Sourcing", body1: "Product Knowledge.", body2: "Technology Expertise.", link: "/procurement" },
]

function ServicesLanding() {
    return (
        <div className="max-w-[1024px] justify-center mx-auto px-4 text-black w-full">
            <div className="flex flex-col gap-y-2.5">
                <div className="text-2xl font-extrabold text-center pb-6">Our Business Services</div>
                <div className="text-lg text-center pb-6">We've made buying the technology you need for your business easier than ever.</div>
                <div className="columns-2">
                {/* <div className="columns-1"> */}
                    {options.map(item => (
                        <div className="flex flex-col border rounded-3xl text-center bg-tabs-gray">
                            <div className="w-full h-72 overflow-hidden rounded-t-3xl">
                                <img src={item.image} className="object-cover w-full h-full" />
                            </div>
                            <div className="flex flex-col gap-y-2 py-5">
                                <div className="text-lg font-bold">{item.title}</div>
                                <div className="flex flex-col gap-y-0.5">
                                    <div className="text-2xl font-bold">{item.body1}</div>
                                    <div className="text-2xl font-bold">{item.body2}</div>
                                </div>
                                <div className="mt-1.5 text-blue-600 text-center inline-block w-auto">
                                    <Link to={item.link} className="hover:underline">Learn More</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ServicesLanding;