import { useState } from "react";
import samplePDF from "../../../assets/sample-pdf.pdf";
import { Link } from 'react-router-dom';
import { CaretDown, CaretLeft, CaretRight, CaretUp, Eye, FilePdf } from "@phosphor-icons/react";

const titles = [
    { id: 1, name: "Order Number" },
    { id: 2, name: "Order Date" },
    { id: 3, name: "Order Status" },
    { id: 4, name: "Ordered By" },
    { id: 5, name: "Order Amount" },
    { id: 6, name: "Tracking Number" },
]

function OrdersTable({ items=[
    { id: 1, number: "CCORD000001", status: "Completed", date: "2024-10-11", user: "Wile E. Coyote", total: "$15,200.00", track: "CCTRK000001", src: samplePDF  },
    { id: 2, number: "CCORD000002", status: "Completed", date: "2024-10-12", user: "Wile E. Coyote", total: "$15,300.00", track: "CCTRK000002", src: samplePDF  },
    { id: 3, number: "CCORD000003", status: "Completed", date: "2024-10-14", user: "Wile E. Coyote", total: "$15,400.00", track: "CCTRK000003", src: samplePDF  },
    { id: 4, number: "CCORD000004", status: "Completed", date: "2024-10-18", user: "Wile E. Coyote", total: "$15,500.00", track: "CCTRK000004", src: samplePDF  },
    { id: 5, number: "CCORD000005", status: "Completed", date: "2024-10-22", user: "Wile E. Coyote", total: "$15,600.00", track: "CCTRK000005", src: samplePDF  },
    { id: 6, number: "CCORD000006", status: "Completed", date: "2024-10-24", user: "Wile E. Coyote", total: "$15,700.00", track:"CCTRK000006", src: samplePDF  },
    { id: 7, number: "CCORD000007", status: "Completed", date: "2024-10-27", user: "Wile E. Coyote", total: "$15,800.00", track: "CCTRK000007", src: samplePDF  },
    { id: 8, number: "CCORD000008", status: "Completed", date: "2024-10-28", user: "Wile E. Coyote", total: "$15,900.00", track: "CCTRK000008", src: samplePDF  },
    { id: 9, number: "CCORD000009", status: "Completed", date: "2024-11-17", user: "Wile E. Coyote", total: "$16,000.00", track: "CCTRK000009", src: samplePDF  },
    { id: 10, number: "CCORD000010", status: "Completed", date: "2024-11-23", user: "Wile E. Coyote", total: "$16,100.00", track: "CCTRK000010", src: samplePDF  },
    { id: 11, number: "CCORD000011", status: "Completed", date: "2024-10-11", user: "Wile E. Coyote", total: "$15,200.00", track: "CCTRK000011", src: samplePDF  },
    { id: 12, number: "CCORD000012", status: "Completed", date: "2024-10-12", user: "Wile E. Coyote", total: "$15,300.00", track: "CCTRK000012", src: samplePDF  },
    { id: 13, number: "CCORD000013", status: "Completed", date: "2024-10-14", user: "Wile E. Coyote", total: "$15,400.00", track: "CCTRK000013", src: samplePDF  },
    { id: 14, number: "CCORD000014", status: "Cancelled", date: "2024-10-18", user: "Wile E. Coyote", total: "$15,500.00", track: "CCTRK000014", src: samplePDF  },
    { id: 15, number: "CCORD000015", status: "Cancelled", date: "2024-10-22", user: "Wile E. Coyote", total: "$15,600.00", track: "CCTRK000015", src: samplePDF  },
    { id: 16, number: "CCORD000016", status: "Cancelled", date: "2024-10-24", user: "Wile E. Coyote", total: "$15,700.00", track:"CCTRK000016", src: samplePDF  },
    { id: 17, number: "CCORD000017", status: "Pending", date: "2024-10-27", user: "Wile E. Coyote", total: "$15,800.00", track: "CCTRK000017", src: samplePDF  },
    { id: 18, number: "CCORD000018", status: "Pending", date: "2024-10-28", user: "Wile E. Coyote", total: "$15,900.00", track: "CCTRK000018", src: samplePDF  },
    { id: 19, number: "CCORD000019", status: "Pending", date: "2024-11-17", user: "Wile E. Coyote", total: "$16,000.00", track: "CCTRK000019", src: samplePDF  },
] })  {

    const [isAscending, setIsAscending] = useState(true); // Track sorting order
    const [sortedItems, setSortedItems] = useState(
        [...items].sort((a, b) => new Date(a.date) - new Date(b.date)) // Default to ascending
    );
    const [currentPage, setCurrentPage] = useState(1);

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

    return (
        <div className="">
            <table className="w-full bg-transparent border">
                <thead>
                    <tr className="text-oxford-blue border border-slate-300 bg-tabs-gray">
                        <th></th>
                        {titles.map(title => (
                            <th key={title.id} className="py-4 text-xs">
                                <div className="flex flex-row items-center">
                                    <div className="flex flex-row items-center">
                                        {title.name !== "Order Date" ? (
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
                                </div>
                            </th>
                        ))}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedItems.map(item => (
                        <tr key={item.id} className="border-b border-slate-300 text-xs">
                            <div className="pr-2.5" />
                            <td className="font-medium">{item.number}</td>
                            <td className="py-6 font-medium">{item.date}</td>
                            <td className="font-medium">
                                {item.status === "Completed" &&
                                    <span className="text-xs text-green-600 flex items-center">
                                        <div className="h-1 w-1 rounded-full bg-green-600 mr-1.5 ml-0.5"/>
                                        Completed
                                    </span>
                                }
                                {item.status === "Pending" &&
                                    <span className="text-xs text-yellow-600 flex items-center">
                                        <div className="h-1 w-1 rounded-full bg-yellow-600 mr-1.5 ml-0.5"/>
                                        In Progress
                                    </span>
                                }
                                {item.status === "Cancelled" &&
                                    <span className="text-xs text-red-600 flex items-center">
                                        <div className="h-1 w-1 rounded-full bg-red-600 mr-1.5 ml-0.5"/>
                                        Cancelled
                                    </span>
                                }
                            </td>
                            <td className="py-6 font-medium">{item.user}</td>
                            <td className="py-6 font-medium">{item.total}</td>
                            <td className="py-6 font-medium">{item.track}</td>
                            <td className="py-6 flex flex-row items-center gap-x-2.5">
                                {item.status === "Pending" &&
                                    <Link to="/order-details-pending" target="_blank">
                                        <Eye size={18} className="cursor-pointer" />
                                    </Link>
                                }
                                {item.status !== "Pending" &&
                                    <Link to="/order-details" target="_blank">
                                        <Eye size={18} className="cursor-pointer" />
                                    </Link>
                                }
                                <Link to={item.src} target="_blank">
                                    <FilePdf size={18} />
                                </Link>
                            </td>
                        </tr>
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

export default OrdersTable;