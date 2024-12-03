import { Link } from "react-router-dom";
import solutionsblue from "../../assets/solutionsblue.png";

function ForgotPassword() {
    return (
        <>
            <div className="bg-oxford-blue h-svh flex items-center justify-center">
                <div className="bg-ghost-white w-96 h-108 rounded">
                    <div className="flex flex-col items-center">
                        <img src={solutionsblue} className="bg-contain w-40 mt-8" />
                        <div className="font-bold text-xl mt-4">Forgot Password</div>
                        <div className="text-sm font-medium text-center px-10 mt-4">Enter the email address associated with your account and we'll send you password reset instructions.</div>
                        <div className="mt-5 w-full px-8">
                            <label className="text-left text-black font-medium mb-1">Email Address</label>
                            <input className="w-full bg-white text-black border border-black rounded py-1.5 px-2.5" />
                        </div>
                        <Link to={"/forgot-submission"} className="flex items-center justify-center bg-oxford-blue text-white rounded-sm font-medium text-center w-24 h-8 mt-8">
                            Submit
                        </Link>
                        <Link to={"/sign-in"} className="text-black underline text-sm mb-1 mt-4 ml-2">
                            Cancel
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ForgotPassword;