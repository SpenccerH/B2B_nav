import { useEffect, useState } from "react";
import { NavigationBar } from "../../components/navigation-bar/navigation-bar";
import { CheckSquare, Square } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const basic = [
    { title: "Company Name" },
    // { title: "Name" },
    { title: "Email" },
    // { title: "Phone Number" },
]

const net = [
    { title: "Doing Business As (if any)" },
    { title: "Primary Business Address" },
    { title: "Request Credit Amount" },
]

function CorporateAccountApplication() {
    
    const [terms, setTerms] = useState(false);
    const [agree, setAgree] = useState(false);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div>
            <div className="w-full">
                <NavigationBar />
            </div>
            <div className="w-full max-w-96 mx-auto flex flex-col justify-center items-center">
                <div className="font-bold text-2xl mt-10 w-full text-left">Credit Card Account Application</div>
                <div className="flex flex-col mt-8">
                    {basic.map(item => (
                        <div>
                            {item.title !== "Name" ?
                                (<div className="flex flex-col mb-4">
                                    <label className="text-left mb-1 text-sm">{item.title}</label>
                                    <input type="text" name={item.title} className="text-sm w-96 bg-slate-white border border-slate-400 rounded py-2.5 px-3 focus:outline-none" />
                                </div>)
                                :
                                (<div className="flex flex-row justify-between max-w-120">
                                    <div className="flex flex-col mb-4">
                                        <label className="text-left mb-1 text-sm">First Name</label>
                                        <input type="text" name={item.title} className="text-sm w-58 bg-slate-white border border-slate-400 rounded py-2.5 px-3 focus:outline-none" />
                                    </div>
                                    <div className="flex flex-col mb-4">
                                        <label className="text-left mb-1 text-sm">Last Name</label>
                                        <input type="text" name={item.title} className="text-sm w-58 bg-slate-white border border-slate-400 rounded py-2.5 px-3 focus:outline-none" />
                                    </div>
                                </div>)
                            }
                        </div>
                    ))}
                </div>
                {/* {terms === false &&
                    <div className="flex flex-row text-sm mt-5 gap-x-2.5 items-center cursor-pointer w-full" onClick={() => {setTerms(true)}}>
                        <Square size={20} weight="light" className="shrink-0" />
                        <div>Apply for Net Terms</div>
                    </div>
                } */}
                {terms === true &&
                    <div className="flex flex-col">
                        <div className="flex flex-row text-sm mt-5 gap-x-2.5 items-center cursor-pointer w-full" onClick={() => {setTerms(false)}}>
                            <CheckSquare size={20} weight="light" className="shrink-0" />
                            <div>Apply for Net Terms</div>
                        </div>
                        {net.map(item => (
                            <div className="flex flex-col my-4">
                                <label className="text-left mb-1 text-sm">{item.title}</label>
                                {item.title !== "Request Credit Amount" ?
                                    (<input
                                        type="text"
                                        name={item.title}
                                        className="text-sm w-120 bg-slate-white border border-slate-400 rounded py-2.5 px-3 focus:outline-none"
                                    />)
                                    :
                                    (<input
                                        type="text"
                                        name={item.title}
                                        className="text-sm w-120 bg-slate-white border border-slate-400 rounded py-2.5 px-3 focus:outline-none"
                                        placeholder="$"
                                    />)
                                }
                            </div>
                        ))}
                        {agree === false &&
                            <div className="flex flex-row text-xs mt-5 gap-x-2.5 items-center cursor-pointer w-full" onClick={() => {setAgree(true)}}>
                                <Square size={20} weight="light" className="shrink-0" />
                                <div>I/We expressly consent to CANADA COMPUTERS obtaining any necessary reports containing business credit or relevant information to facilitate credit considerations with CANADA COMPUTERS. I/We declare that all information provided is true and accurate in every aspect. This declaration is made solely for the purpose of establishing credit arrangements with CANADA COMPUTERS and will remain confidential.</div>
                            </div>
                        }
                        {agree === true &&
                            <div className="flex flex-row text-xs mt-5 gap-x-2.5 items-center cursor-pointer w-full" onClick={() => {setAgree(false)}}>
                                <CheckSquare size={20} weight="light" className="shrink-0" />
                                <div>I/We expressly consent to CANADA COMPUTERS obtaining any necessary reports containing business credit or relevant information to facilitate credit considerations with CANADA COMPUTERS. I/We declare that all information provided is true and accurate in every aspect. This declaration is made solely for the purpose of establishing credit arrangements with CANADA COMPUTERS and will remain confidential.</div>
                            </div>
                        }
                    </div>
                }
                {/* <div className="text-sm mt-6">By submitting this application, I verify the information submitted on this application is accurate to the best of my knowledge.</div> */}
                <Link to="/shop" className="bg-oxford-blue hover:bg-blue-950 text-ghost-white py-2 text-sm rounded text-center w-full font-semibold text-lg mt-2.5">Submit Application</Link>
                <div className="text-sm mt-2.5 mb-20">By submitting this application, you acknowledge you have read and agree to the Terms of Use and Privacy Policy.</div>
            </div>
        </div>
    )
}

export default CorporateAccountApplication;