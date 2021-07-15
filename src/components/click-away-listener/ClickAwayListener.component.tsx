import React, { MouseEvent, ReactElement } from 'react'
import { useEffect } from 'react';
import { useRef } from 'react'
import { cloneElement } from 'react'

interface Props {
    children: ReactElement,
    onClickAway: ()=>void
}

function ClickAwayListener({children,onClickAway}: Props): ReactElement {

    const ref = useRef<HTMLElement|null>(null);

    useEffect(()=>{
        function handleEvent(event:any) {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickAway();
            }
        }
        document.addEventListener('mousedown',handleEvent);

        return ()=>{
            document.removeEventListener('mousedown',handleEvent);
        }
    },[ref]);


    return cloneElement(children,{ref: ref});
}

export default ClickAwayListener
