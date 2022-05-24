import { ReactNode } from "react";
import style from './images.module.scss';

interface IImages {
   children: ReactNode,
   marginToTop?: number
}

export function Images({ children, marginToTop }: IImages) {

   return (
      <>
         <div className={style.imagesContainer} style={{ marginTop: marginToTop }}>
            <div>
               {children}
            </div>
         </div>
      </>
   );
}