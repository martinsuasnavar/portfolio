import React, { ReactNode } from 'react';

interface WhiteBoxProps {
  children: ReactNode;
}

export default function GenericButton({ children }: WhiteBoxProps) {
    return(
        <div className="max-w-full bg-gradient-to-r from-indigo-950 to-pink-900 p-2 fixed top-0 left-0 w-full">
            {children}
        </div>
    )
};