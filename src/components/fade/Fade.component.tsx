import clsx from 'clsx';
import React, { cloneElement, ReactElement, useEffect, useRef, useState } from 'react';
import './fade.style.scss';

interface Props {
    children: ReactElement,
    open: boolean,
    time?: number
}

function Fade({children,open,time=500}: Props): ReactElement|null {

    const ref = useRef<HTMLElement|null>(null);
    const [state,setState] = useState(open);

    useEffect(() => {

        if (ref.current && !open) {
            ref.current.classList.add('fade-out')
        }else{
            setState(true)
        }

        setTimeout(()=>{
            if (!open) {
                setState(false);
            }
        },time);
    }, [open])

    if (!state) {
        return null;
    }

    return cloneElement(children,{ref: ref,className: clsx('fade-in',children.props.className)})
}

export default Fade;
