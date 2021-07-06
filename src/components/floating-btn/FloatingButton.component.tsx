import { Add } from '@material-ui/icons'
import React, { ReactElement } from 'react'
import './floating-btn.style.scss'


interface Props {
    
}

function FloatingButton({}: Props): ReactElement {
    return (
        <div className="floating-btn">
            <Add className="icon" />
            <div className="circle" ></div>
            <div className="circle" style={{animationDelay: '1s'}}></div>
            <div className="circle" style={{animationDelay: '2s'}}></div>
            <div className="circle" style={{animationDelay: '3s'}}></div>
        </div>
    )
}

export default FloatingButton
