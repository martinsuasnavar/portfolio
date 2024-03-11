import React, { ReactNode, MouseEventHandler } from 'react';

interface SubMenuButtonProps{
    children: ReactNode;
    onClick: MouseEventHandler<HTMLDivElement>;
}

export default function SubMenuButton({children, onClick}: SubMenuButtonProps) {
    
    return (
        <nav onClick={onClick} className="hover:bg-blue-500 cursor-pointer border-solid border border-indigo-500/50 bg-black/40 p-4 w-40">
            {children}
        </nav>
    );
}