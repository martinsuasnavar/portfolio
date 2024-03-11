import React, { ReactNode, MouseEventHandler } from 'react';

interface SubMenuButtonProps{
    children: ReactNode;
    onClick: MouseEventHandler<HTMLDivElement>;
}

export default function SubMenuButton({children, onClick}: SubMenuButtonProps) {
    
    return (
        <nav onClick={onClick} className="text-white hover:bg-blue-500/10 cursor-pointer border border-indigo-500/10 bg-black/40 p-4 w-40">
            {children}
        </nav>
    );
}