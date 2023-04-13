// Anything exported from this file is importable by other in-browser modules.
import React from 'react';
import { navigateToUrl } from 'single-spa';

interface IPropsNavigate {
    path: string;
    children?: React.ReactNode;
}
export const Navigate: React.FC<IPropsNavigate> = (props: IPropsNavigate) => {
   const {path, children} = props;

   const originPath = window.location.pathname;

   function redirect(e: React.MouseEvent<HTMLButtonElement>) {
        navigateToUrl(e.currentTarget.name);
       console.log(` Rota saindo de ${originPath} para a rota ${e.currentTarget.name}`)
   }
    return (
        <button name={path} onClick={redirect}>
         {children}
        </button>
    );
}
