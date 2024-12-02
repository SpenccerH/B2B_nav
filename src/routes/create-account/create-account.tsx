import { useState, useEffect, useRef } from "react";
import { CheckSquare, Square } from "@phosphor-icons/react";
import { NavigationBar } from "../../components/navigation-bar/navigation-bar";

const basic1 = [
    { title: "Company Name", required: true },
    { title: "Primary Business Address", required: true },
    { title: "Doing Business As (Optional)", required: false },
    { title: "City", required: true },
    { title: "Type of Company", required: true },
    { title: "Province", required: true },
    { title: "Business Since", required: true },
    { title: "Postal Code", required: true },
]

const basic2 = [
    { title: "Phone Number", required: true },
    { title: "Company Website", required: false },
]

const primary = [
    { title: "Name", required: true },
    { title: "Position", required: true },
    { title: "Phone Number", required: true },
    { title: "Business Email", required: true },
]

const account = [
    { title: "Name", required: true },
    { title: "Position", required: true },
    { title: "Phone Number", required: true },
    { title: "Business Email", required: true },
]

const agreement = [
    { title: "I/We expressly consent to CANADA COMPUTERS obtaining any necessary reports containing business credit or relevant information to facilitate credit considerations with CANADA COMPUTERS. I/We declare that all information provided is true and accurate in every aspect. This declaration is made solely for the purpose of establishing credit arrangements with CANADA COMPUTERS and will remain confidential." }
]

