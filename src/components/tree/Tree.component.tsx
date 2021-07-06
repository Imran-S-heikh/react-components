import React, { ReactElement, ReactNode } from 'react'
import { useState } from 'react';
import { createContext } from 'react'

interface Props {
    children: ReactNode,
}

type TreeContextType = {
    height?: number,
    color?: {
        default: string,
        active: string
    },
    point?: string,
    strokeWidth?: number
}

export const TreeContext = createContext<Partial<TreeContextType>>({});

function Tree({ children,...contextArgs }: Props & TreeContextType): ReactElement {


    return (
        <TreeContext.Provider value={contextArgs}>
            <div className="flex-1">
                {children}
            </div>
        </TreeContext.Provider>
    )
}

export default Tree
