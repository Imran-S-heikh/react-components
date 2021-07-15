import clsx from 'clsx';
import React, { ReactElement, ReactNode, useEffect } from 'react';
import './backdrop.style.scss';

interface Props {
    children: ReactNode,
    className?: string,
    open: boolean
}

function Backdrop({ children, className,open }: Props): ReactElement|null {

    useEffect(() => {

        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto';
        }
    }, []);

    if (!open) {
        return null;
    }

    return (
        <div className={clsx('backdrop', className)}>
            {children}
        </div>
    )
}

export default Backdrop
