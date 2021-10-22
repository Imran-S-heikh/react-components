import React, { ReactElement } from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import './magicbox.style.scss';

interface Props {

}



function MagicBox({ }: Props): ReactElement {

    const state = useRef({
        scale: 1,
        panning: false,
        pointX: 0,
        pointY: 0,
        start: { x: 0, y: 0 }
    });
    


    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        ref.current && ref.current.addEventListener('wheel', handleZoom)
        ref.current && ref.current.addEventListener('mousemove', handleMouseMove)
    }, [])

    function setTransform() {
        if (ref.current) {
            const { pointX, pointY, scale } = state.current;
            ref.current.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`;
        }
    }

    function handleMouseDown(e: React.MouseEvent<HTMLDivElement>) {
        e.preventDefault();


        state.current.start = { x: e.clientX - state.current.pointX, y: e.clientY - state.current.pointY };
        state.current.panning = true;
    }

    function handleMouseUp() {
        state.current.panning = false;
    }

    function handleMouseMove(e: MouseEvent) {
        e.preventDefault();


        if (!state.current.panning) {
            return;
        }
        state.current.pointX = (e.clientX - state.current.start.x);
        state.current.pointY = (e.clientY - state.current.start.y);
        
        setTransform();
    }

    function handleZoom(e: WheelEvent) {
        e.preventDefault();


        const xs = (e.clientX - state.current.pointX) / state.current.scale;
        const ys = (e.clientY - state.current.pointY) / state.current.scale;
        state.current.scale += e.deltaY * -0.001;
        state.current.scale = Math.min(Math.max(.125, state.current.scale), 4);
        state.current.pointX = e.clientX - xs * state.current.scale;
        state.current.pointY = e.clientY - ys * state.current.scale;


        setTransform();
    }

    return (
        <div onMouseUp={handleMouseUp}>
            <div
                ref={ref}
                onMouseDown={handleMouseDown}
                className="zoom"
            >
                <img src="https://picsum.photos/1280/720" alt="zoom" />
            </div>
        </div>
    )
}

export default MagicBox
