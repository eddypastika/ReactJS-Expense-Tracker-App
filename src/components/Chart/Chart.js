import React from "react";
import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(data => data.value);
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {props.dataPoints.map(data => (
                <ChartBar
                    value={data.value}
                    maxValue={totalMaximum}
                    label={data.label}
                    key={data.label}/>
            ))}
        </div>
    );
}

export default Chart;