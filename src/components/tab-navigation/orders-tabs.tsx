import {Collection, Input, Tab, TabList, TabPanel, Tabs, TextField} from 'react-aria-components';
import {ReactNode, useEffect, useRef, useState} from 'react';
import './tabs-navigation.css'
import { Calendar, MagnifyingGlass } from '@phosphor-icons/react';
import CalendarTo from '../calendar/calendar-to';
import samplePDF from "../../assets/sample-pdf.pdf"
import { Link } from 'react-router-dom';

type PageTab = {
    id: number;
    title: string;
    // number: string;
    content: ReactNode;
}
interface NavigationTabsProps {
    tabs: Array<PageTab>
}

function OrdersTabs({ tabs } : NavigationTabsProps) {

    const [search, setSearch] = useState('search-no');

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (calendarRef.current && !calendarRef.current.contains(event.target)) {
                setCalendarVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    });

    return (
        <Tabs className="">
            <div className="flex flex-row justify-between">
                <TabList className="flex gap-x-1 rounded-lg" items={tabs}>
                    {item => <Tab className="list-Tab rounded-lg flex flex-row text-sm ">
                        {item.title}
                    </Tab>}
                </TabList>
                <div className="flex flex-row items-center gap-x-1">
                    {search === "search-no" &&
                        <div className="border rounded-lg border-slate-300 p-1.5 cursor-pointer" onClick={() => setSearch('search-yes')}>
                            <MagnifyingGlass size={16} weight="light" />
                        </div>
                    }
                    {search === "search-yes" &&
                        <div className="flex flex-row items-center border border-slate-300 px-1.5 rounded-lg">
                            <input type="text" placeholder="Search" className="text-sm text-black focus:outline-none w-48 px-1 py-1" />
                            <MagnifyingGlass size={16} weight="light" className="cursor-pointer" onClick={() => setSearch('search-no')} />
                        </div>
                    }
                    <CalendarTo />
                    <Link to={samplePDF} target="_blank" className="border border-slate-300 rounded-lg text-xs px-1.5 h-7 hover:bg-tabs-gray">
                        <div className="flex flex-col min-h-full justify-center items-center">Export (.pdf)</div>
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
        </Tabs>
    )
}

export default OrdersTabs;
