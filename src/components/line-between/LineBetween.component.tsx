import React, { ReactElement, useEffect, useState } from 'react';
import { useRef } from 'react';

export interface LineBtwnDataProps {
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    d?: string,
    d2: string
    active: boolean
}

interface Props {
    parentRef: React.MutableRefObject<HTMLDivElement | null>,
    childRefs: HTMLDivElement[],
    color: { default: string, active: string },
    point?: number,
    height: number,
    strokeWidth: number
}

function getData(p: DOMRect, c: DOMRect, point: number = 0, active: boolean): LineBtwnDataProps {

    // if (p.y + p.height < c.y) {

    const x1 = p.x + p.width / 2
    const y1 = p.y + p.height
    const x2 = c.x + c.width / 2
    const y2 = c.y;
    const halfY = point ? point : (y2 - y1) / 2;

    return {
        x1,
        y1,
        x2,
        y2,
        d: `M ${x1},${y1} L ${x1},${y1 + halfY} `,
        d2: `M ${x1},${y1 + halfY} L ${x2},${y1 + halfY} ${x2},${y2}`,
        active: active
    }
    // } 
    // else if (p.x + p.width < c.x && p.y + p.height >= c.y + c.height) {
    //     return {
    //         x1: p.x + p.width,
    //         y1: p.y + p.height / 2,
    //         x2: c.x,
    //         y2: c.y + c.height / 2
    //     }
    // } else if (p.x > c.x + c.width && p.y + p.height >= c.y + c.height) {
    //     return {
    //         x1: p.x,
    //         y1: p.y + p.height / 2,
    //         x2: c.x + c.width,
    //         y2: c.y + c.height / 2
    //     }
    // }

    // return {
    //     x1: p.x + p.width / 2,
    //     y1: p.y,
    //     x2: c.x + c.width / 2,
    //     y2: c.y + c.height
    // }
}

function LineBetween({ parentRef, childRefs, color,strokeWidth, point, height }: Props): ReactElement {

    const [data, setData] = useState<LineBtwnDataProps[]>([]);
    const svgRef = useRef<SVGSVGElement | null>(null);
    const svgRect = svgRef.current?.getBoundingClientRect();
    const activeRef = useRef(false);
    // const height = document.body.clientHeight;

    useEffect(() => {
        if (parentRef.current && childRefs.length) {
            const parentRect = parentRef.current.getBoundingClientRect();
            // console.log(parentRect);

            const newData = childRefs.map((ref) => {
                console.log(ref.dataset);
                if (ref) {
                    const childRect = ref.getBoundingClientRect();
                    const active = Boolean(ref.parentElement?.querySelector('[data-active]')) && !ref.dataset.active  ;
                    if (active) {
                        activeRef.current = active;
                    }

                    // console.log(active);
                    // console.log(ref);

                    return getData(parentRect, childRect, point, active);
                }

            }).filter(item => item !== undefined);

            setData(newData as LineBtwnDataProps[]);
            
        }
    }, []);

    return (
        <svg
            style={{
                top: 0,
                left: 0,
                width: '100%',
                height: height,
                display: 'block'
            }}
            ref={svgRef}
            viewBox={`${svgRect?.left} ${svgRect?.top} ${svgRect?.width} ${height}`}
        >
            {data?.map(item => (

                <g>
                    {activeRef.current ?
                        <path d={item.d} strokeWidth={strokeWidth} style={{ stroke: color.active, fill: 'none' }} /> :
                        <path d={item.d}  strokeWidth={strokeWidth} style={{ stroke: color.default, fill: 'none' }} />
                    }
                    <path d={item.d2}  strokeWidth={strokeWidth} style={{ stroke: item.active ? color.active : color.default, fill: 'none' }} />
                </g>

            ))}
        </svg>
    )
}

export default LineBetween
