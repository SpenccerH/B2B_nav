import { Eye, EyeSlash } from "@phosphor-icons/react";
import { useState } from "react";

const change = [
    { field: "Current Password" },
    { field: "New Password" },
    { field: "Confirm New Password" },
]

function ChangePassword() {

    const [showCurrent, setShowCurrent] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const toggleCurrentVisibility = () => {
        setShowCurrent(prevState => !prevState);
    };
    const toggleNewVisibility = () => {
        setShowNew(prevState => !prevState);
    };
    const toggleConfirmVisibility = () => {
        setShowConfirm(prevState => !prevState);
    };

    return (
        <div className="mb-20">
            <div className="border rounded-lg p-5">
                <div className="flex flex-col gap-y-1">
                    <div className="text-xl">Change Password</div>
                    <div className="columns-3 gap-x-5 mt-4">
                        {change.map(item => (
                            <div className="mb-5">
                                {item.field === "Current Password" &&
                                    <div className="mb-5">
                                        <label className="text-left text-black mb-1 text-sm">{item.field}</label>
                                        <div className="relative">
                                            <input type={showCurrent ? "text" : "password"} className="text-sm w-full bg-slate-white text-black border border-slate-400 rounded py-2 px-3 focus:outline-none" />
                                            <button 
                                                onClick={toggleCurrentVisibility}
                                                className="absolute right-2.5 top-1/2 transform -translate-y-1/2 mt-0.5"
                                            >
                                                {showCurrent ? (
                                                    <EyeSlash size={17} />
                                                ) : (
                                                    <Eye size={17} />
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                }
                                {item.field === "New Password" &&
                                    <div className="mb-5">
                                        <label className="text-left text-black mb-1 text-sm">{item.field}</label>
                                        <div className="relative">
                                            <input type={showNew ? "text" : "password"} className="text-sm w-full bg-slate-white text-black border border-slate-400 rounded py-2 px-3 focus:outline-none" />
                                            <button 
                                                onClick={toggleNewVisibility}
                                                className="absolute right-2.5 top-1/2 transform -translate-y-1/2 mt-0.5"
                                            >
                                                {showNew ? (
                                                    <EyeSlash size={17} />
                                                ) : (
                                                    <Eye size={17} />
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                }
                                {item.field === "Confirm New Password" &&
                                    <div className="mb-5">
                                        <label className="text-left text-black mb-1 text-sm">{item.field}</label>
                                        <div className="relative">
                                            <input type={showConfirm ? "text" : "password"}  className="text-sm w-full bg-slate-white text-black border border-slate-400 rounded py-2 px-3 focus:outline-none" />
                                            <button 
                                                onClick={toggleConfirmVisibility}
                                                className="absolute right-2.5 top-1/2 transform -translate-y-1/2 mt-0.5"
                                            >
                                                {showConfirm ? (
                                                    <EyeSlash size={17} />
                                                ) : (
                                                    <Eye size={17} />
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                }
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <button className="text-white bg-blue-700 hover:bg-blue-800 rounded-md text-center text-sm font-medium py-2 px-4">
                            Change Password
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword;