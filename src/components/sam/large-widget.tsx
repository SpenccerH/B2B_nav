import './widget.scss'
import * as d3 from 'd3';
import {useEffect, useRef, useState} from 'react';

function LargeWidget(){

    const graphContainerRef = useRef<HTMLDivElement>(null);

    const [ graphHeight, setGraphHeight ] = useState<number | undefined>(undefined);
    const [ graphWidth, setGraphWidth ] = useState<number | undefined>(undefined);

    const data = {IBM: 9, Oracle: 20, Zendesk: 30, SurveyMonkey: 8, Facebook:12};

    const color = d3.scaleOrdinal()
        .domain(Object.entries(data).map((d) => d[0]))
        .range(d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), Object.entries(data).length).reverse())

    const pie = d3.pie().sort(null).value((d) => d[1])


    const data_ready = pie(Object.entries(data));

    useEffect(() => {
        if(graphContainerRef.current) {
            console.log('hello');
            setGraphHeight(graphContainerRef.current.clientHeight);
            setGraphWidth(graphContainerRef.current.clientWidth);
        }
    }, [graphContainerRef])

    return (
        <div className="widget col-span-3 row-span-12">
            <div className="widget--title-section">
                Top 5 publishers true-up cost
            </div>
            <div className="widget--chart-section" ref={graphContainerRef}>
                <PieChart height={graphHeight} width={graphWidth}/>
            </div>
            <div className="flex text-xs justify-between">
                {data_ready.map((item) => (
                    <div className="flex items-center gap-1.5">
                        <div className="h-3 w-2 bg-" style={{backgroundColor: color(item.data[0])}}></div>
                        <div>{item.data[0]}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

function PieChart({height = 500, width = 500}) {


    const data = {IBM: 9, Oracle: 20, Zendesk: 30, SurveyMonkey: 8, Facebook:12};

    const color = d3.scaleOrdinal()
        .domain(Object.entries(data).map((d) => d[0]))
        .range(d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), Object.entries(data).length).reverse())

    const pie = d3.pie().sort(null).value((d) => d[1])

    const arc = d3.arc()

    const data_ready = pie(Object.entries(data));

    console.log(data_ready)

    return (
        <>
            <svg
                viewBox={`0 0 ${Math.min(width, height)} ${Math.min(width, height)}`}
                style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "visible"}}>
                {data_ready.map((item) => (
                    <path
                        style={{transform: "translate(50%, 50%)"}}
                        d={d3.arc()({ innerRadius: 0, outerRadius: Math.min(width, height) / 2, startAngle: item.startAngle, endAngle: item.endAngle})}
                        stroke="white"
                        fill={color(item.data[0])} />
                ))}
            </svg>

        </>
    )

}

export default LargeWidget;