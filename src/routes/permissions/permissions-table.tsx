const titles = [
    { title: "Administrator" },
    { title: "Purchaser Access" },
    { title: "Finance Access" },
];

function PermissionsTable() {
    return (
        <table className=" w-full border-collapse border border-gray-300">
            <thead>
                <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium">Company Information Management</th>
                    {titles.map((item, index) => (
                        <th key={index} className="border border-gray-300 px-4 py-2 text-center text-sm font-medium">{item.title}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {renderRow("Manage All Company Users", ["Yes", "No", "No"])}
                {renderRow("Manage Company Payment Methods (including net terms)", ["Yes", "No", "Yes"])}
                {renderSection("Orders")}
                {renderRow("Manage All Company Orders", ["Yes", "No", "No"])}
                {renderRow("Manage Own Orders", ["Yes", "Yes", "No"])}
                {renderRow("View All Company Invoices", ["Yes", "Yes", "Yes"])}
                {renderRow("Ability to Checkout", ["Yes", "Yes", "No"])}
                {renderSection("Returns")}
                {renderRow("Manage All Company Returns", ["Yes", "Yes", "Yes"])}
                {renderRow("Submit Returns", ["Yes", "Yes", "Yes"])}
                {renderSection("Wishlists")}
                {renderRow("Manage All Company Wishlists", ["Yes", "No", "No"])}
                {renderRow("Manage Own Wishlists", ["Yes", "Yes", "No"])}
            </tbody>
        </table>
    );
}

function renderRow(label, permissions) {
    return (
        <tr className="border-t border-gray-300">
            <td className="border border-gray-300 px-4 py-2 bg-gray-100 text-sm">{label}</td>
            {permissions.map((permission, index) => (
                <td key={index} className="border border-gray-300 px-4 py-2 text-center text-sm">{permission}</td>
            ))}
        </tr>
    );
}

function renderSection(title) {
    return (
        <tr>
            <td colSpan={titles.length + 1} className="border-t border-gray-300 bg-gray-200 px-4 py-2 text-sm">
                {title}
            </td>
        </tr>
    );
}

export default PermissionsTable;