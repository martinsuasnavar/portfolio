import React, { ReactNode } from 'react';

interface SeparatorProps{
    topMargin: string;
    bottomMargin: string;
}

export default function Separator({topMargin, bottomMargin}: SeparatorProps) {
    const separatorStyle = "w-20 h-0.5 bg-white m-2";

    return (
    <main>
        <div className={`h-${topMargin}`}/>
        <section className={`flex text-center justify-center`}>
            <div>
                <div className={separatorStyle}>
                </div>
                <div className={separatorStyle}>
                </div>
                <div className={separatorStyle}>
                </div>
            </div>
        </section>
        <div className={`h-${bottomMargin}`}/>
    </main>
  );
}