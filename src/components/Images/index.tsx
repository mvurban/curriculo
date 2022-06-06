import { ReactNode } from "react";
import style from './images.module.scss';

interface IImages {
   children: ReactNode,
   marginTop?: number,
   width?:number,
   height?:number
}

export function Images({ children, marginTop, width=400, height=400 }: IImages) {

   return (
      <>
         <div className={style.imagesContainer} style={{ marginTop}}>
            <div>
               {children}
            </div>
         </div>
      </>
   );
}