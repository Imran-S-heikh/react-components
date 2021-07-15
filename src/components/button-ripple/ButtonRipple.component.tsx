import clsx from 'clsx';
import React, { ReactElement, ReactNode } from 'react';
import { useRef } from 'react';
import './button-ripple.style.scss';

interface Props {
    children: ReactNode,
    color?: string,
    className?: string,
    onClick?: ()=>void  
}

function ButtonRipple({ children,color='rgba(255,255,255,.5)',className,onClick }: Props): ReactElement {

    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const rippleRef = useRef<HTMLSpanElement | null>(null);

    const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
        const left = event.clientX - event.currentTarget.offsetLeft;
        const top = event.clientY - event.currentTarget.getBoundingClientRect().top;


        if (buttonRef.current) {

            if (rippleRef.current) {
                rippleRef.current.remove();
            }

            const element = document.createElement("span");
            const rippleWidth = buttonRef.current.clientWidth/10;
            // const height = buttonRef.current.clientHeight;

            element.classList.add('ripple');
            element.style.top = `${top - (rippleWidth/2)}px`;
            element.style.left = `${left - (rippleWidth/2)}px`;
            element.style.backgroundColor = color;
            element.style.width = `${rippleWidth}px`;
            element.style.height = `${rippleWidth}px`;

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
        <button onClick={onClick} ref={buttonRef} onMouseUp={handleMouseUp} onMouseDown={handleMouseDown} className={clsx('btn-ripple',className)}>
            {children}
        </button>
    )
}

export default ButtonRipple
