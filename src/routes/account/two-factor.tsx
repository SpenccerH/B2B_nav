import { useState } from "react";

function TwoFactor() {

    const [emailVerification, setEmailVerification] = useState('email-no');
    const [phoneVerification, setPhoneVerification] = useState('phone-no');

    const [emailConfirmation, setEmailConfirmation] = useState('email-unconfirmed');
    const [phoneConfirmation, setPhoneConfirmation] = useState('phone-unconfirmed');
    
    const [twoSelect, setTwoSelect] = useState("");

    const handleSelectChange = (event) => {
        setTwoSelect(event.target.value);
    };

    return (
        <div className="">
            <div className="border rounded-lg p-5">
                <div className="flex flex-col gap-y-0">
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-col gap-y-1">
                            <div className="text-lg">Two-Factor Authentication</div>
                            <div className="text-sm text-slate-600">Enable two-factor authentication for extra security.</div>
                        </div>
                        <select className="text-sm border border-slate-400 rounded h-10 py-2.5 pl-2.5 pr-12 focus:outline-none" value={twoSelect} onChange={handleSelectChange}>
                            <option value="" disabled selected>Please Select</option>
                            <option value="email">Email</option>
                            <option value="phone">Phone</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-y-1 mt-5">
                        {twoSelect === "email" && emailVerification === 'email-no' && (
                            <div>
                                <label className="text-left text-black text-sm text-sm">Email</label>
                                <div className="flex flex-row items-center gap-x-2.5">
                                    <input className="text-sm text-black border border-slate-400 rounded py-2 px-3 focus:outline-none grow" placeholder="xxxxxxxxxx@gmail.com" />
                                    <button className="text-white bg-blue-700 hover:bg-blue-800 rounded-md text-center text-sm font-medium py-2 px-4" onClick={() => setEmailVerification('email-yes')}>Send Authentication Code</button>
                                </div>
                            </div>
                        )}
                        {twoSelect === "email" && emailVerification === 'email-yes' && (
                            <div>
                                <label className="text-left text-black text-sm text-sm">Email</label>
                                <div className="flex flex-row items-center gap-x-2.5">
                                    <input className="text-sm text-black border border-slate-400 rounded py-2 px-3 focus:outline-none grow" placeholder="wile.e.coyote@cc.ca" />
                                    <button className="text-white bg-blue-700 hover:bg-blue-800 rounded-md text-center text-sm font-medium py-2 px-4">Send Authentication Code</button>
                                </div>
                                <div className="text-sm text-slate-600 py-1">An authentication code has been sent to xxxxxxxxxxx@cc.ca and will expire in 5 minutes. Verify the code sent to your email.</div>
                                <div className="flex flex-row items-center gap-x-2.5 mt-1">
                                    <input className="text-sm text-black border border-slate-400 rounded py-2 px-3 focus:outline-none" placeholder="XXXXXX" />
                                    <button className="text-white bg-blue-700 hover:bg-blue-800 rounded-md text-center text-sm font-medium py-2 px-4" onClick={() => {setEmailVerification(''); setEmailConfirmation('email-confirmed');}}>Verify</button>
                                </div>
                            </div>
                        )}
                        {twoSelect === "email" && emailConfirmation === 'email-confirmed' && (
                            <div className="flex flex-col gap-y-1">
                                <label className="text-left text-black text-sm text-sm">Email (Two-Factor Authentication Enabled)</label>
                                <div className="text-sm w-full bg-tabs-gray text-black border border-slate-400 rounded py-2 px-3 focus:outline-none cursor-default text-slate-500">wile.e.coyote@cc.ca</div>
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col gap-y-1">
                        {twoSelect === "phone" && phoneVerification === 'phone-no' && (
                            <div>
                                <label className="text-left text-black text-sm text-sm">Phone</label>
                                <div className="flex flex-row items-center gap-x-2.5">
                                    <input className="text-sm text-black border border-slate-400 rounded py-2 px-3 focus:outline-none grow" placeholder="(000) 000-0000" />
                                    <button className="text-white bg-blue-700 hover:bg-blue-800 rounded-md text-center text-sm font-medium py-2 px-4" onClick={() => setPhoneVerification('phone-yes')}>Send Authentication Code</button>
                                </div>
                            </div>
                        )}
                        {twoSelect === "phone" && phoneVerification === 'phone-yes' && (
                            <div>
                                <label className="text-left text-black text-sm text-sm">Phone</label>
                                <div className="flex flex-row items-center gap-x-2.5">
                                    <input className="text-sm text-black border border-slate-400 rounded py-2 px-3 focus:outline-none grow" placeholder="(000) 000-0000" />
                                    <button className="text-white bg-blue-700 hover:bg-blue-800 rounded-md text-center text-sm font-medium py-2 px-4">Send Authentication Code</button>
                                </div>
                                <div className="text-sm text-slate-600 py-1">An authentication code has been sent to (XXX) XXX-XXXX and will expire in 5 minutes. Verify the code sent to your phone.</div>
                                <div className="flex flex-row items-center gap-x-2.5 mt-1">
                                    <input className="text-sm text-black border border-slate-400 rounded py-2 px-3 focus:outline-none" placeholder="XXXXXX" />
                                    <button className="text-white bg-blue-700 hover:bg-blue-800 rounded-md text-center text-sm font-medium py-2 px-4" onClick={() => {setPhoneVerification(''); setPhoneConfirmation('phone-confirmed');}}>Verify</button>
                                </div>
                            </div>
                        )}
                        {twoSelect === "phone" && phoneConfirmation === 'phone-confirmed' && (
                            <div className="flex flex-col gap-y-1">
                                <label className="text-left text-black text-sm text-sm">Phone (Two-Factor Authentication Enabled)</label>
                                <div className="text-sm w-full bg-tabs-gray text-black border border-slate-400 rounded py-2 px-3 focus:outline-none cursor-default text-slate-500">(647) 412-0786</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TwoFactor;