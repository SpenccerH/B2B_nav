import { CaretDown, CaretLeft, CaretRight, CaretUp, Eye, FilePdf } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import InvoiceDropdown from './invoice-dropdown';

const titles = [
    { id: 1, name: "Invoice Number" },
    { id: 2, name: "Invoice Date" },
    { id: 3, name: "Due Date" },
    { id: 4, name: "Invoice Status" },
    { id: 5, name: "Ordered By" },
    { id: 6, name: "Invoice Amount" },
    { id: 7, name: "Balance" },
]

function Invoices({ items })  {

    const [isAscending, setIsAscending] = useState(true); // Track sorting order
    const [sortedItems, setSortedItems] = useState(
        [...items].sort((a, b) => new Date(a.date) - new Date(b.date)) // Default to ascending
    );
    const [currentPage, setCurrentPage] = useState(1);
    const [openDropdown, setOpenDropdown] = useState(null);

    const itemsPerPage = 10;
    const totalPages = Math.ceil(sortedItems.length / itemsPerPage);

    // Get the paginated subset of sortedItems
    const paginatedItems = sortedItems.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleSort = () => {
        const sorted = [...sortedItems].sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return isAscending ? dateB - dateA : dateA - dateB;
        });
        setSortedItems(sorted);
        setIsAscending(!isAscending); // Toggle sorting order
        setCurrentPage(1); // Reset to the first page after sorting
    };

    const handlePageInput = (e) => {
        const value = Number(e.target.value);
        if (value >= 1 && value <= totalPages) {
            setCurrentPage(value);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage(prev => prev - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
    };

    const toggleDropdown = (id) => {
        setOpenDropdown(prevState => (prevState === id ? null : id));
    };

    return (
        <div className="">
            <table className="w-full bg-transparent border">
                <thead>
                    <tr className="text-black border border-slate-300 bg-tabs-gray">
                        <th></th>
                        {titles.map(title => (
                            <th key={title.id} className="py-4 text-xs">
                                <div className="flex flex-row items-center">
                                    {title.name !== "Invoice Date" ? (
                                        <div>{title.name}</div>
                                    ) : (
                                        <div className="flex flex-row gap-x-1 items-center cursor-pointer" onClick={handleSort}>
                                            <div>{title.name}</div>
                                            <div className="flex flex-col items-center">
                                                <CaretUp size={10} weight="fill" className={isAscending ? "text-blue-600" : ""} />
                                                <CaretDown size={10} weight="fill" className={!isAscending ? "text-blue-600" : ""} />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </th>
                        ))}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedItems.map(item => (
                        <React.Fragment key={item.id}>
                        <tr key={item.id} className="border-t border-slate-300 text-xs">
                            <div className="pr-2.5" />
                            <td className="py-2 font-medium">{item.number}</td>
                            <td className="py-6 font-medium">{item.date}</td>
                            <td className="py-6 font-medium">{item.due}</td>
                            <td className="py-6 font-medium w-28 2xl:w-48">
                                {item.status === "Paid" &&
                                    <span className="text-xs text-green-600 flex items-center">
                                        <div className="h-1 w-1 rounded-full bg-green-600 mr-1.5 ml-0.5"/>
                                        Paid
                                    </span>
                                }
                                {item.status === "Partial" &&
                                    <span className="text-xs text-yellow-600 flex items-center">
                                        <div className="h-1 w-1 rounded-full bg-yellow-600 mr-1.5 ml-0.5"/>
                                        Partially Paid
                                    </span>
                                }
                                {item.status === "Overdue" &&
                                    <span className="text-xs text-red-600 flex items-center">
                                        <div className="h-1 w-1 rounded-full bg-red-600 mr-1.5 ml-0.5"/>
                                        Overdue
                                    </span>
                                }
                                {item.status === "Current" &&
                                    <span className="text-xs text-blue-600 flex items-center">
                                        <div className="h-1 w-1 rounded-full bg-blue-600 mr-1.5 ml-0.5"/>
                                        Current
                                    </span>
                                }
                            </td>
                            <td className="py-6 font-medium">{item.user}</td>
                            <td className="py-6 font-medium">{item.total}</td>
                            <td className="py-6 font-medium">{item.payable}</td>
                            <td className="py-6 flex flex-row items-center gap-x-2.5">
                                <Eye size={18} onClick={() => toggleDropdown(item.id)} className="cursor-pointer" />
                                <Link to={item.src} target="_blank">
                                    <FilePdf size={18} />
                                </Link>
                            </td>
                        </tr>

                        {openDropdown === item.id && (
                            <InvoiceDropdown />
                        )}

                        </React.Fragment>
                    ))}
                </tbody>
            </table>
            <div className="pt-4">
                <div className="flex flex-row items-center justify-between">
                    <CaretLeft className={`cursor-pointer ${currentPage === 1 && "opacity-50"}`} onClick={handlePreviousPage} />
                    <div className="flex flex-row items-center gap-x-2 py-1">
                        <div className="text-sm">Page</div>
                        <input
                            type="text"
                            value={currentPage}
                            onChange={handlePageInput}
                            className="text-sm text-black focus:outline-none w-12 text-center border rounded-lg py-0.5"
                        />
                        <div className="text-sm">of {totalPages}</div>
                    </div>
                    <CaretRight className={`cursor-pointer ${currentPage === totalPages && "opacity-50"}`} onClick={handleNextPage} />
                </div>
            </div>
        </div>
    )
}

export default Invoices;
