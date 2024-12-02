const roles = [
    { role: "Extended Access" },
    { role: "Limited Access" },
    { role: "View-Only" },
]

const headers = [
    { header: "Role" },
    { header: "Read" },
    { header: "Write" },
    { header: "View" },
    { header: "No Access" },
]

const headers2 = [
    { header: "Permission" },
    { header: "Extended Access" },
    { header: "Limited Access" },
    { header: "View-Only" },
    { header: "New" },
]

const permissions = [
    { perm: "Checkout" },
    { perm: "View Balance" },
]

function Permissions() {
    return (
        <div className="mb-20">
            <table className="w-full border rounded-sm text-sm">
                <thead className="bg-tabs-gray">
                    <tr className="text-left">
                        {headers.map(item => (
                            <th className="p-2.5 border-b">
                                {item.header !== "Role" &&
                                    <div className="text-center">{item.header}</div>
                                }
                                {item.header === "Role" &&
                                    <div>{item.header}</div>
                                }
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {roles.map(item => (
                        <tr>
                            <td className="p-2.5 border-b">{item.role}</td>
                            <td className="text-center border-b">
                                <div className="flex justify-center">
                                    <input type="checkbox" className="bg-gray-200 w-4 h-4" />
                                </div>
                            </td>
                            <td className="text-center border-b">
                                <div className="flex justify-center">
                                    <input type="checkbox" className="bg-gray-200 w-4 h-4" />
                                </div>
                            </td>
                            <td className="text-center border-b">
                                <div className="flex justify-center">
                                    <input type="checkbox" className="bg-gray-200 w-4 h-4" />
                                </div>
                            </td>
                            <td className="text-center border-b">
                                <div className="flex justify-center">
                                    <input type="checkbox" className="bg-gray-200 w-4 h-4" />
                                </div>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td className="p-2.5 text-sm">
                            <button className="px-2 py-1 bg-slate-100 hover:bg-slate-200 border border-slate-300 focus:outline-none text-oxford-blue rounded-sm">
                                Add New Role
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className="w-full border rounded-sm text-sm mt-20">
                <thead className="bg-tabs-gray">
                    <tr className="text-left">
                        {headers2.map(item => (
                            <th className="p-2.5 border-b">
                                {item.header !== "Permission" && item.header != "New" &&
                                    <div className="text-center">{item.header}</div>
                                }
                                {item.header === "Permission" &&
                                    <div>{item.header}</div>
                                }
                                {item.header === "New" &&
                                    <div className="flex justify-center">
                                        <button className="px-2 py-1 bg-slate-200 hover:bg-slate-300 border border-slate-400 focus:outline-none text-oxford-blue rounded-sm">
                                            Add New Role
                                        </button>
                                    </div>
                                }
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {permissions.map(item => (
                        <tr>
                            <td className="p-2.5 border-b">{item.perm}</td>
                            <td className="text-center border-b">
                                <div className="flex flex-row gap-x-2.5 justify-center">
                                    <input type="checkbox" className="bg-gray-200 w-4 h-4" />
                                    <input type="checkbox" className="bg-gray-200 w-4 h-4" />
                                    <input type="checkbox" className="bg-gray-200 w-4 h-4" />
                                </div>
                            </td>
                            <td className="text-center border-b">
                                <div className="flex flex-row gap-x-2.5 justify-center">
                                    <input type="checkbox" className="bg-gray-200 w-4 h-4" />
                                    <input type="checkbox" className="bg-gray-200 w-4 h-4" />
                                    <input type="checkbox" className="bg-gray-200 w-4 h-4" />
                                </div>
                            </td>
                            <td className="text-center border-b">
                                <div className="flex flex-row gap-x-2.5 justify-center">
                                    <input type="checkbox" className="bg-gray-200 w-4 h-4" />
                                    <input type="checkbox" className="bg-gray-200 w-4 h-4" />
                                    <input type="checkbox" className="bg-gray-200 w-4 h-4" />
                                </div>
                            </td>
                            <td className="text-center border-b">
                                <div className="flex flex-row gap-x-2.5 justify-center">
                                    <input type="checkbox" className="bg-gray-200 w-4 h-4" />
                                    <input type="checkbox" className="bg-gray-200 w-4 h-4" />
                                    <input type="checkbox" className="bg-gray-200 w-4 h-4" />
                                </div>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td className="p-2.5 text-sm">
                            <button className="flex px-2 py-1 bg-slate-100 hover:bg-slate-200 border border-slate-300 focus:outline-none text-oxford-blue rounded-sm">
                                Add New Permission
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Permissions;