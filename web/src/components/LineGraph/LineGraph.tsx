import { useEffect, useMemo, useRef, useState } from "react";
import * as d3 from "d3";
const MARGIN = { top: 30, right: 30, bottom: 50, left: 50 };
interface Data {
    x: number;
    y: number;
}
interface LineGraphProps {
    data: Data[];
    width: number;
    height: number;
}

function LineGraph({ data, width, height }: LineGraphProps) {
    const [title, setTitle] = useState("");
    const titleInputRef = useRef<HTMLInputElement>(null);
    const boundsWidth = width - MARGIN.right - MARGIN.left;
    const boundsHeight = height - MARGIN.top - MARGIN.bottom;
    const axesRef = useRef(null);
    // Y axis
    const [, max] = d3.extent(data, (d) => d.y);
    const yScale = useMemo(() => {
        return d3
            .scaleLinear()
            .domain([0, max || 0])
            .range([boundsHeight, 0]);
    }, [data, height]);
    // X axis
    const [, xMax] = d3.extent(data, (d) => d.x);
    const xScale = useMemo(() => {
        return d3
            .scaleLinear()
            .domain([0, xMax || 0])
            .range([0, boundsWidth]);
    }, [data, width]);
    // Render the X and Y axis using d3.js, not react
    useEffect(() => {
        const svgElement = d3.select(axesRef.current);
        svgElement.selectAll("*").remove();
        const xAxisGenerator = d3.axisBottom(xScale);
        svgElement
            .append("g")
            .attr("transform", "translate(0," + boundsHeight + ")")
            .call(xAxisGenerator);

        const yAxisGenerator = d3.axisLeft(yScale);
        svgElement.append("g").call(yAxisGenerator);
    }, [xScale, yScale, boundsHeight]);

    // Build the line
    const lineBuilder = d3
        .line<Data>()
        .x((d) => xScale(d.x))
        .y((d) => yScale(d.y));
    const linePath = lineBuilder(data);

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ height: "60px" }} data-testid="graph-title">
                {title}
            </span>
            <svg width={width} height={height} data-testid="graph-container">
                <g
                    width={boundsWidth}
                    height={boundsHeight}
                    transform={`translate(${[MARGIN.left, MARGIN.top].join(
                        ","
                    )})`}
                >
                    <path
                        d={linePath as string}
                        opacity={1}
                        stroke="#9a6fb0"
                        fill="none"
                        strokeWidth={2}
                    />
                </g>
                <g
                    width={boundsWidth}
                    height={boundsHeight}
                    ref={axesRef}
                    transform={`translate(${[MARGIN.left, MARGIN.top].join(
                        ","
                    )})`}
                />
            </svg>

            <div
                style={{
                    display: "flex",
                    gap: "10px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        gap: "10px",
                        flexDirection: "column",
                        width: "250px",
                    }}
                >
                    <span>Title</span>
                    <input
                        type="text"
                        data-testid="graph-title-input"
                        ref={titleInputRef}
                    />
                    <button
                        data-testid="insert-title-button"
                        onClick={() =>
                            setTitle(titleInputRef.current?.value as string)
                        }
                    >
                        Insert Title
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LineGraph;
