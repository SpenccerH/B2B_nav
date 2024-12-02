import {Button, Collection, DialogTrigger, Tab, TabList, TabPanel, Tabs} from 'react-aria-components';
import {ReactNode, useEffect, useState} from 'react';
import './tabs-navigation.css'
import { MagnifyingGlass } from '@phosphor-icons/react';
import CalendarTo from '../calendar/calendar-to';
import NewTicketModal from '../../routes/tickets/new-ticket-modal';

type PageTab = {
    id: number;
    title: string;
    content: ReactNode;
}
interface NavigationTabsProps {
    tabs: Array<PageTab>
}

function ProfileTabs({ tabs } : NavigationTabsProps) {

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
                    <DialogTrigger>
                        <Button className="border border-slate-300 rounded-lg text-xs px-1.5 h-7 hover:bg-tabs-gray">
                            Open New Ticket
                        </Button>
                        <NewTicketModal />
                    </DialogTrigger>
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

export default ProfileTabs;
