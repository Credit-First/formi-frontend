import React, { ReactNode, useEffect } from 'react';
import { BackDropProps } from '@/types';

export default function BackDrop({ onClick, children }: BackDropProps) {
    useEffect(() => {
        window.addEventListener('click', onClick);
        return () => {
            window.removeEventListener('click', onClick);
        };
    }, [onClick]);
    return (
        <div className="w-fit" onClick={e => e.stopPropagation()}>
            {children}
        </div>
    );
}
