import { ReactNode } from "react";
import style from './moments.module.scss';

interface IMoments {
   title?: string,
   titleLine2?: string,
   children: ReactNode,
   marginToTop?: number
}

export function Moments({ title, titleLine2, children, marginToTop }: IMoments) {

   return (
      <>
         <div className={style.momentContainer} style={{ marginTop: marginToTop }}>
            {
               title && titleLine2 ?
                  <h2>{title} <br></br>{titleLine2}</h2>

                  : title && !titleLine2 ?
                     <h2>{title}</h2>
                     :
                     ""
            }
            <div>
               {children}
            </div>
         </div>
      </>
   );
}