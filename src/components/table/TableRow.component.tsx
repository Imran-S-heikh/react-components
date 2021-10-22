import React, { Children, ReactElement, useContext } from 'react'
import { RowContext } from './TableBody.component';

interface Props {
    children: ReactElement | ReactElement[],
    className?: string
}

function TableRow({children,className}: Props): ReactElement {


    return (
        <tr className={className}>
            {children}
        </tr>
    )
}

TableRow.displayName = "TableRow";

export default TableRow
