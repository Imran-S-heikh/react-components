import clsx from 'clsx';
import React, { ReactElement, ReactNode } from 'react';
import { useRef } from 'react';
import './button-ripple.style.scss';

interface Props {
    children: ReactNode,
    color?: string,
    className?: string  
}

function ButtonRipple({ children,color='rgba(255,255,255,.5)',className }: Props): ReactElement {

    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const rippleRef = useRef<HTMLSpanElement | null>(null);

    const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
        const left = event.clientX - event.currentTarget.offsetLeft;
        const top = event.clientY - event.currentTarget.offsetTop;


        if (buttonRef.current) {

            if (rippleRef.current) {
                rippleRef.current.remove();
            }

            const element = document.createElement("span");

            element.classList.add('ripple');
            element.style.top = `${top}px`;
            element.style.left = `${left}px`;
            element.style.backgroundColor = color;

            buttonRef.current.appendChild(element);

            rippleRef.current = element;
        }
    }

    const handleMouseUp = ()=>{
        if(rippleRef.current){
            rippleRef.current.style.opacity = '0';
        }
    }

    return (
        <button ref={buttonRef} onMouseUp={handleMouseUp} onMouseDown={handleMouseDown} className={clsx('btn-ripple',className)}>
            {children}
        </button>
    )
}

export default ButtonRipple
