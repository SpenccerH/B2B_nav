import SidebarNav from '../sidebar-nav/sidebar-nav.tsx';

import './sam.scss'
import {ArrowUpIcon, MagnifyingGlassIcon} from '@radix-ui/react-icons';
import {useState} from 'react';
import * as d3 from 'd3';
import MediumWidget from './medium-widget.tsx';
import SmallWidget from './small-widget.tsx';
import LargeWidget from './large-widget.tsx';

function Sam() {
    return (
        <div className="h-lvh text-black/90 bg-white pb-[200vh]">
            <div className="flex h-full w-full">
                <SidebarNav />
                <div className="h-full grow min-w-0">
                    <div className="sam-title-section">
                        <div className="sam-title">
                            <div className="w-8 h-8 flex items-center justify-center">
                                <MagnifyingGlassIcon />
                            </div>
                            <div className="text-[#808080]">
                                Search for anything
                            </div>
                        </div>
                    </div>
                    <div className="sam-header">
                        Software asset overview
                    </div>
                    <div className="sam-controls">
                        Filter: Publisher
                    </div>
                    <div className="sam-content-section">
                        <div className="sam-main-panel">
                            <MediumWidget title="Publishers out of compliance" value="36" up={true} good={false} change="2" />
                            <MediumWidget title="Products out of compliance" value="106" up={true} good={false} change="2 (1.9%)" />
                            <MediumWidget title="Over-licensed amount" value="$32M" up={false} good={true} change="-$3M" />
                            <MediumWidget title="Expiring maintenance and subscriptions" value="$42" up={false} good={true} change="-2" />
                            <SmallWidget title="Total true-up cost" value="$45M" />
                            <LargeWidget />
                            <LargeWidget />
                            <SmallWidget title="Actual savings" value="$0" />
                            <MediumWidget title="Software spend" value="$65M" up={true} good={false} change="$6M" />
                            <LargeWidget />
                            <LargeWidget />


                        </div>
                        <div className="sam-side-section">
                            <div className="sam-side-panel">
                                <div className="sam-side-panel--header">
                                    Alerts
                                </div>
                                <div className="sam-side-panel--action-list">
                                    <div className="sam-side-panel--action-item">30.42K removal candidates identified
                                    </div>
                                    <div className="sam-side-panel--action-item">19 new normalization suggestions</div>
                                    <div className="sam-side-panel--action-item">43 new service catalogue requests</div>
                                    <div className="sam-side-panel--action-item">6 scheduled jobs failed</div>
                                    <div className="sam-side-panel--action-item">Last content download on 2024-04-12
                                        failed
                                    </div>
                                    <div className="sam-side-panel--action-item">27 renewals coming up in next 90 days
                                    </div>
                                    <div className="sam-side-panel--action-item">8 new part number suggestions</div>
                                </div>
                            </div>
                            <div className="sam-side-panel">
                                <div className="sam-side-panel--header">
                                    Notifications
                                </div>
                                <div className="sam-side-panel--action-list">
                                    <div className="sam-side-panel--action-item">Last reconciliation on 2024-04-15 completed</div>
                                    <div className="sam-side-panel--action-item">Health check completed on 2024-04-19</div>
                                    <div className="sam-side-panel--action-item">7.04K issues found through health check</div>
                                    <div className="sam-side-panel--action-item">5 products nearing end of life</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sam;