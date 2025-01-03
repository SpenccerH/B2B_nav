import './widget.scss';
import {ArrowDownIcon, ArrowUpIcon} from '@radix-ui/react-icons';
import * as d3 from 'd3';
import {useEffect, useRef, useState} from 'react';

function CardWidget({ title, value, up, change } : { title: string, value: string, up: boolean, change: string }) {

    const graphContainerRef = useRef<HTMLDivElement>(null);

    const [ graphHeight, setGraphHeight ] = useState<number | undefined>(undefined);
    const [ graphWidth, setGraphWidth ] = useState<number | undefined>(undefined);

    useEffect(() => {
        if(graphContainerRef.current) {
            console.log('hello');
            setGraphHeight(graphContainerRef.current.clientHeight);
            setGraphWidth(graphContainerRef.current.clientWidth);
        }
    }, [graphContainerRef])

    return (
        <div className="flex flex-col border p-6 row-span-12">
            <div className="pb-2">
                {title}
            </div>
            <div className="flex flex-row items-center gap-x-6">
                <div className="text-5xl font-extralight">
                    {value}
                </div>
                <div className="widget--compare-section">
                    <span className="flex flex-row items-center text-red-900 text-lg">
                        {up ? <ArrowUpIcon className="h-6 w-6"/> : <ArrowDownIcon className="h-6 w-6" />}{change}
                    </span>
                    <span className="py-2">Diff</span>
                </div>
            </div>
            <div className="widget--card-graph" ref={graphContainerRef}>
                <LinePlot height={graphHeight} width={graphWidth} />
            </div>
            <div className="text-sm">
                Data from W16 (Apr 15 - Apr 21, 2024)
            </div>
        </div>
    )
}


function LinePlot({
                      data = Array.from({ length: 16 }, d3.randomInt(30, 42)),
                      width = 1000,
                      height = 100,

                  }) {
    const x = d3.scaleLinear(
        [0, data.length - 1],
        [0, width - 5]
    );

    const y = d3.scaleLinear([d3.min(data)!, d3.max(data)!], [height, 0]);
    const area = d3.area((_d, i) => x(i), y(d3.min(data)! - 1), y).curve(d3.curveMonotoneX);
    const line = d3.line((_d, i) => x(i), y).curve(d3.curveMonotoneX);
    return (
        <svg style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "visible"}}
             viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
            <defs>
                <linearGradient id="mygrad" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#09b5db', stopOpacity: 0.3}}/>
                    <stop offset="100%" style={{stopColor: '#09b5db', stopOpacity: 0}}/>
                </linearGradient>
            </defs>
            <path
                d={area(data)!}
                style={{fill: "url(#mygrad)"}}
            />
            <path
                fill="transparent"
                stroke="#09b5db"
                strokeWidth="2"
                d={line(data)!}
            />
            <circle
                fill="#09b5db"
                cx={x(data.length -1)} cy={y(data[data.length - 1])} r="3"
                />
        </svg>
    );
}

export default CardWidget;