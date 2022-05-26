import { ReactNode } from "react";
import style from './images.module.scss';

interface IImages {
   children: ReactNode,
   marginToTop?: number,
   width?:number,
   height?:number
}

export function Images({ children, marginToTop, width=400, height=400 }: IImages) {

   return (
      <>
         <div className={style.imagesContainer} style={{ marginTop: marginToTop, width, height }}>
            <div>
               {children}
            </div>
         </div>
      </>
   );
}