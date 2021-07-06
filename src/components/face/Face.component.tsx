import React, { ReactElement } from 'react';
import * as d3 from "d3";

interface Props {
    
}

const width = 980;
const height = 500;
const widthCenter = width / 2;
const heightCenter = height / 2;
const strokeWidth = 30;
const radius = heightCenter - strokeWidth / 2;

function Face({}: Props): ReactElement {

    console.log(d3);

    return (
        <svg width={width} height={height} style={{background: 'gray'}}>
            <circle cx={widthCenter} cy={heightCenter} r={radius} fill="yellow" stroke="#000" strokeWidth={strokeWidth}>

            </circle>
        </svg>
    )
}

export default Face
