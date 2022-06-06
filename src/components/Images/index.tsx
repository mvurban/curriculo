import { ReactNode } from "react";
import style from './images.module.scss';

interface IImages {
   children: ReactNode,
   marginTop?: number,
}

export function Images({ children, marginTop }: IImages) {

   return (
      <>
         <div className={style.imagesContainer} style={{ marginTop: marginTop}}>
            <div>
               {children}
            </div>
         </div>
      </>
   );
}