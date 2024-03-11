import React, { ReactNode } from 'react';

interface WhiteBoxProps {
  children: ReactNode;
}

export default function WhiteBox({ children }: WhiteBoxProps) {
    

    return (
    <div className={`bg-white text-black inline-block rounded-lg p-1.5`}>
      {children}
    </div>
  );
}