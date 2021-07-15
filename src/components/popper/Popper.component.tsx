import { Placement } from '@popperjs/core';
import React, { ReactElement, ReactNode } from 'react';
import { useState } from 'react';
import { usePopper } from 'react-popper';

interface Props {
    anchorEl: HTMLElement | null ,
    className?: string,
    children: ReactNode,
    placement?: Placement,
    open?: boolean 
}

function Popper({anchorEl,className,children,placement,open}: Props,ref:any): ReactElement|null {

    const [popper,setPopper] = useState<HTMLDivElement|null>(null); 
    const { styles } = usePopper(anchorEl,popper,{
        placement: placement, 
    });

    console.log(styles)

    if (!open) {
        return null;
    }

    const handleRef = (r:HTMLDivElement)=>{
        setPopper(r);
        if('current' in ref){
            ref.current = ref;
        }
    }

    return (
        <div style={styles.popper} ref={handleRef} className={className}>
            {children}
        </div>
    )
}

export default React.forwardRef(Popper);
