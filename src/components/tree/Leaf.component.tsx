import React, { Children, ReactElement, ReactNode } from 'react'
import { useRef } from 'react';
import { CSSProperties } from 'react';
import { useContext } from 'react';
import prior from '../../utils/prior.util';
import LineBetween from '../line-between/LineBetween.component';
import { TreeContext } from './Tree.component';

interface Props {
    component: ReactElement,
    children: ReactNode,
    className?: string,
    style?: CSSProperties,
    active?: string,
    height?: number,
    point?: number,
    strokeWidth?: number,
    color?: { default: string, active: string }
}

const Leaf = React.forwardRef(({ component, children, className, style, active, height, point, strokeWidth, color }: Props, refForword: any): ReactElement => {

    const state = useContext(TreeContext);
    const parentRef = useRef<HTMLDivElement | null>(null);
    const childRefs: HTMLDivElement[] = [];

    const handleChildRef = (ref: HTMLDivElement) => {
        childRefs.push(ref);
    }

    const handleParentRef = (ref: HTMLDivElement) => {
        parentRef.current = ref;
        if (typeof refForword === 'function') {
            refForword(ref)
        }
    }


    return (
        <div className="flex-1 leaf" data-active={active}>
            {React.cloneElement(component, { ref: handleParentRef })}
            <div className="">
                <LineBetween
                    parentRef={parentRef}
                    childRefs={childRefs}
                    color={prior(color, state.color, { default: '#000', active: 'red' })}
                    height={prior(height, state.height, 200)}
                    point={prior(point, state.point)}
                    strokeWidth={prior(strokeWidth, state.strokeWidth, 1)}
                />
            </div>
            <div className={className} style={style}>
                {Children.map(children, ((child: any) => React.cloneElement(child, { ref: handleChildRef })))}
            </div>

        </div>
    )
})

export default Leaf;
