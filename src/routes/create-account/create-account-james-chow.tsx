import CreateAccount from "./create-account";

const referral = [
    { name: "Referral: James Chow" },
]

function CreateAccountJamesChow() {
    return (
        <CreateAccount referral={referral} />
    )
}

export default CreateAccountJamesChow;