function CreateAccount({ referral=[
    { name: ""  },
] })  {

    const topRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const [websiteAvailable, setWebsiteAvailable] = useState('website-yes');
    const [sameContact, setSameContact] = useState('same-no');
    const [termsAgree, setTermsAgree] = useState('terms-no');

    // States to track the validation status of fields
    const [invalidFields, setInvalidFields] = useState({
        basic1: [],
        basic2: [],
        primary: [],
        account: [],
        agreement: [],
    });

    // Hold values in primary contact
    const [primaryContactValues, setPrimaryContactValues] = useState(
        primary.reduce((acc, item) => {
            acc[item.title] = ''; // Initialize w empty string
            return acc;
        }, {})
    );

    // Handle changes in accounts payable contact
    const handlePrimaryContactChange = (e, field) => {
        const newValues = { ...primaryContactValues, [field]: e.target.value };
        setPrimaryContactValues(newValues);
    };

    const validateForm = () => {
        let isValid = true;
        const newInvalidFields = {
            basic1: [],
            basic2: [],
            primary: [],
            account: [],
            agreement: [],
        };

        // Check all basic1 fields
        for (const field of basic1) {
            const value = document.querySelector(`input[name="${field.title}"], select[name="${field.title}"]`)?.value;
            if (field.required && !value) {
                isValid = false;
                newInvalidFields.basic1.push(field.title);
            }
        }

        // Check all basic2 fields
        for (const field of basic2) {
            const value = document.querySelector(`input[name="${field.title}"], select[name="${field.title}"]`)?.value;
            if (field.required && !value) {
                isValid = false;
                newInvalidFields.basic2.push(field.title);
            }
            if(field.title === "Company Website" && !value && websiteAvailable === 'website-yes') {
                isValid = false;
                newInvalidFields.basic2.push(field.title);
            }
            if(field.title === "Company Website" && !(value.includes(".")) && websiteAvailable === 'website-yes') {
                isValid = false;
                newInvalidFields.basic2.push(field.title);
            }
        }

        // Check all primary contact fields
        for (const field of primary) {
            if (primaryContactValues[field.title] === '') {
                isValid = false;
                newInvalidFields.primary.push(field.title);
            }
        }

        // Check all accounts payable contact fields
        if(sameContact === 'same-no') {
            for (const field of account) {
                const value = document.querySelector(`input[name="${field.title}"], select[name="${field.title}"]`)?.value;
                if (field.required && !value) {
                    isValid = false;
                    newInvalidFields.account.push(field.title);
                }
            }
        }

        // Check for only if there is a requested limit has been entered
        for (const field of agreement) {
            const value = document.querySelector(`input[name="${field.title}"], select[name="${field.title}"]`)?.value;
            if (value && termsAgree === 'terms-no') {
                isValid = false;
                newInvalidFields.agreement.push(field.title);
            }
        }

        setInvalidFields(newInvalidFields);

        return isValid;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            alert("Your application has been submitted and will be reviewed within 1-2 business days. You will be contacted by email once your account has been approved.");
        }
    };

    // Helper function to check if a field is invalid
    const getInputClassName = (field, section) => {
        const invalid = invalidFields[section].includes(field);
        return invalid ? "text-sm w-full bg-red-100 border border-red-500 rounded py-2.5 px-3 mt-1.5 focus:outline-none" : "text-sm w-full bg-slate-white border border-slate-400 rounded py-2.5 px-3 mt-1.5 focus:outline-none";
    };

    return (
        <div>
            <div className="w-full" ref={topRef}>
                <NavigationBar />
            </div>
            <div className="bg-white text-black text-sm">
                <div className="w-full max-w-[1440px] px-4 mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <div className="flex flex-row justify-between mt-10">
                                <div className="font-bold text-2xl">Corporate Account Application</div>
                                {referral.map(item => (
                                    <div>
                                        <div>{item.name}</div>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="mt-4">To help Canada Computers serve you as a corporate customer, please fill out the form below.</div>
                            <div className="font-semibold text-xl mt-8 mb-2">Basic Information</div>
                            <div className="columns-4 gap-8">
                                {basic1.map(item => (
                                    <div className="mb-5" key={item.title}>
                                        <label className="text-left mb-1 text-sm">{item.title}</label>
                                        {item.title === "Type of Company" &&
                                            <div className="relative w-full">
                                                <select className={getInputClassName(item.title, 'basic1')} name={item.title}>
                                                    <option value="" disabled selected>Please Select</option>
                                                    <option>Corporate</option>
                                                    <option>Reseller</option>
                                                    <option>Government</option>
                                                </select>
                                            </div>
                                        }
                                        {item.title === "Province" &&
                                            <div className="relative w-full">
                                                <select className={getInputClassName(item.title, 'basic1')} name={item.title}>
                                                    <option value="" disabled selected>Please Select</option>
                                                    <option>Alberta</option>
                                                    <option>British Columbia</option>
                                                    <option>Manitoba</option>
                                                    <option>New Brunswick</option>
                                                    <option>Newfoundland and Labrador</option>
                                                    <option>Northwest Territories</option>
                                                    <option>Nova Scotia</option>
                                                    <option>Nunavut</option>
                                                    <option>Ontario</option>
                                                    <option>Prince Edward Island</option>
                                                    <option>Quebec</option>
                                                    <option>Saskatchewan</option>
                                                    <option>Yukon</option>
                                                </select>
                                            </div>
                                        }
                                        {item.title !== "Type of Company" && item.title !== "Province" &&
                                            <input
                                                type="text"
                                                name={item.title}
                                                className={getInputClassName(item.title, 'basic1')}
                                            />
                                        }
                                    </div>
                                ))}
                            </div>

                            <div className="columns-4 gap-8">
                                {basic2.map(item => (
                                    <div key={item.title}>
                                        <label className="text-left mb-1 text-sm">{item.title}</label>
                                        {item.title === "Company Website" && websiteAvailable === 'website-yes' &&
                                            <div>
                                                <div className="relative cursor-pointer" onClick={() => {setWebsiteAvailable('website-no')}}>
                                                    <div className="flex flex-row gap-x-2 absolute items-center right-0 bottom-0">
                                                        <Square size={20} weight="light" />
                                                        <div className="text-sm">Not Available</div>
                                                    </div>
                                                </div>
                                                <input type="text" name={item.title} className={getInputClassName(item.title, 'basic2')} />
                                            </div>
                                        }
                                        {item.title === "Company Website" && websiteAvailable === 'website-no' &&
                                            <div>
                                                <div className="relative cursor-pointer" onClick={() => {setWebsiteAvailable('website-yes')}}>
                                                    <div className="flex flex-row gap-x-2 absolute items-center right-0 bottom-0">
                                                        <CheckSquare size={20} weight="light" />
                                                        <div className="text-sm">Not Available</div>
                                                    </div>
                                                </div>
                                                <input type="text" name={item.title} className="text-sm w-full bg-slate-100 border border-slate-400 rounded py-2.5 px-3 mt-1.5 focus:outline-none cursor-default" />
                                            </div>
                                        }
                                        {item.title !== "Company Website" &&
                                            <input
                                                type="text"
                                                name={item.title}
                                                className={getInputClassName(item.title, 'basic2')}
                                            />
                                        }
                                    </div>
                                ))}
                            </div>

                            <div className="font-semibold text-xl mt-8 py-2">Primary Contact</div>
                            <div className="columns-4 gap-8">
                                {primary.map(item => (
                                    <div key={item.title}>
                                        <label className="text-left mb-1 text-sm">{item.title}</label>
                                        <input
                                            type="text"
                                            value={primaryContactValues[item.title]}
                                            onChange={(e) => handlePrimaryContactChange(e, item.title)}
                                            className={getInputClassName(item.title, 'primary')}
                                        />
                                    </div>
                                ))}
                            </div>

                            {sameContact === 'same-no' &&
                                <div>
                                    <div className="font-semibold text-xl mt-8 py-2 flex flex-row justify-between">
                                        <div>Accounts Payable Contact</div>
                                        <div className="flex flex-row gap-x-2 items-center cursor-pointer" onClick={() => {setSameContact('same-yes')}}>
                                            <Square size={20} weight="light" />
                                            <div className="text-sm font-normal">Same as Primary Contact</div>
                                        </div>
                                    </div>
                                    <div className="columns-4 gap-8">
                                        {account.map(item => (
                                            <div key={item.title} className="mb-5">
                                                <label className="text-left mb-1 text-sm">{item.title}</label>
                                                <input
                                                    type="text"
                                                    name={item.title}
                                                    className={getInputClassName(item.title, 'account')}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            }

                            {sameContact === 'same-yes' &&
                                <div>
                                    <div className="font-semibold text-xl mt-8 py-2 flex flex-row justify-between">
                                        <div>Accounts Payable Contact</div>
                                        <div className="flex flex-row gap-x-2 items-center cursor-pointer" onClick={() => {setSameContact('same-no')}}>
                                            <CheckSquare size={20} weight="light" />
                                            <div className="text-sm font-normal">Same as Primary Contact</div>
                                        </div>
                                    </div>
                                    <div className="columns-4 gap-8">
                                        {primary.map(item => (
                                            <div key={item.title} className="mb-5">
                                                <label className="text-left mb-1 text-sm">{item.title}</label>
                                                <input
                                                    type="text"
                                                    value={primaryContactValues[item.title]} // Mirror values from primary contact
                                                    onChange={(e) => handlePrimaryContactChange(e, item.title)} // Updates to both
                                                    className="text-sm w-full bg-slate-100 border border-slate-400 rounded py-2.5 px-3 mt-1.5 focus:outline-none cursor-default"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            }
                            
                            {termsAgree === 'terms-no' &&
                                <div>
                                    <div className="font-bold text-xl mt-5 py-2">Apply for Net Terms (Optional)</div>
                                        {agreement.map(item => (
                                            <div>
                                                <div className="columns-4 gap-8">
                                                    <label className="text-left mb-1 text-sm">Request Credit Amount</label>
                                                    <input
                                                        type="text"
                                                        name={item.title}
                                                        placeholder="$"
                                                        className={getInputClassName(item.title, 'agreement')}
                                                    />
                                                </div>
                                                <div className="flex flex-row text-sm mt-5 gap-x-2.5 items-center cursor-pointer" onClick={() => {setTermsAgree('terms-yes')}}>
                                                    <Square size={20} weight="light" className="shrink-0" />
                                                    <div>{item.title}</div>
                                                </div>
                                            </div>
                                        ))}
                                    <div className="text-sm mt-2.5">Please be advised that, in certain circumstances, we may reach out for additional information or connect you with one of our sales representatives.</div>
                                </div>
                            }

                            {termsAgree === 'terms-yes' &&
                                <div>
                                    <div className="font-bold text-xl mt-5 py-2">Apply for Net Terms (Optional)</div>
                                        {agreement.map(item => (
                                            <div>
                                                <div className="columns-4 gap-8">
                                                    <label className="text-left mb-1 text-sm">Request Credit Amount</label>
                                                    <input
                                                        type="text"
                                                        name={item.title}
                                                        placeholder="$"
                                                        className="text-sm w-full bg-slate-white border border-slate-400 rounded py-2.5 px-3 mt-1.5 focus:outline-none"
                                                    />
                                                </div>
                                                <div className="flex flex-row text-sm mt-5 gap-x-2.5 items-center cursor-pointer" onClick={() => {setTermsAgree('terms-no')}}>
                                                    <CheckSquare size={20} weight="light" className="shrink-0" />
                                                    <div>{item.title}</div>
                                                </div>
                                            </div>
                                        ))}
                                    <div className="text-sm mt-2.5">Please be advised that, in certain circumstances, we may reach out for additional information or connect you with one of our sales representatives.</div>
                                </div>
                            }

                            {/* <FileUpload /> */}
                            <div className="py-4" />

                            <div className="mt-6">The information you submit will be reviewed within 1-2 business days. You will be contacted by email once your account has been approved.</div>
                            <div className="mt-2">By submitting this application, I verify the information submitted on this application is accurate to the best of my knowledge.</div>
                            <button type="submit" onClick={() => {topRef.current.scrollIntoView({ behavior: 'smooth' });}} className="bg-black text-ghost-white py-2 text-sm rounded-lg text-center w-48 font-semibold text-lg mt-6 mb-14">Submit Application</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateAccount;
