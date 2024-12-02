import {Collection, Tab, TabList, TabPanel, Tabs} from 'react-aria-components';
import {ReactNode} from 'react';
import './tabs-navigation.css'

type PageTab = {
    id: number;
    title: string;
    content: ReactNode;
}
interface NavigationTabsProps {
    tabs: Array<PageTab>
}

function HardwareTabs({ tabs } : NavigationTabsProps) {
    return (
        <Tabs className="">
            <TabList className="flex border-b gap-x-2.5" items={tabs}>
                {item => <Tab className="navigation-Tab flex flex-row items-end">
                    {item.title}
                </Tab>}
            </TabList>
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

export default HardwareTabs;
