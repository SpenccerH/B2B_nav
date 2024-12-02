import { Collection, Tab, TabList, TabPanel, Tabs } from 'react-aria-components';
import { ReactNode, useEffect, useRef, useState } from 'react';
import './tabs-navigation.css';
import { MagnifyingGlass } from '@phosphor-icons/react';
import CalendarTo from '../calendar/calendar-to';
import { Link } from 'react-router-dom';
import outstandingInvoices from "../../assets/outstanding-invoices.xls";

type PageTab = {
    id: number;
    title: string;
    content: ReactNode;
};

interface NavigationTabsProps {
    tabs: Array<PageTab>;
}

function InvoicesTabs({ tabs }: NavigationTabsProps) {
    const [search, setSearch] = useState('search-no');
    const [excelData, setExcelData] = useState<any[]>([]); // Store parsed Excel data
    const calendarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (calendarRef.current && !calendarRef.current.contains(event.target)) {
                // Close calendar if clicked outside
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <Tabs className="">
            <div className="flex flex-row justify-between">
                <TabList className="flex gap-x-1 rounded-lg" items={tabs}>
                    {item => <Tab className="list-Tab rounded-lg flex flex-row text-sm ">{item.title}</Tab>}
                </TabList>
                <div className="flex flex-row items-center gap-x-1">
                    {search === "search-no" && (
                        <div
                            className="border rounded-lg border-slate-300 p-1.5 cursor-pointer"
                            onClick={() => setSearch('search-yes')}
                        >
                            <MagnifyingGlass size={16} weight="light" />
                        </div>
                    )}
                    {search === "search-yes" && (
                        <div className="flex flex-row items-center border border-slate-300 px-1.5 rounded-lg">
                            <input
                                type="text"
                                placeholder="Search"
                                className="text-sm text-black focus:outline-none w-48 px-1 py-1"
                            />
                            <MagnifyingGlass
                                size={16}
                                weight="light"
                                className="cursor-pointer"
                                onClick={() => setSearch('search-no')}
                            />
                        </div>
                    )}
                    <CalendarTo />
                    <Link
                        to={outstandingInvoices}
                        target="_blank"
                        className="border border-slate-300 rounded-lg text-xs px-1.5 h-7 hover:bg-tabs-gray"
                    >
                        <div className="flex flex-col min-h-full justify-center items-center">Export (.xls)</div>
                    </Link>
                </div>
            </div>
            <Collection items={tabs}>
                {item => (
                    <TabPanel className="pt-8">
                        {item.content}
                    </TabPanel>
                )}
            </Collection>
            {/* Display Excel Data */}
            {excelData.length > 0 && (
                <div className="mt-4">
                    <h3>Uploaded Excel Data:</h3>
                    <table className="border border-collapse w-full text-sm">
                        <thead>
                            <tr>
                                {Object.keys(excelData[0]).map((key, index) => (
                                    <th key={index} className="border px-2 py-1">
                                        {key}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {excelData.map((row, index) => (
                                <tr key={index}>
                                    {Object.values(row).map((value, subIndex) => (
                                        <td key={subIndex} className="border px-2 py-1">
                                            {value}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </Tabs>
    );
}

export default InvoicesTabs;
