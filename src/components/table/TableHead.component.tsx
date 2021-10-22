import React, { ReactElement } from 'react'

interface Props {
    className?: string,
    children?: ReactElement | ReactElement[]
}

function TableHead({className,children}: Props): ReactElement {
    return (
        <thead className={className}>
            {children}
        </thead>
    )
}

export default TableHead
