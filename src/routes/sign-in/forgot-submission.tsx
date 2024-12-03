import { useState } from "react";
import { Link } from "react-router-dom";
import solutionsblue from "../../assets/solutionsblue.png";
import { CaretLeft } from "@phosphor-icons/react";

function ForgotSubmission() {
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
                        <div className="font-bold text-xl mt-4">Reset Your Password</div>
                        <div className="text-sm font-medium text-center px-10 mt-4">An email has been sent to your inbox. Please follow the instructions provided to reset your password.</div>
                        <button className="flex items-center justify-center bg-oxford-blue text-white rounded-sm font-medium text-center w-36 h-10 mt-8">
                            Resend Email
                        </button>
                        <div className="text-sm font-medium text-center px-10 mt-8">If you need further help, contact support.</div>
                        <Link to={"/sign-in"} className="text-black underline text-sm mb-1 mt-4 ml-2">
                            Return to Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ForgotSubmission;