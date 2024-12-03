import { useState } from "react";
import { Link } from "react-router-dom";
import solutionsblue from "../../assets/solutionsblue.png";
import { Eye, EyeSlash } from "@phosphor-icons/react";

function SignIn() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    return (
        <>
            <div className="bg-oxford-blue h-svh flex items-center justify-center">
                <div className="bg-ghost-white w-96 h-108 rounded">
                    <div className="flex flex-col items-center">
                        <img src={solutionsblue} className="bg-contain w-40 mt-8" />
                        <div className="font-bold text-xl mt-4">Sign In To Your Account</div>
                        <div className="mt-5 w-full px-8">
                            <label className="text-left text-black font-medium mb-1">Email Address</label>
                            <input className="w-full bg-white text-black border border-black rounded py-1.5 px-2.5" />
                        </div>
                        <div className="mt-4 w-full px-8">
                            <div className="flex flex-row justify-between">                                
                                <label className="text-black font-medium mb-1">Password</label>
                                <Link to={"/forgot-password"} className="text-black underline text-sm mb-1">
                                    Forgot Password
                                </Link>
                            </div>
                            <div className="relative">
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    className="w-full bg-white text-black border border-black rounded py-1.5 px-2.5" 
                                />
                                <button 
                                    type="button" 
                                    onClick={togglePasswordVisibility} 
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                                >
                                    {showPassword ? (
                                        <EyeSlash size={20} />
                                    ) : (
                                        <Eye size={20} />
                                    )}
                                </button>
                            </div>
                        </div>
                        <Link to={"/account"} className="flex items-center justify-center bg-oxford-blue text-white rounded-sm font-medium text-center w-24 h-8 mt-8">
                            Sign In
                        </Link>
                        <Link to={"/create-account"} className="text-black underline text-sm mb-1 mt-4">
                            Create an Account
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignIn;