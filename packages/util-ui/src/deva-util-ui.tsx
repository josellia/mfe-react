// Anything exported from this file is importable by other in-browser modules.
import React from 'react';

interface IPropsNavigate {
    path: string;
    children?: React.ReactNode;
}
export const Navigate: React.FC<IPropsNavigate> = (props: IPropsNavigate) => {
   const {path, children} = props;
    return (
        <button>
         {children}
        </button>
    );
}
